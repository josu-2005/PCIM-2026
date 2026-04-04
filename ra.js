// ============================================
// VERSIÓN OPTIMIZADA - SIN ELEMENTOS INNECESARIOS
// ============================================

function toggleCamara() {
    const sceneEl = document.querySelector('a-scene');
    const btn = document.getElementById('btnCamara');
    
    // Acceder al sistema de MindAR
    const arSystem = sceneEl.systems['mindar-image-system'];

    if (btn.innerHTML.includes('APAGAR')) {
        // 1. Detener el motor de MindAR
        arSystem.stop();
        
        // 2. Detener físicamente la cámara (apagar el led/sensor)
        const video = document.querySelector('video');
        if (video && video.srcObject) {
            video.srcObject.getTracks().forEach(track => track.stop());
        }

        // 3. UI
        sceneEl.style.display = 'none';
        btn.innerHTML = '📷 CAMARA';
        btn.classList.remove('camara-activa');
    } else {
        // 1. Mostrar la escena
        sceneEl.style.display = 'block';
        
        // 2. Reiniciar el motor (esto vuelve a pedir permiso de cámara)
        arSystem.start();

        // 3. UI
        btn.innerHTML = '📷 APAGAR';
        btn.classList.add('camara-activa');
    }
}

function abrirInfo() {
    document.getElementById('infoOverlay').classList.add('active');
    document.body.style.overflow = 'hidden'; // Evita scroll
}

function cerrarInfo() {
    document.getElementById('infoOverlay').classList.remove('active');
    document.body.style.overflow = 'auto'; // Restaura scroll
}

function reproducir() {
    alert('▶️ Enfoca un escudo para ver el modelo 3D');
}

// Cerrar con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cerrarInfo();
    }
});

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Sistema AR listo");
});
// --- COMPONENTE 1: ROTAR ---
AFRAME.registerComponent('anim-rotar', {
    schema: { active: { default: false } },
    tick: function () {
        if (this.data.active) {
            this.el.object3D.rotation.y += 0.02;
        }
    }
});

// --- COMPONENTE 2: SALTAR ---
AFRAME.registerComponent('anim-saltar', {
    schema: { active: { default: false } },
    init: function() { this.initialY = this.el.object3D.position.y; this.time = 0; },
    tick: function (time, timeDelta) {
        if (this.data.active) {
            this.time += timeDelta * 0.005;
            this.el.object3D.position.y = this.initialY + (Math.abs(Math.sin(this.time)) * 0.2);
        } else {
            this.el.object3D.position.y = this.initialY;
        }
    }
});

// --- LÓGICA DE CONTROL ---
let animando = false;
let modoActual = 'rotar'; // Empieza en rotar por defecto

function reproducir() {
    const btn = document.getElementById('btnReproducir');
    const modelos = document.querySelectorAll('a-gltf-model');
    
    animando = !animando; // Cambiar estado global

    if (animando) {
        btn.innerHTML = '⏸️ DETENER';
        // Activar el que esté seleccionado actualmente
        actualizarAnimaciones();
    } else {
        btn.innerHTML = '▶️ REPRODUCIR';
        // Apagar todo
        modelos.forEach(m => {
            m.setAttribute('anim-rotar', 'active: false');
            m.setAttribute('anim-saltar', 'active: false');
        });
    }
}

function cambiar() {
    // EL FILTRO: Solo funciona si se está reproduciendo
    if (!animando) {
        console.log("El botón cambiar no hace nada porque no has dado a reproducir.");
        return; 
    }

    // Alternar el modo
    modoActual = (modoActual === 'rotar') ? 'saltar' : 'rotar';
    actualizarAnimaciones();
}

function actualizarAnimaciones() {
    const modelos = document.querySelectorAll('a-gltf-model');
    modelos.forEach(m => {
        if (modoActual === 'rotar') {
            m.setAttribute('anim-rotar', 'active: true');
            m.setAttribute('anim-saltar', 'active: false');
        } else {
            m.setAttribute('anim-rotar', 'active: false');
            m.setAttribute('anim-saltar', 'active: true');
        }
    });
}