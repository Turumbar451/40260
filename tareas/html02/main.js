
import { displayCDs } from './utils.js';

document.getElementById("loadBtn").addEventListener("click", async () => {
    try {
        const response = await fetch('./cd_catalog.xml');
        if (!response.ok) throw new Error(`Error de red: ${response.status}`);

        const xmlText = await response.text();
        const xmlDoc = new DOMParser().parseFromString(xmlText, "application/xml");
        const cds = xmlDoc.getElementsByTagName("CD");

        displayCDs(cds);
    } catch (error) {
        console.error("Error al cargar el catálogo:", error);
        document.getElementById("demo").innerHTML = `<tr><td colspan="2" style="color:red;">${error.message}</td></tr>`;
    }
});
