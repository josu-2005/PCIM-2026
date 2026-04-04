// Datos de los equipos con sus estadísticas
const equipos = [
    {
        nombre: "México",
        logo: "img/Mexico.png",
        datos: {
            participaciones: 17,
            mejor_resultado: "Cuartos de final (1970, 1986)",
            ranking_fifa: 12,
            titulos: 0,
            goles_historico: 60,
            partidos_jugados: 57
        }
    },
    {
        nombre: "USA",
        logo: "img/USA.png",
        datos: {
            participaciones: 11,
            mejor_resultado: "Semifinal (1930)",
            ranking_fifa: 13,
            titulos: 0,
            goles_historico: 40,
            partidos_jugados: 37
        }
    },
    {
        nombre: "Canadá",
        logo: "img/Canada.png",
        datos: {
            participaciones: 2,
            mejor_resultado: "Fase de grupos (1986, 2022)",
            ranking_fifa: 48,
            titulos: 0,
            goles_historico: 2,
            partidos_jugados: 6
        }
    },
    {
        nombre: "Brasil",
        logo: "img/Brasil.png",
        datos: {
            participaciones: 22,
            mejor_resultado: "Campeón (1958,1962,1970,1994,2002)",
            ranking_fifa: 5,
            titulos: 5,
            goles_historico: 237,
            partidos_jugados: 114
        }
    },
    {
        nombre: "Alemania",
        logo: "img/Alemania.png",
        datos: {
            participaciones: 20,
            mejor_resultado: "Campeón (1954,1974,1990,2014)",
            ranking_fifa: 16,
            titulos: 4,
            goles_historico: 232,
            partidos_jugados: 112
        }
    },
    {
        nombre: "Argentina",
        logo: "img/Argentina.png",
        datos: {
            participaciones: 18,
            mejor_resultado: "Campeón (1978,1986,2022)",
            ranking_fifa: 1,
            titulos: 3,
            goles_historico: 152,
            partidos_jugados: 88
        }
    },
    {
        nombre: "España",
        logo: "img/Espana.png",
        datos: {
            participaciones: 16,
            mejor_resultado: "Campeón (2010)",
            ranking_fifa: 8,
            titulos: 1,
            goles_historico: 108,
            partidos_jugados: 67
        }
    },
    {
        nombre: "Francia",
        logo: "img/Francia.png",
        datos: {
            participaciones: 16,
            mejor_resultado: "Campeón (1998,2018)",
            ranking_fifa: 2,
            titulos: 2,
            goles_historico: 136,
            partidos_jugados: 73
        }
    },
    {
        nombre: "Uruguay",
        logo: "img/Uruguay.png",
        datos: {
            participaciones: 14,
            mejor_resultado: "Campeón (1930,1950)",
            ranking_fifa: 11,
            titulos: 2,
            goles_historico: 89,
            partidos_jugados: 59
        }
    },
    {
        nombre: "Italia",
        logo: "img/Italia.png",
        datos: {
            participaciones: 18,
            mejor_resultado: "Campeón (1934,1938,1982,2006)",
            ranking_fifa: 9,
            titulos: 4,
            goles_historico: 128,
            partidos_jugados: 83
        }
    }
];

// Elementos del DOM
const equiposLista = document.getElementById('equipos-lista');
const detalleLogo = document.getElementById('detalle-logo');
const detalleNombre = document.getElementById('detalle-nombre');
const detalleStats = document.getElementById('detalle-stats');

// Placeholder por si no carga una imagen
const PLACEHOLDER = 'img/placeholder.png';

// Cargar grid de equipos
function cargarEquipos() {
    if (!equiposLista) return;
    
    equiposLista.innerHTML = '';
    
    equipos.forEach((equipo, index) => {
        const equipoDiv = document.createElement('div');
        equipoDiv.className = 'equipo-item';
        equipoDiv.setAttribute('data-index', index);
        equipoDiv.setAttribute('role', 'button');
        equipoDiv.setAttribute('tabindex', '0');
        equipoDiv.setAttribute('aria-label', `Ver estadísticas de ${equipo.nombre}`);
        
        equipoDiv.innerHTML = `
            <img src="${equipo.logo}" 
                 alt="${equipo.nombre}" 
                 class="equipo-logo" 
                 loading="lazy"
                 onerror="this.src='${PLACEHOLDER}'">
            <span class="equipo-nombre">${equipo.nombre}</span>
        `;
        
        equipoDiv.addEventListener('click', () => mostrarDetalle(index));
        equipoDiv.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                mostrarDetalle(index);
            }
        });
        
        equiposLista.appendChild(equipoDiv);
    });
}

// Mostrar detalle del equipo seleccionado
function mostrarDetalle(index) {
    const equipo = equipos[index];
    if (!equipo) return;
    
    const datos = equipo.datos;
    
    // Actualizar logo
    detalleLogo.src = equipo.logo;
    detalleLogo.alt = equipo.nombre;
    detalleLogo.onerror = () => { detalleLogo.src = PLACEHOLDER; };
    
    detalleNombre.textContent = equipo.nombre;
    
    // Generar estadísticas
    detalleStats.innerHTML = `
        <div class="stat-item">
            <div class="stat-label">Participaciones</div>
            <div class="stat-value">${datos.participaciones}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">Mejor resultado</div>
            <div class="stat-value">${datos.mejor_resultado}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">Ranking FIFA</div>
            <div class="stat-value">${datos.ranking_fifa}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">Títulos</div>
            <div class="stat-value">${datos.titulos}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">Goles históricos</div>
            <div class="stat-value">${datos.goles_historico}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">Partidos jugados</div>
            <div class="stat-value">${datos.partidos_jugados}</div>
        </div>
    `;
    
    // Resaltar el equipo seleccionado
    document.querySelectorAll('.equipo-item').forEach(item => {
        item.classList.remove('seleccionado');
    });
    
    const seleccionado = document.querySelector(`.equipo-item[data-index="${index}"]`);
    if (seleccionado) {
        seleccionado.classList.add('seleccionado');
        // Scroll suave hacia el elemento seleccionado (opcional)
        seleccionado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    cargarEquipos();
    
    // Seleccionar el primer equipo por defecto
    setTimeout(() => {
        if (equipos.length > 0) {
            mostrarDetalle(0);
        }
    }, 100);
});

// Manejar errores de carga de imágenes
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.src = PLACEHOLDER;
    }
}, true);