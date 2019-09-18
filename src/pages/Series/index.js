/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
//
import RenderSerie from '../../components/RenderSerie';
import api from '../../services/api';

export default function Series({match}) {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState([]);
    const genre = match.params.genre;

    function loadSeries() {
        setLoading(true);
        api.loadSeriesByGenre(genre).then(res => {
            setSeries(res.data);
        });
        setLoading(false);
    };

    useEffect(() => {
        loadSeries();
    }, [genre]);

    return (
        <section className="intro-section container">
            <h1>Séries {genre}</h1>
            <div id="series" className="row list-group">
                {loading ? 'Carregando...' : series.map(serie => <RenderSerie key={serie.id} serie={serie} loadSeries={loadSeries} />)}
                {!loading && series.length === 0 && 'Não há séries cadastradas com esse gênero.'}
            </div>
        </section>
    );
}