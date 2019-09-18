import React from 'react';
import {Link} from 'react-router-dom';
//
import api, {statuses} from '../../services/api';

export default function Series({serie, loadSeries}) {
    
    async function deleteSerie(id) {
        await api.deleteSerie(id);
        loadSeries();
    }

    return(
        <div className="item col-xs-12 col-md-4" key={serie.id}>
            <div className="thumbnail">
                <div className="caption">
                    <h4 className="group inner list-group-item-heading">
                        <strong>{serie.name}</strong>
                    </h4>
                    <div className="row">
                        <div className="col=xs=12 col-12">
                            <p className="lead">
                                {serie.genre} / {statuses[serie.status]}
                            </p>
                        </div>
                        <div className="col-xs-12 col-12">
                                <Link to={`/series/${serie.id}/edit`} className="btn btn-success btn-geral">
                                    Editar
                            </Link>
                            <button className="btn btn-danger btn-geral" onClick={() => deleteSerie(serie.id)}>
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}