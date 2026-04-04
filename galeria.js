// ============================================
// SISTEMA DE FILTROS PARA VIDEOS - PIXELADO CORREGIDO
// ============================================

let filtroActual = 'none';

// Definición de filtros CSS (PIXELADO CORREGIDO)
const filtros = {
    'none': '',
    'blur': 'blur(4px)',
    'pixelate': 'contrast(1.2) brightness(1.1) saturate(1.5)', // Efecto de pixelado visual
    'thermal': 'sepia(0.8) saturate(3) hue-rotate(320deg) brightness(1.1)',
    'color-adjust': 'brightness(1.1) contrast(1.2) saturate(1.3)',
    'smooth': 'blur(2px) contrast(0.9) brightness(1.05)',
    'pastel': 'brightness(1.1) saturate(0.7) sepia(0.3)',
    'saturation': 'saturate(2.5) contrast(1.1)'
};

// Agregar filtros SVG (solo para thermal como respaldo)
function agregarFiltrosSVG() {
    if (document.getElementById('filtrosSVG')) return;
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('style', 'position: absolute; width: 0; height: 0; visibility: hidden;');
    svg.setAttribute('id', 'filtrosSVG');
    
    svg.innerHTML = `
        <defs>
            <filter id="thermal-effect-svg">
                <feColorMatrix type="matrix" values="
                    0.5 0.5 0.5 0 0
                    0   0.3 0   0 0
                    0   0   0.8 0 0
                    0   0   0   1 0"/>
            </filter>
        </defs>
    `;
    document.body.appendChild(svg);
}

// Aplicar filtro a todos los videos
function aplicarFiltroGlobal(tipo) {
    filtroActual = tipo;
    const videos = document.querySelectorAll('.video-filtrable');
    
    // Actualizar botones activos
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === tipo) {
            btn.classList.add('active');
        }
    });
    
    // Aplicar filtro a cada video
    videos.forEach(video => {
        // Restaurar propiedades por defecto
        video.style.imageRendering = 'auto';
        
        if (tipo === 'none') {
            video.style.filter = '';
        } else if (tipo === 'pixelate') {
            // EFECTO DE PIXELADO MEJORADO
            // Combinación de contrast, brightness y un pequeño scale para simular pixelado
            video.style.filter = 'contrast(1.5) brightness(1.3) saturate(2) blur(0.5px)';
            video.style.imageRendering = 'crisp-edges';
            
            // Forzar re-render para que el efecto se note
            video.style.transform = 'scale(0.999)';
            setTimeout(() => {
                video.style.transform = '';
            }, 50);
        } else if (tipo === 'thermal') {
            video.style.filter = 'sepia(0.8) saturate(3) hue-rotate(320deg) brightness(1.1)';
        } else if (filtros[tipo]) {
            video.style.filter = filtros[tipo];
        }
    });
    
    console.log(`🎨 Filtro aplicado: ${tipo}`);
}

// Alternar visibilidad del panel de filtros
function toggleFiltros() {
    const contenido = document.getElementById('filtrosContenido');
    const toggle = document.getElementById('filtrosToggle');
    
    if (contenido.classList.contains('collapsed')) {
        contenido.classList.remove('collapsed');
        toggle.innerHTML = '▲';
    } else {
        contenido.classList.add('collapsed');
        toggle.innerHTML = '▼';
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log("🎬 Galería con filtros iniciada - Pixelado mejorado");
    
    // Agregar filtros SVG
    agregarFiltrosSVG();
    
    // Manejar errores de carga de videos
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('error', function(e) {
            console.log('Error cargando video:', this.src);
            const card = this.closest('.video-card');
            if (card && !card.querySelector('.video-placeholder')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'video-placeholder';
                placeholder.innerHTML = '🎥 Video no disponible';
                placeholder.style.cssText = `
                    width: 100%;
                    aspect-ratio: 16/9;
                    background: rgba(0,0,0,0.7);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 18px;
                    color: #ff7a00;
                    border: 2px solid #ff7a00;
                    margin-bottom: 12px;
                `;
                this.style.display = 'none';
                this.parentNode.insertBefore(placeholder, this.nextSibling);
            }
        });
    });
    
    // Forzar que los videos tengan imageRendering adecuado
    setTimeout(() => {
        const videosFiltrables = document.querySelectorAll('.video-filtrable');
        videosFiltrables.forEach(v => {
            v.style.imageRendering = 'auto';
        });
    }, 500);
});