export function updateDemo(message) {
    const demo = document.getElementById("demo");
    if (demo) {
        demo.innerHTML = message;
        console.log("Elemento modificado:", demo);
    } else {
        console.error("No se encontró el elemento con id 'demo'");
    }
}
