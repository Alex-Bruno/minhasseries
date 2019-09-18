import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//
import api from '../../services/api';
import RenderSerie from '../../components/RenderSerie';

export default function Home() {
    const [series, setSeries] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        loadGenres();
        loadSeries();
    }, []);

    function loadGenres() {
        setLoading(true);
        api.loadGenres().then(res => {
            setGenres(res.data);
        });
        setLoading(false);
    };

    function loadSeries() {
        setLoading(true);
        api.loadSeries().then(res => {
            setSeries(res.data);
        });
        setLoading(false);
    };

    function rederGenreLink(genre) {
        return(
            <Link to={`/${genre}/series`} key={genre}>
                <button className="btn btn-danger btn-geral">
                    {genre}
                </button>
            </Link>
        );
    };

    return (
        <div>
            <section id="intro" className="intro-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" align="center">
                            <h1>
                                <img className="img-responsive" src="images/logo.png" alt="logo" />
                            </h1>
                            <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
                        </div>
                        <div className="col-lg-12" align="center">
                            {
                                !loading && genres.map(genre => rederGenreLink(genre) )
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="services-section">
                <div className="container">
                    <div className="row">
                        <div  className="col=lg-12">
                            <h1>Para assistir</h1>
                            <div id="series" className="row list-group">
                                {
                                    loading ? 'Carregando...' : series.map(serie => serie.status === 'toWatch' && <RenderSerie key={serie.id} serie={serie} loadSeries={loadSeries} />)
                                }
                                {
                                    series.length === 0 && !loading && 'Não há séries para assistir.'
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}