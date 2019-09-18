/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useRef} from 'react';
//
import api, {statuses} from '../../services/api';

export default function New({history, match}) {
  const [genres, setGenres] = useState([]);
  const id = match.params.id;
  const refName = useRef('');
  const refStatus = useRef('');
  const refGenre = useRef('');
  const refComments = useRef('');

  useEffect(() => {
    loadGenres();
  }, []);

  function loadGenres() {
    api.loadGenres().then(res => {
        setGenres(res.data);
        id && loadSerie();
    });
  };

  function loadSerie() {
    api.loadSeriesById(id).then((res)=> {
      const serie = res.data;
      refName.current.value = serie.name;
      refStatus.current.value = serie.status;
      refGenre.current.value = serie.genre;
      refComments.current.value = serie.comments;
    });
  }

  function saveSerie(e) {
    e.preventDefault();
    const newSerie = {
        id,
        name: refName.current.value,
        status: refStatus.current.value,
        genre: refGenre.current.value,
        comments: refComments.current.value,
    };
    if(!id)
        api.saveSerie(newSerie).then(() => history.push(`/${refGenre.current.value}/series`));
    else
        api.updateSerie(newSerie).then(() => history.push(`/${refGenre.current.value}/series`));
  };

  return (
    <section className="intro-section container">
        <h1>Nova Série</h1>
        <form onSubmit={saveSerie}>
            <div className="row">
                <div className="col-md-4">
                    <input type="text" ref={refName} className="form-control" placeholder="Nome" required /> 
                </div>
                <div className="col-md-4">
                    <select className="form-control" ref={refStatus} required>
                        {Object.keys(statuses).map(key => (
                            <option key={key} value={key}>{statuses[key]}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <select className="form-control" ref={refGenre} required>
                       { genres.map(key =>  (
                            <option key={key} value={key}>{key}</option>
                       )) }
                    </select>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-12">
                    <textarea ref={refComments} className="form-control" placeholder="Comentários" rows="5" required />
                </div>
                <div id="btn-save">
                    <button type="submit" className="btn btn-success">Salvar</button>
                    <button type="reset" className="btn btn-danger">Limpar</button>
                </div>
            </div>
        </form>
    </section>
  );
}
