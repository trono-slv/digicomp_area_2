// ====================================================================
// VARIABILI GLOBALI E CONFIGURAZIONE
// ====================================================================

const NUM_DOMANDE_QUIZ = 30; // Numero di domande da estrarre
const TEMPO_MASSIMO = 45 * 60; // Tempo in secondi (45 minuti)

// Associazione degli elementi HTML tramite ID
const quizArea = document.getElementById('quiz-area');
const resultsArea = document.getElementById('results-area');
const startScreen = document.getElementById('start-screen');
const headerTimer = document.getElementById('timer-box');
const headerCounter = document.getElementById('question-counter');

// ====================================================================
// ARRAY DELLE DOMANDE (QUI DEVI INCOLLARE LE TUE 150 DOMANDE)
// ====================================================================
let paniereCompleto = [
    // ----------------------------------------------------------------
    // ATTENZIONE: INSERISCI LE TUE 150 DOMANDE QUI, RISPETTANDO IL FORMATO
    // {
    //     "domanda": "Test: Quale piattaforma è asincrona?",
    //     "opzioni": ["Zoom", "Videochiamata", "Email", "Chat"],
    //     "rispostaCorretta": "Email",
    //     "area": "Area 2"
    // },
    // {
    //     "domanda": "Test: Qual è il formato dei file di stile?",
    //     "opzioni": ["HTML", "JS", "CSS", "TXT"],
    //     "rispostaCorretta": "CSS",
    //     "area": "Area 5"
    // }
    // ----------------------------------------------------------------
];
// ====================================================================

let domandeSelezionate = []; // Le 30 domande per il quiz corrente
let risposteUtente = []; // Array per tracciare le risposte date
let indiceCorrente = 0; // Indice della domanda corrente

let timerInterval;
let tempoRimanente;
let tempoInizio;

// ====================================================================
// FUNZIONI UTILI
// ====================================================================

/**
 * Funzione per mescolare un array (algoritmo di Fisher-Yates).
 * @param {Array} array - L'array da mescolare.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ====================================================================
// LOGICA DEL QUIZ
// ====================================================================

/**
 * Avvia il quiz: seleziona le domande e imposta l'interfaccia.
 */
function generaNuovoTest() {
    if (paniereCompleto.length < NUM_DOMANDE_QUIZ) {
        alert(`Errore: Il paniere deve contenere almeno ${NUM_DOMANDE_QUIZ} domande.`);
        return;
    }

    // 1. Reset variabili
    risposteUtente = [];
    indiceCorrente = 0;
    
    // 2. Mescola e seleziona le 30 domande
    shuffleArray(paniereCompleto);
    domandeSelezionate = paniereCompleto.slice(0, NUM_DOMANDE_QUIZ);

    // 3. Mescola le opzioni di ogni domanda selezionata (per evitare risposte sempre nella stessa posizione)
    domandeSelezionate.forEach(q => {
        shuffleArray(q.opzioni);
    });

    // 4. Avvia l'interfaccia
    startScreen.style.display = 'none';
    resultsArea.style.display = 'none';
    quizArea.style.display = 'block';

    tempoInizio = new Date().getTime();
    avviaTimer();
    visualizzaDomanda(indiceCorrente);
}

/**
 * Gestisce il timer del quiz.
 */
function avviaTimer() {
    clearInterval(timerInterval);
    tempoRimanente = TEMPO_MASSIMO;

    timerInterval = setInterval(() => {
        const minuti = Math.floor(tempoRimanente / 60);
        const secondi = tempoRimanente % 60;
        
        headerTimer.textContent = `Tempo: ${String(minuti).padStart(2, '0')}:${String(secondi).padStart(2, '0')}`;
        
        if (tempoRimanente <= 0) {
            terminaTest(true); // True indica che il tempo è scaduto
            return;
        }
        tempoRimanente--;
    }, 1000);
}

/**
 * Mostra la domanda all'indice specificato.
 * @param {number} index - L'indice della domanda nell'array domandeSelezionate.
 */
function visualizzaDomanda(index) {
    if (index >= domandeSelezionate.length) {
        terminaTest();
        return;
    }

    const domanda = domandeSelezionate[index];
    
    headerCounter.textContent = `Domanda ${index + 1} / ${NUM_DOMANDE_QUIZ}`;

    let html = `<div id="current-question">${domanda.domanda}</div>`;
    html += '<div class="options-container">';
    
    domanda.opzioni.forEach(option => {
        // La funzione di sostituzione protegge gli apici (') all'interno del testo della risposta
        html += `<button class="answer-option" onclick="gestisciClickERisposta('${option.replace(/'/g, "\\'")}')">${option}</button>`;
    });

    html += '</div>';
    quizArea.innerHTML = html;
}


/**
 * Gestisce il click dell'utente su una risposta e salva l'esito.
 * @param {string} rispostaData - La risposta selezionata dall'utente.
 */
function gestisciClickERisposta(rispostaData) {
    const domandaCorrente = domandeSelezionate[indiceCorrente];
    const rispostaCorretta = domandaCorrente.rispostaCorretta;
    // Confronto rigoroso per l'esito
    const esito = (rispostaData === rispostaCorretta);

    // Registra la risposta
    risposteUtente.push({
        domanda: domandaCorrente.domanda,
        rispostaData: rispostaData,
        corretta: rispostaCorretta,
        esito: esito
    });

    // Passa alla domanda successiva
    indiceCorrente++;
    visualizzaDomanda(indiceCorrente);
}


/**
 * Calcola il punteggio finale e mostra i risultati COMPLETI con riepilogo.
 * @param {boolean} [tempoScaduto=false] - Indica se il test è terminato per scadenza del tempo.
 */
function terminaTest(tempoScaduto = false) {
    clearInterval(timerInterval);
    quizArea.innerHTML = ''; // Svuota l'area del quiz
    resultsArea.style.display = 'block'; // Mostra l'area dei risultati

    // Calcolo Punteggio
    const punteggioFinale = risposteUtente.reduce((score, risp) => score + (risp.esito ? 1 : 0), 0);
    const tempoTotale = new Date().getTime() - tempoInizio;
    
    let tempoImpiegato = "";
    if (tempoScaduto) {
        tempoImpiegato = " (Tempo scaduto: 45:00)";
    } else {
        const minuti = Math.floor(tempoTotale / (1000 * 60));
        const secondi = Math.floor((tempoTotale % (1000 * 60)) / 1000);
        tempoImpiegato = ` (Tempo impiegato: ${String(minuti).padStart(2, '0')}:${String(secondi).padStart(2, '0')})`;
    }

    // --- GENERAZIONE RIEPILOGO DETTAGLIATO (Tabella con Esito e Risposta Corretta) ---
    let riepilogoHTML = `
        <div class="summary-container">
            <h3>Riepilogo Risposte Date</h3>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th class="col-domanda">Domanda</th>
                        <th class="col-risposta-utente">La Tua Risposta</th>
                        <th class="col-risposta-corretta">Risposta Corretta</th>
                        <th>Esito</th>
                    </tr>
                </thead>
                <tbody>
    `;

    risposteUtente.forEach((risposta, index) => {
        // Usa la classe per colorare la riga (verde o rosso)
        const classeRiga = risposta.esito ? 'row-correct' : 'row-wrong';
        const simboloEsito = risposta.esito ? '✅ Corretta' : '❌ Errata';
        
        // Mostra la risposta corretta SOLO se l'utente ha sbagliato
        const rispostaCorretta = risposta.esito ? '-' : `<strong>${risposta.corretta}</strong>`;
        
        riepilogoHTML += `
            <tr class="${classeRiga}">
                <td>${index + 1}</td>
                <td class="col-domanda">${risposta.domanda}</td>
                <td class="col-risposta-utente">${risposta.rispostaData}</td>
                <td class="col-risposta-corretta">${rispostaCorretta}</td>
                <td>${simboloEsito}</td>
            </tr>
        `;
    });

    riepilogoHTML += `
                </tbody>
            </table>
        </div>
    `;
    // --- FINE GENERAZIONE RIEPILOGO ---


    // Visualizzazione Risultati Principali
    resultsArea.innerHTML = `
        <h3>TEST TERMINATO!</h3>
        <p>Hai risposto a ${risposteUtente.length} domande.</p>
        <p><strong>Risposte Corrette: ${punteggioFinale} / ${NUM_DOMANDE_QUIZ}</strong></p>
        <p>Punteggio Totale: ${punteggioFinale} punti${tempoImpiegato}</p>
        
        <div class="result-buttons">
            <button class="btn-primary" onclick="ripetiTestAttuale()">Ripeti Test</button>
            <button class="btn-primary" onclick="generaNuovoTest()">Genera Nuovo Test</button>
        </div>
        
        ${riepilogoHTML}
    `;
    
    // Reimposta l'indice
    indiceCorrente = 0; 
}

/**
 * Ri-avvia il test utilizzando le stesse 30 domande estratte in precedenza.
 */
function ripetiTestAttuale() {
    risposteUtente = [];
    indiceCorrente = 0;
    avviaTimer();
    tempoInizio = new Date().getTime();
    visualizzaDomanda(indiceCorrente);
}

// ====================================================================
// INIZIALIZZAZIONE ALL'AVVIO DELLA PAGINA
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Controllo per evitare errori di riferimento se gli ID non esistono (robustezza)
    if (quizArea) quizArea.style.display = 'none';
    if (resultsArea) resultsArea.style.display = 'none';
});
