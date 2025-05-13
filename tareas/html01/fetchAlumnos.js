import { displayAlumnos } from './displayAlumnos.js';

export function fetchAlumnos() {
    const loadingIndicator = document.getElementById('loading');
    const errorContainer = document.getElementById('error');
    const tableBody = document.getElementById('tableBody');

    loadingIndicator.style.display = 'inline';
    errorContainer.textContent = '';
    tableBody.innerHTML = '';

    fetch('alumnos.xml')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error de red: ${response.status}`);
            }
            return response.text();
        })
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            displayAlumnos(data);
        })
        .catch(error => {
            errorContainer.textContent = `Error al cargar los datos: ${error.message}`;
            console.error('Error:', error);
        })
        .finally(() => {
            loadingIndicator.style.display = 'none';
        });
}
