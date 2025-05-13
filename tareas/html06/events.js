
export function attachImageEvents(containerId) {
    const container = document.getElementById(containerId);
    const images = container.querySelectorAll("img");

    images.forEach((img) => {
        img.addEventListener("click", () => {
            img.classList.toggle("redonda");
            alert(img.dataset.name);
        });
    });
}
