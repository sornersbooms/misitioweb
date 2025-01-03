// Abrir el popup
function openPopup1() {
    const popup = document.getElementById('videoPopup');
    const iframe = document.getElementById('youtubeVideo');
    // Inserta aquí el ID de tu video
    const videoId = "huH0Hi2c3CM"; 
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
    popup.style.display = 'flex';
}

function openPopup2() {
    const popup = document.getElementById('videoPopup');
    const iframe = document.getElementById('youtubeVideo');
    // Inserta aquí el ID de tu video
    const videoId = "gKwOJxPlCmI"; 
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
    popup.style.display = 'flex';
}

function openPopup3() {
    const popup = document.getElementById('videoPopup');
    const iframe = document.getElementById('youtubeVideo');
    // Inserta aquí el ID de tu video
    const videoId = "_nw-GDB-Rns"; 
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
    popup.style.display = 'flex';
}


function openPopup4() {
    const popup = document.getElementById('videoPopup');
    const iframe = document.getElementById('youtubeVideo');
    // Inserta aquí el ID de tu video
    const videoId = "s4edqBaaUxs"; 
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
    popup.style.display = 'flex';
}

// Cerrar el popup
function closePopup() {
    const popup = document.getElementById('videoPopup');
    const iframe = document.getElementById('youtubeVideo');
    popup.style.display = 'none';
    iframe.src = ""; // Limpiar el src para detener el video
}
