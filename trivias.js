// ============================================
// TRIVIA MUNDIAL - VERSIÓN MEJORADA
// ============================================

const questions = [
    {
        question: "¿En qué año se celebró el primer Mundial de Fútbol en Uruguay?",
        options: ["1930", "1934", "1938", "1950"],
        correct: 0
    },
    {
        question: "¿Cuántas Copas del Mundo ha ganado la selección de Brasil?",
        options: ["3", "4", "5", "6"],
        correct: 2
    },
    {
        question: "¿Qué selección ganó el Mundial de 1978, celebrado en Argentina?",
        options: ["Argentina", "Holanda", "Italia", "Brasil"],
        correct: 0
    },
    {
        question: "¿En qué país se jugó el Mundial de 1998, ganado por Francia?",
        options: ["Italia", "Francia", "Brasil", "Japón"],
        correct: 1
    },
    {
        question: "¿Cuál fue el primer país en ganar un Mundial fuera de su continente?",
        options: ["Brasil", "Argentina", "España", "Alemania"],
        correct: 2 // España ganó en Sudáfrica 2010
    },
    {
        question: "¿Qué selección ha ganado más Mundiales después de Brasil?",
        options: ["Italia y Alemania", "Argentina y Uruguay", "Francia y Argentina", "España y Alemania"],
        correct: 0
    },
    {
        question: "¿En qué país se jugó el Mundial de 2014?",
        options: ["Sudáfrica", "Rusia", "Brasil", "Alemania"],
        correct: 2
    },
    {
        question: "¿Qué país fue campeón del Mundial de 2018?",
        options: ["Croacia", "Francia", "Bélgica", "Inglaterra"],
        correct: 1
    },
    {
        question: "¿Cuál de estos países NO será sede del Mundial 2026?",
        options: ["Canadá", "México", "Estados Unidos", "Colombia"],
        correct: 3
    },
    {
        question: "¿Qué selección ganó el Mundial de 2022 en Qatar?",
        options: ["Francia", "Argentina", "Brasil", "Croacia"],
        correct: 1
    }
];

// Estado del juego
let currentQuestion = 0;
let score = 0;
let answered = false;
const TOTAL_PREGUNTAS = questions.length;
const PUNTOS_POR_PREGUNTA = 10;
const PUNTUACION_MAXIMA = TOTAL_PREGUNTAS * PUNTOS_POR_PREGUNTA; // 100

// Elementos del DOM
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const progresoEl = document.getElementById('progreso');
const modalResultado = document.getElementById('modalResultado');
const puntajeFinal = document.getElementById('puntajeFinal');
const mensajeFinal = document.getElementById('mensajeFinal');

// Letras para las opciones
const letras = ['A', 'B', 'C', 'D'];

// Cargar pregunta actual
function loadQuestion() {
    answered = false;
    const q = questions[currentQuestion];
    
    // Actualizar pregunta
    questionEl.textContent = q.question;
    
    // Actualizar progreso
    progresoEl.textContent = `Pregunta ${currentQuestion + 1} de ${TOTAL_PREGUNTAS}`;
    
    // Limpiar y crear opciones
    optionsEl.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = `${letras[index]}. ${option}`;
        btn.setAttribute('data-index', index);
        
        btn.addEventListener('click', () => checkAnswer(index));
        optionsEl.appendChild(btn);
    });
    
    // Limpiar feedback
    feedbackEl.textContent = 'Selecciona una respuesta';
    feedbackEl.className = 'feedback';
}

// Verificar respuesta
function checkAnswer(selectedIndex) {
    if (answered) return;
    
    answered = true;
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    const isCorrect = selectedIndex === q.correct;
    
    // Deshabilitar todos los botones
    buttons.forEach(btn => {
        btn.classList.add('disabled');
    });
    
    // Marcar la respuesta correcta
    buttons[q.correct].classList.add('correct');
    
    // Si la respuesta seleccionada es incorrecta, marcarla
    if (!isCorrect) {
        buttons[selectedIndex].classList.add('incorrect');
    }
    
    // Actualizar puntuación
    if (isCorrect) {
        score += PUNTOS_POR_PREGUNTA;
        scoreEl.textContent = score;
        
        feedbackEl.textContent = '✅ ¡Correcto! +10 puntos';
        feedbackEl.className = 'feedback feedback-correct';
    } else {
        feedbackEl.textContent = `❌ Incorrecto. La respuesta era: ${q.options[q.correct]}`;
        feedbackEl.className = 'feedback feedback-incorrect';
    }
    
    // Avanzar a la siguiente pregunta o mostrar resultados
    setTimeout(() => {
        if (currentQuestion < TOTAL_PREGUNTAS - 1) {
            // Siguiente pregunta
            currentQuestion++;
            loadQuestion();
        } else {
            // Fin del juego - mostrar resultados
            mostrarResultadosFinales();
        }
    }, 2000);
}

// Mostrar resultados finales
function mostrarResultadosFinales() {
    const porcentaje = (score / PUNTUACION_MAXIMA) * 100;
    const aprobado = porcentaje >= 70;
    
    // Actualizar modal
    puntajeFinal.textContent = `${score}/${PUNTUACION_MAXIMA}`;
    
    let mensaje = '';
    if (aprobado) {
        mensaje = '🎉 ¡FELICIDADES! Has aprobado la trivia.';
        mensajeFinal.className = 'mensaje-final aprobado';
    } else {
        mensaje = '💪 Sigue practicando. ¡Puedes mejorar!';
        mensajeFinal.className = 'mensaje-final desaprobado';
    }
    
    mensajeFinal.textContent = mensaje;
    
    // Mostrar modal
    modalResultado.classList.add('active');
}

// Reiniciar trivia
function reiniciarTrivia() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    
    scoreEl.textContent = '0';
    modalResultado.classList.remove('active');
    
    loadQuestion();
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    loadQuestion();
    
    // Cerrar modal con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalResultado.classList.contains('active')) {
            modalResultado.classList.remove('active');
        }
    });
});

// Exponer función para el botón de reinicio
window.reiniciarTrivia = reiniciarTrivia;