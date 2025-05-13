import { fetchAlumnos } from './fetchAlumnos.js';

document.addEventListener('DOMContentLoaded', () => {
    const loadButton = document.getElementById('loadButton');
    loadButton.addEventListener('click', fetchAlumnos);
});
