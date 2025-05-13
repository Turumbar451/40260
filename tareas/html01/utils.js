export function getElementTextContent(parent, tagName) {
    const elements = parent.getElementsByTagName(tagName);
    if (elements.length > 0 && elements[0].firstChild) {
        return elements[0].firstChild.nodeValue;
    }
    return "";
}

export function formatDate(dateStr) {
    if (!dateStr) return "";

    try {
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return dateStr;

        return date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    } catch (e) {
        return dateStr;
    }
}
