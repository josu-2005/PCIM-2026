// ============================================
// TRIVIA MUNDIAL - 10 PAÍSES × 10 PREGUNTAS
// 10 PREGUNTAS ALEATORIAS POR SESIÓN
// OPCIONES MEZCLADAS ALEATORIAMENTE
// ============================================

// ===== BANCO DE PREGUNTAS POR PAÍS =====
// NOTA: Ahora guardamos (pregunta, opciones, respuestaCorrecta)
// La respuestaCorrecta es el TEXTO de la respuesta, no el índice
const preguntasPorPais = {
    mexico: [
        { pregunta: "¿En qué año fue México sede del Mundial por primera vez?", opciones: ["1970", "1986", "1962", "1978"], respuestaCorrecta: "1970" },
        { pregunta: "¿Quién fue el máximo goleador de México en el Mundial de 1970?", opciones: ["Javier Hernández", "Luis Hernández", "Cuauhtémoc Blanco", "Javier Valdivia"], respuestaCorrecta: "Luis Hernández" },
        { pregunta: "¿Cómo se conoce el famoso penalti de Cuauhtémoc Blanco?", opciones: ["Penalti del conejo", "Penalti del huracán", "Penalti del tigre", "Penalti de la muerte"], respuestaCorrecta: "Penalti de la muerte" },
        { pregunta: "¿Contra qué equipo perdió México en octavos de final en 2014?", opciones: ["Holanda", "Alemania", "Brasil", "Argentina"], respuestaCorrecta: "Holanda" },
        { pregunta: "¿Qué portero mexicano es conocido como 'Memo'?", opciones: ["Jorge Campos", "Oswaldo Sánchez", "Guillermo Ochoa", "Antonio Carbajal"], respuestaCorrecta: "Guillermo Ochoa" },
        { pregunta: "¿En qué Mundial México logró su mejor participación (cuartos de final)?", opciones: ["1970 y 1986", "1994", "2002", "2010"], respuestaCorrecta: "1970 y 1986" },
        { pregunta: "¿Quién es el máximo goleador histórico de México en Mundiales?", opciones: ["Javier Hernández", "Luis Hernández", "Cuauhtémoc Blanco", "Hugo Sánchez"], respuestaCorrecta: "Javier Hernández" },
        { pregunta: "¿Contra qué país debutó México en el Mundial de 1930?", opciones: ["Argentina", "Francia", "Uruguay", "Chile"], respuestaCorrecta: "Francia" },
        { pregunta: "¿Qué jugador mexicano es conocido como 'Káiser'?", opciones: ["Rafael Márquez", "Javier Hernández", "Carlos Salcido", "Andrés Guardado"], respuestaCorrecta: "Rafael Márquez" },
        { pregunta: "¿En qué Mundial México eliminó a Alemania en fase de grupos?", opciones: ["2018", "2014", "2010", "2006"], respuestaCorrecta: "2018" }
    ],
    estadosUnidos: [
        { pregunta: "¿En qué año EE.UU. organizó el Mundial?", opciones: ["1994", "1998", "2002", "1990"], respuestaCorrecta: "1994" },
        { pregunta: "¿Cuál fue la mejor posición de EE.UU. en un Mundial?", opciones: ["Tercer lugar", "Cuartos de final", "Octavos de final", "Semifinales"], respuestaCorrecta: "Tercer lugar" },
        { pregunta: "¿Quién anotó el gol del triunfo contra Inglaterra en 1950?", opciones: ["Joe Gaetjens", "Landon Donovan", "Clint Dempsey", "Christian Pulisic"], respuestaCorrecta: "Joe Gaetjens" },
        { pregunta: "¿Contra qué equipo perdió EE.UU. en octavos de 2014?", opciones: ["Bélgica", "Alemania", "Portugal", "Ghana"], respuestaCorrecta: "Bélgica" },
        { pregunta: "¿Quién es el máximo goleador de EE.UU. en Mundiales?", opciones: ["Landon Donovan", "Clint Dempsey", "Christian Pulisic", "Brian McBride"], respuestaCorrecta: "Landon Donovan" },
        { pregunta: "¿En qué Mundial EE.UU. venció a México en octavos?", opciones: ["2002", "2006", "2010", "2014"], respuestaCorrecta: "2002" },
        { pregunta: "¿Qué jugador estadounidense es conocido por su cabello rubio y habilidad?", opciones: ["Christian Pulisic", "Landon Donovan", "Tim Howard", "Clint Dempsey"], respuestaCorrecta: "Tim Howard" },
        { pregunta: "¿Contra qué país empató 1-1 en el Mundial de 2022?", opciones: ["Gales", "Inglaterra", "Irán", "Holanda"], respuestaCorrecta: "Gales" },
        { pregunta: "¿Quién fue el entrenador de EE.UU. en el Mundial 2014?", opciones: ["Jurgen Klinsmann", "Bob Bradley", "Bruce Arena", "Gregg Berhalter"], respuestaCorrecta: "Jurgen Klinsmann" },
        { pregunta: "¿En qué año EE.UU. eliminó a México en octavos?", opciones: ["2002", "1998", "2006", "2010"], respuestaCorrecta: "2002" }
    ],
    canada: [
        { pregunta: "¿En qué año Canadá participó por primera vez en un Mundial?", opciones: ["1986", "1994", "2002", "2010"], respuestaCorrecta: "1986" },
        { pregunta: "¿Quién es el máximo goleador histórico de Canadá?", opciones: ["Cyle Larin", "Jonathan David", "Alphonso Davies", "Dwayne De Rosario"], respuestaCorrecta: "Cyle Larin" },
        { pregunta: "¿Contra qué equipo perdió Canadá en su debut mundialista?", opciones: ["Francia", "Hungría", "URSS", "Bélgica"], respuestaCorrecta: "Francia" },
        { pregunta: "¿Qué jugador canadiense juega en el Bayern Múnich?", opciones: ["Alphonso Davies", "Jonathan David", "Cyle Larin", "Tajon Buchanan"], respuestaCorrecta: "Alphonso Davies" },
        { pregunta: "¿Canadá será sede del Mundial junto a qué países?", opciones: ["EE.UU. y México", "México y Costa Rica", "EE.UU. y Jamaica", "México y Panamá"], respuestaCorrecta: "EE.UU. y México" },
        { pregunta: "¿Cómo se llamó el torneo de 1986 donde Canadá anotó 0 goles?", opciones: ["Mundial México 86", "Mundial España 82", "Mundial Italia 90", "Mundial Alemania 74"], respuestaCorrecta: "Mundial México 86" },
        { pregunta: "¿Qué posición ocupa Canadá en el ranking FIFA actual?", opciones: ["Top 50", "Top 30", "Top 10", "Top 100"], respuestaCorrecta: "Top 50" },
        { pregunta: "¿Quién es el portero titular de Canadá?", opciones: ["Milan Borjan", "Maxime Crépeau", "Dayne St. Clair", "James Pantemis"], respuestaCorrecta: "Milan Borjan" },
        { pregunta: "¿En qué Mundial Canadá anotó su primer gol?", opciones: ["2022", "1986", "1994", "2010"], respuestaCorrecta: "2022" },
        { pregunta: "¿Contra qué equipo anotó Canadá su primer gol en Mundial?", opciones: ["Croacia", "Bélgica", "Marruecos", "Japón"], respuestaCorrecta: "Croacia" }
    ],
    brasil: [
        { pregunta: "¿Cuántos Mundiales ha ganado Brasil?", opciones: ["4", "5", "6", "3"], respuestaCorrecta: "5" },
        { pregunta: "¿Quién es el máximo goleador histórico de Brasil en Mundiales?", opciones: ["Pelé", "Ronaldo", "Romário", "Neymar"], respuestaCorrecta: "Pelé" },
        { pregunta: "¿En qué año Brasil perdió 7-1 contra Alemania?", opciones: ["2014", "2010", "2018", "2006"], respuestaCorrecta: "2014" },
        { pregunta: "¿Quién anotó el gol de la victoria en el Mundial de 2002?", opciones: ["Ronaldo", "Rivaldo", "Ronaldinho", "Cafú"], respuestaCorrecta: "Ronaldo" },
        { pregunta: "¿Brasil es el único país que ha participado en...?", opciones: ["Todos los Mundiales", "20 Mundiales", "15 Mundiales", "10 Mundiales"], respuestaCorrecta: "Todos los Mundiales" },
        { pregunta: "¿En qué estadio se jugó la final de 2014?", opciones: ["Maracaná", "Estadio Mineirão", "Arena Corinthians", "Estadio Nacional"], respuestaCorrecta: "Maracaná" },
        { pregunta: "¿Quién fue el capitán de Brasil en 2002?", opciones: ["Cafú", "Roberto Carlos", "Ronaldo", "Rivaldo"], respuestaCorrecta: "Cafú" },
        { pregunta: "¿Qué jugador es conocido como 'O Rei'?", opciones: ["Pelé", "Zico", "Garrincha", "Romário"], respuestaCorrecta: "Pelé" },
        { pregunta: "¿Contra qué equipo perdió Brasil en cuartos de 2018?", opciones: ["Bélgica", "Francia", "Croacia", "Alemania"], respuestaCorrecta: "Bélgica" },
        { pregunta: "¿Quién anotó el gol más bonito de Brasil en 2002?", opciones: ["Ronaldinho", "Ronaldo", "Rivaldo", "Roberto Carlos"], respuestaCorrecta: "Ronaldinho" }
    ],
    alemania: [
        { pregunta: "¿Cuántos Mundiales ha ganado Alemania?", opciones: ["3", "4", "5", "2"], respuestaCorrecta: "4" },
        { pregunta: "¿Quién es el máximo goleador alemán en Mundiales?", opciones: ["Miroslav Klose", "Gerd Müller", "Thomas Müller", "Jürgen Klinsmann"], respuestaCorrecta: "Miroslav Klose" },
        { pregunta: "¿En qué año Alemania ganó su último Mundial?", opciones: ["2014", "2010", "2018", "2006"], respuestaCorrecta: "2014" },
        { pregunta: "¿Contra qué equipo perdió Alemania en semifinales de 2010?", opciones: ["España", "Holanda", "Argentina", "Uruguay"], respuestaCorrecta: "España" },
        { pregunta: "¿Quién fue el capitán de Alemania en 2014?", opciones: ["Philipp Lahm", "Manuel Neuer", "Bastian Schweinsteiger", "Thomas Müller"], respuestaCorrecta: "Philipp Lahm" },
        { pregunta: "¿Qué jugador alemán tiene más partidos en Mundiales?", opciones: ["Lothar Matthäus", "Miroslav Klose", "Philipp Lahm", "Manuel Neuer"], respuestaCorrecta: "Lothar Matthäus" },
        { pregunta: "¿En qué año Alemania fue sede del Mundial?", opciones: ["2006", "1974", "2006 y 1974", "1990"], respuestaCorrecta: "2006 y 1974" },
        { pregunta: "¿Contra qué equipo perdió Alemania en fase de grupos en 2018?", opciones: ["México", "Suecia", "Corea del Sur", "Brasil"], respuestaCorrecta: "México" },
        { pregunta: "¿Quién es el máximo asistidor alemán en Mundiales?", opciones: ["Thomas Müller", "Miroslav Klose", "Lothar Matthäus", "Toni Kroos"], respuestaCorrecta: "Thomas Müller" },
        { pregunta: "¿En qué Mundial Alemania eliminó a Argentina en cuartos?", opciones: ["2010", "2014", "2006", "2018"], respuestaCorrecta: "2006" }
    ],
    argentina: [
        { pregunta: "¿Cuántos Mundiales ha ganado Argentina?", opciones: ["3", "2", "4", "1"], respuestaCorrecta: "3" },
        { pregunta: "¿Quién es el máximo goleador argentino en Mundiales?", opciones: ["Lionel Messi", "Gabriel Batistuta", "Diego Maradona", "Gonzalo Higuaín"], respuestaCorrecta: "Lionel Messi" },
        { pregunta: "¿En qué año ganó Argentina su primer Mundial?", opciones: ["1978", "1986", "2022", "1930"], respuestaCorrecta: "1978" },
        { pregunta: "¿Contra qué equipo perdió Argentina en la final de 2014?", opciones: ["Alemania", "Francia", "Holanda", "Brasil"], respuestaCorrecta: "Alemania" },
        { pregunta: "¿Quién anotó el 'Gol del Siglo' en 1986?", opciones: ["Diego Maradona", "Lionel Messi", "Gabriel Batistuta", "Mario Kempes"], respuestaCorrecta: "Diego Maradona" },
        { pregunta: "¿En qué Mundial Argentina eliminó a México en octavos?", opciones: ["2022", "2018", "2014", "2010"], respuestaCorrecta: "2022" },
        { pregunta: "¿Quién fue el entrenador campeón en 1986?", opciones: ["Carlos Bilardo", "César Menotti", "Diego Maradona", "Lionel Scaloni"], respuestaCorrecta: "Carlos Bilardo" },
        { pregunta: "¿Contra qué país debutó Argentina en 2022?", opciones: ["Arabia Saudita", "México", "Polonia", "Francia"], respuestaCorrecta: "Arabia Saudita" },
        { pregunta: "¿Qué jugador argentino tiene 5 participaciones mundialistas?", opciones: ["Lionel Messi", "Javier Mascherano", "Ángel Di María", "Sergio Agüero"], respuestaCorrecta: "Lionel Messi" },
        { pregunta: "¿En qué estadio ganó Argentina el Mundial 2022?", opciones: ["Lusail", "Maracaná", "Estadio Azteca", "Wembley"], respuestaCorrecta: "Lusail" }
    ],
    espana: [
        { pregunta: "¿En qué año ganó España su primer Mundial?", opciones: ["2010", "2006", "2014", "1998"], respuestaCorrecta: "2010" },
        { pregunta: "¿Quién anotó el gol de la victoria en la final de 2010?", opciones: ["Andrés Iniesta", "Xavi Hernández", "David Villa", "Cesc Fàbregas"], respuestaCorrecta: "Andrés Iniesta" },
        { pregunta: "¿Contra qué equipo perdió España en fase de grupos en 2014?", opciones: ["Holanda", "Chile", "Australia", "Brasil"], respuestaCorrecta: "Holanda" },
        { pregunta: "¿Quién fue el entrenador campeón de España en 2010?", opciones: ["Vicente del Bosque", "Luis Aragonés", "Julen Lopetegui", "Luis Enrique"], respuestaCorrecta: "Vicente del Bosque" },
        { pregunta: "¿Qué jugador español es conocido como 'El Niño'?", opciones: ["Fernando Torres", "David Villa", "Raúl González", "Sergio Ramos"], respuestaCorrecta: "Fernando Torres" },
        { pregunta: "¿En qué año España fue sede del Mundial?", opciones: ["1982", "1986", "1978", "1990"], respuestaCorrecta: "1982" },
        { pregunta: "¿Contra qué país perdió España en octavos de 2018?", opciones: ["Rusia", "Croacia", "Francia", "Argentina"], respuestaCorrecta: "Rusia" },
        { pregunta: "¿Quién es el máximo goleador español en Mundiales?", opciones: ["David Villa", "Fernando Morientes", "Raúl González", "Fernando Torres"], respuestaCorrecta: "David Villa" },
        { pregunta: "¿En qué Mundial España perdió 5-1 contra Holanda?", opciones: ["2014", "2010", "2018", "2006"], respuestaCorrecta: "2014" },
        { pregunta: "¿Qué portero español fue campeón en 2010?", opciones: ["Iker Casillas", "David de Gea", "Pepe Reina", "Unai Simón"], respuestaCorrecta: "Iker Casillas" }
    ],
    francia: [
        { pregunta: "¿Cuántos Mundiales ha ganado Francia?", opciones: ["2", "3", "1", "4"], respuestaCorrecta: "2" },
        { pregunta: "¿En qué año ganó Francia su primer Mundial?", opciones: ["1998", "2018", "2006", "1982"], respuestaCorrecta: "1998" },
        { pregunta: "¿Quién es el máximo goleador francés en Mundiales?", opciones: ["Kylian Mbappé", "Just Fontaine", "Zinedine Zidane", "Thierry Henry"], respuestaCorrecta: "Just Fontaine" },
        { pregunta: "¿Contra qué equipo perdió Francia en la final de 2022?", opciones: ["Argentina", "Croacia", "Brasil", "Alemania"], respuestaCorrecta: "Argentina" },
        { pregunta: "¿Quién fue el capitán de Francia en 1998?", opciones: ["Didier Deschamps", "Zinedine Zidane", "Laurent Blanc", "Lilian Thuram"], respuestaCorrecta: "Didier Deschamps" },
        { pregunta: "¿En qué estadio se jugó la final de 1998?", opciones: ["Stade de France", "Parc des Princes", "Wembley", "Maracaná"], respuestaCorrecta: "Stade de France" },
        { pregunta: "¿Qué jugador francés es conocido como 'ZZ'?", opciones: ["Zinedine Zidane", "Kylian Mbappé", "Thierry Henry", "Karim Benzema"], respuestaCorrecta: "Zinedine Zidane" },
        { pregunta: "¿Contra qué equipo perdió Francia en la final de 2006?", opciones: ["Italia", "Brasil", "Alemania", "Argentina"], respuestaCorrecta: "Italia" },
        { pregunta: "¿Quién es el portero titular campeón en 2018?", opciones: ["Hugo Lloris", "Steve Mandanda", "Alphonse Areola", "Mike Maignan"], respuestaCorrecta: "Hugo Lloris" },
        { pregunta: "¿En qué Mundial Francia eliminó a Argentina en octavos?", opciones: ["2018", "2022", "2014", "2010"], respuestaCorrecta: "2018" }
    ],
    uruguay: [
        { pregunta: "¿En qué año Uruguay ganó el primer Mundial?", opciones: ["1930", "1950", "1928", "1934"], respuestaCorrecta: "1930" },
        { pregunta: "¿Cuántos Mundiales ha ganado Uruguay?", opciones: ["2", "3", "1", "4"], respuestaCorrecta: "2" },
        { pregunta: "¿Contra qué equipo ganó la final de 1950?", opciones: ["Brasil", "Argentina", "España", "Suecia"], respuestaCorrecta: "Brasil" },
        { pregunta: "¿Quién es el máximo goleador uruguayo en Mundiales?", opciones: ["Luis Suárez", "Edinson Cavani", "Diego Forlán", "Óscar Míguez"], respuestaCorrecta: "Óscar Míguez" },
        { pregunta: "¿Qué jugador uruguayo es conocido como 'El Matador'?", opciones: ["Luis Suárez", "Edinson Cavani", "Diego Godín", "Martín Cáceres"], respuestaCorrecta: "Edinson Cavani" },
        { pregunta: "¿En qué año Uruguay fue sede del Mundial?", opciones: ["1930", "1950", "1924", "1928"], respuestaCorrecta: "1930" },
        { pregunta: "¿Contra qué equipo perdió Uruguay en cuartos de 2010?", opciones: ["Holanda", "Ghana", "Brasil", "Alemania"], respuestaCorrecta: "Holanda" },
        { pregunta: "¿Quién fue el entrenador campeón en 1950?", opciones: ["Juan López", "Alcides Ghiggia", "Obdulio Varela", "Juan Carlos Corazzo"], respuestaCorrecta: "Juan López" },
        { pregunta: "¿Qué jugador uruguayo es conocido por morder a sus rivales?", opciones: ["Luis Suárez", "Edinson Cavani", "Diego Godín", "Martín Cáceres"], respuestaCorrecta: "Luis Suárez" },
        { pregunta: "¿En qué Mundial Uruguay eliminó a Ghana en cuartos?", opciones: ["2010", "2014", "2018", "2022"], respuestaCorrecta: "2010" }
    ],
    italia: [
        { pregunta: "¿Cuántos Mundiales ha ganado Italia?", opciones: ["4", "3", "5", "2"], respuestaCorrecta: "4" },
        { pregunta: "¿En qué año ganó Italia su último Mundial?", opciones: ["2006", "2002", "1998", "2010"], respuestaCorrecta: "2006" },
        { pregunta: "¿Quién es el máximo goleador italiano en Mundiales?", opciones: ["Paolo Rossi", "Roberto Baggio", "Christian Vieri", "Gigi Riva"], respuestaCorrecta: "Paolo Rossi" },
        { pregunta: "¿Contra qué equipo perdió Italia en la final de 1994?", opciones: ["Brasil", "Argentina", "Alemania", "Francia"], respuestaCorrecta: "Brasil" },
        { pregunta: "¿Quién fue el capitán de Italia en 2006?", opciones: ["Fabio Cannavaro", "Gianluigi Buffon", "Francesco Totti", "Alessandro Nesta"], respuestaCorrecta: "Fabio Cannavaro" },
        { pregunta: "¿En qué estadio ganó Italia el Mundial 2006?", opciones: ["Olímpico de Berlín", "Maracaná", "Stade de France", "Wembley"], respuestaCorrecta: "Olímpico de Berlín" },
        { pregunta: "¿Qué jugador italiano es conocido como 'Il Divin Codino'?", opciones: ["Roberto Baggio", "Paolo Maldini", "Francesco Totti", "Alessandro Del Piero"], respuestaCorrecta: "Roberto Baggio" },
        { pregunta: "¿Contra qué equipo perdió Italia en octavos de 2002?", opciones: ["Corea del Sur", "Japón", "España", "Brasil"], respuestaCorrecta: "Corea del Sur" },
        { pregunta: "¿Quién fue el entrenador campeón en 1982?", opciones: ["Enzo Bearzot", "Dino Zoff", "Paolo Rossi", "Claudio Gentile"], respuestaCorrecta: "Enzo Bearzot" },
        { pregunta: "¿En qué Mundial Italia no logró clasificar en 2018?", opciones: ["Rusia 2018", "Brasil 2014", "Sudáfrica 2010", "Alemania 2006"], respuestaCorrecta: "Rusia 2018" }
    ]
};

// ===== NOMBRES DE PAÍSES PARA MOSTRAR =====
const nombresPaises = {
    mexico: "🇲🇽 México",
    estadosUnidos: "🇺🇸 Estados Unidos",
    canada: "🇨🇦 Canadá",
    brasil: "🇧🇷 Brasil",
    alemania: "🇩🇪 Alemania",
    argentina: "🇦🇷 Argentina",
    espana: "🇪🇸 España",
    francia: "🇫🇷 Francia",
    uruguay: "🇺🇾 Uruguay",
    italia: "🇮🇹 Italia"
};

// ===== MEZCLAR ARRAY (Fisher-Yates) =====
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ===== MEZCLAR OPCIONES DE UNA PREGUNTA =====
function mezclarOpciones(preguntaOriginal) {
    // Crear copia de las opciones
    const opcionesMezcladas = [...preguntaOriginal.opciones];
    
    // Mezclar las opciones
    for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
    }
    
    // Encontrar el NUEVO índice donde quedó la respuesta correcta
    const nuevoIndiceCorrecto = opcionesMezcladas.indexOf(preguntaOriginal.respuestaCorrecta);
    
    return {
        pregunta: preguntaOriginal.pregunta,
        opciones: opcionesMezcladas,
        correcta: nuevoIndiceCorrecto
    };
}

// ===== SELECCIONAR 10 PREGUNTAS ALEATORIAS DEL TOTAL =====
function seleccionarPreguntasAleatorias(cantidad = 10) {
    const todasLasPreguntas = [];
    
    // Recorrer cada país y agregar sus 10 preguntas
    for (const pais in preguntasPorPais) {
        const preguntas = preguntasPorPais[pais];
        preguntas.forEach(p => {
            todasLasPreguntas.push({
                ...p,
                pais: pais
            });
        });
    }
    
    // Mezclar todas las 100 preguntas
    const preguntasMezcladas = mezclarArray(todasLasPreguntas);
    
    // Seleccionar solo las primeras 'cantidad' preguntas
    const preguntasSeleccionadas = preguntasMezcladas.slice(0, cantidad);
    
    // Para cada pregunta seleccionada, mezclar sus opciones
    return preguntasSeleccionadas.map(p => mezclarOpciones(p));
}

// ===== ESTADO DEL JUEGO =====
let preguntasActuales = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
const TOTAL_PREGUNTAS = 10;
const PUNTOS_POR_PREGUNTA = 10;
const PUNTUACION_MAXIMA = TOTAL_PREGUNTAS * PUNTOS_POR_PREGUNTA; // 100 puntos

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

// ===== Cargar pregunta actual =====
function loadQuestion() {
    answered = false;
    const q = preguntasActuales[currentQuestion];
    
    // Mostrar pregunta (el país ya no se muestra porque se perdió al mezclar)
    questionEl.textContent = q.pregunta;
    
    // Actualizar progreso
    progresoEl.textContent = `Pregunta ${currentQuestion + 1} de ${TOTAL_PREGUNTAS}`;
    
    // Limpiar y crear opciones
    optionsEl.innerHTML = '';
    
    q.opciones.forEach((option, index) => {
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

// ===== Verificar respuesta =====
function checkAnswer(selectedIndex) {
    if (answered) return;
    
    answered = true;
    const q = preguntasActuales[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    const isCorrect = selectedIndex === q.correcta;
    
    // Deshabilitar todos los botones
    buttons.forEach(btn => {
        btn.classList.add('disabled');
    });
    
    // Marcar la respuesta correcta
    buttons[q.correcta].classList.add('correct');
    
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
        feedbackEl.textContent = `❌ Incorrecto. La respuesta era: ${q.opciones[q.correcta]}`;
        feedbackEl.className = 'feedback feedback-incorrect';
    }
    
    // Avanzar a la siguiente pregunta o mostrar resultados
    setTimeout(() => {
        if (currentQuestion < TOTAL_PREGUNTAS - 1) {
            currentQuestion++;
            loadQuestion();
        } else {
            mostrarResultadosFinales();
        }
    }, 2000);
}

// ===== Mostrar resultados finales =====
function mostrarResultadosFinales() {
    const porcentaje = (score / PUNTUACION_MAXIMA) * 100;
    const aprobado = porcentaje >= 70;
    
    puntajeFinal.textContent = `${score}/${PUNTUACION_MAXIMA}`;
    
    let mensaje = '';
    if (aprobado) {
        mensaje = '🎉 ¡FELICIDADES! Eres un experto en fútbol mundial.';
        mensajeFinal.className = 'mensaje-final aprobado';
    } else {
        mensaje = '💪 Sigue practicando. ¡Hay muchos datos por aprender!';
        mensajeFinal.className = 'mensaje-final desaprobado';
    }
    
    mensajeFinal.textContent = mensaje;
    modalResultado.classList.add('active');
}

// ===== Reiniciar trivia (con NUEVA selección aleatoria de 10 preguntas) =====
function reiniciarTrivia() {
    // Seleccionar NUEVAS 10 preguntas aleatorias del banco total
    preguntasActuales = seleccionarPreguntasAleatorias(10);
    currentQuestion = 0;
    score = 0;
    answered = false;
    
    scoreEl.textContent = '0';
    modalResultado.classList.remove('active');
    
    loadQuestion();
}

// ===== Inicializar =====
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar 10 preguntas aleatorias al cargar la página
    preguntasActuales = seleccionarPreguntasAleatorias(10);
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