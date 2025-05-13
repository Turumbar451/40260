import { getElementTextContent, formatDate } from './utils.js';

export function displayAlumnos(xmlDoc) {
    const alumnos = xmlDoc.getElementsByTagName("alumno");
    const errorContainer = document.getElementById('error');
    const tableBody = document.getElementById('tableBody');

    if (alumnos.length === 0) {
        errorContainer.textContent = 'No se encontraron datos de alumnos';
        return;
    }

    let tableContent = '';

    for (let i = 0; i < alumnos.length; i++) {
        const alumnoElement = alumnos[i];
        const nombre = getElementTextContent(alumnoElement, "nombre");
        const nacimiento = getElementTextContent(alumnoElement, "nacimiento");
        const correo = alumnoElement.getAttribute("correo") || "";

        tableContent += `
      <tr>
        <td>${nombre}</td>
        <td>${formatDate(nacimiento)}</td>
        <td>${correo || '<span class="no-data">No disponible</span>'}</td>
      </tr>
    `;
    }

    tableBody.innerHTML = tableContent;
}
