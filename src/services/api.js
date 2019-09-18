import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001'
});

export const statuses = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assistir'
};

export const loadGenres = () => api.get('genres');
export const saveSerie = (data) => api.post('series', data);
export const updateSerie = (data) => api.put('series/'+data.id, data);
export const loadSeriesByGenre = (genre) => api.get('series?genre='+genre);
export const deleteSerie = (id) => api.delete('series/'+id);
export const loadSeriesById = (id) => api.get('series/'+id);
export const loadSeries = () => api.get('series');

const apis = {
    loadGenres: loadGenres,
    saveSerie: saveSerie,
    loadSeriesByGenre: loadSeriesByGenre,
    deleteSerie: deleteSerie,
    loadSeriesById: loadSeriesById,
    updateSerie: updateSerie,
    loadSeries: loadSeries
} 
export default apis;
