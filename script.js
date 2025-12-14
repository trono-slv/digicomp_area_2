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
// ARRAY DELLE DOMANDE (QUI SONO STATE INCOLLATE LE DOMANDE FORNITE DALL'UTENTE)
// ====================================================================
let paniereCompleto = [
    {
        "domanda": "Secondo il manuale AICA, quale delle seguenti è una comunicazione sincrona?",
        "opzioni": ["Videochiamata su Microsoft Teams", "Email", "Messaggi vocali su WhatsApp", "Post su un forum"],
        "rispostaCorretta": "Videochiamata su Microsoft Teams",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è citata come esempio di messaggistica istantanea?",
        "opzioni": ["Slack", "Google Docs", "Trello", "Canva"],
        "rispostaCorretta": "Slack",
        "area": "Area 2"
    },
    {
        "domanda": "La comunicazione asincrona si caratterizza per:",
        "opzioni": ["Non richiedere la contemporaneità delle parti", "Presenza contemporanea obbligatoria", "Necessità di essere online nello stesso momento", "Uso esclusivo di video"],
        "rispostaCorretta": "Non richiedere la contemporaneità delle parti",
        "area": "Area 2"
    },
    {
        "domanda": "Quale software di videoconferenza è espressamente menzionato nel manuale?",
        "opzioni": ["Zoom", "OneDrive", "Asana", "Figma"],
        "rispostaCorretta": "Zoom",
        "area": "Area 2"
    },
    {
        "domanda": "Quale social network è citato tra le community online?",
        "opzioni": ["Reddit", "Microsoft Word", "Excel", "PowerPoint"],
        "rispostaCorretta": "Reddit",
        "area": "Area 2"
    },
    {
        "domanda": "Un obiettivo principale della competenza 2.1 è:",
        "opzioni": ["Risolvere problemi e rispondere rapidamente a domande", "Installare hardware", "Creare siti web", "Analizzare dati statistici"],
        "rispostaCorretta": "Risolvere problemi e rispondere rapidamente a domande",
        "area": "Area 2"
    },
    {
        "domanda": "La collaborazione in ambienti digitali supera barriere:",
        "opzioni": ["Fisiche, geografiche e temporali", "Solo fisiche", "Solo culturali", "Nessuna"],
        "rispostaCorretta": "Fisiche, geografiche e temporali",
        "area": "Area 2"
    },
    {
        "domanda": "Quale dei seguenti è un esempio di strumento asincrono?",
        "opzioni": ["Email", "Chat in tempo reale", "Riunioni virtuali live", "Videochiamata"],
        "rispostaCorretta": "Email",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma per videoconferenze è elencata nel manuale?",
        "opzioni": ["Google Meet", "Trello", "OneDrive", "Canva"],
        "rispostaCorretta": "Google Meet",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.1 richiede di considerare:",
        "opzioni": ["La diversità culturale e generazionale", "Solo la diversità generazionale", "Nessuna diversità", "Solo la diversità culturale"],
        "rispostaCorretta": "La diversità culturale e generazionale",
        "area": "Area 2"
    },
    {
        "domanda": "Quale strumento è citato per le riunioni virtuali?",
        "opzioni": ["Microsoft Teams", "Excel", "PowerPoint", "Word"],
        "rispostaCorretta": "Microsoft Teams",
        "area": "Area 2"
    },
    {
        "domanda": "La comunicazione digitale favorisce:",
        "opzioni": ["L’interazione sociale e il networking", "L’isolamento totale", "La riduzione delle relazioni", "Solo comunicazioni scritte"],
        "rispostaCorretta": "L’interazione sociale e il networking",
        "area": "Area 2"
    },
    {
        "domanda": "Esempio di piattaforma di messaggistica istantanea citata:",
        "opzioni": ["WhatsApp", "Google Drive", "Asana", "Miro"],
        "rispostaCorretta": "WhatsApp",
        "area": "Area 2"
    },
    {
        "domanda": "Quale social network è menzionato per il networking professionale?",
        "opzioni": ["LinkedIn", "Paint", "Notepad", "Calcolatrice"],
        "rispostaCorretta": "LinkedIn",
        "area": "Area 2"
    },
    {
        "domanda": "Un esempio di comunicazione asincrona è:",
        "opzioni": ["Messaggi vocali", "Chat live", "Videoconferenza", "Riunione su Teams"],
        "rispostaCorretta": "Messaggi vocali",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.1 serve a:",
        "opzioni": ["Capire quali strumenti sono più appropriati in un determinato contesto", "Usare sempre lo stesso strumento", "Evitare le tecnologie", "Limitarsi alla posta cartacea"],
        "rispostaCorretta": "Capire quali strumenti sono più appropriati in un determinato contesto",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è citata per le community online?",
        "opzioni": ["Facebook", "Blocco note", "Registro di Windows", "Pannello di controllo"],
        "rispostaCorretta": "Facebook",
        "area": "Area 2"
    },
    {
        "domanda": "La collaborazione digitale permette di:",
        "opzioni": ["Superare barriere fisiche, geografiche e temporali", "Aumentare le distanze", "Rendere tutto più lento", "Limitare le interazioni"],
        "rispostaCorretta": "Superare barriere fisiche, geografiche e temporali",
        "area": "Area 2"
    },
    {
        "domanda": "Esempio di software di videoconferenza citato:",
        "opzioni": ["Google Meet", "Word", "Excel", "Paint"],
        "rispostaCorretta": "Google Meet",
        "area": "Area 2"
    },
    {
        "domanda": "Un obiettivo della competenza 2.1 è:",
        "opzioni": ["Favorire l’interazione sociale e il networking", "Ridurre le relazioni personali", "Eliminare le comunicazioni", "Limitarsi a testi"],
        "rispostaCorretta": "Favorire l’interazione sociale e il networking",
        "area": "Area 2"
    },
    {
        "domanda": "Quale strumento è citato per le riunioni virtuali?",
        "opzioni": ["Microsoft Teams", "Calcolatrice", "Blocco note", "Esplora file"],
        "rispostaCorretta": "Microsoft Teams",
        "area": "Area 2"
    },
    {
        "domanda": "La comunicazione in ambienti digitali è essenziale per:",
        "opzioni": ["Il mondo del lavoro moderno e l’istruzione a distanza", "Solo l’intrattenimento", "Evitare ogni contatto", "Limitarsi alla carta"],
        "rispostaCorretta": "Il mondo del lavoro moderno e l’istruzione a distanza",
        "area": "Area 2"
    },
    {
        "domanda": "Esempio di piattaforma di messaggistica istantanea:",
        "opzioni": ["Slack", "Google Sheets", "OneNote", "Paint"],
        "rispostaCorretta": "Slack",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.1 include:",
        "opzioni": ["Interagire tenendo conto della diversità culturale e generazionale", "Ignorare ogni differenza", "Limitarsi a una sola cultura", "Evitare le generazioni diverse"],
        "rispostaCorretta": "Interagire tenendo conto della diversità culturale e generazionale",
        "area": "Area 2"
    },
    {
        "domanda": "Quale dei seguenti è un esempio di comunicazione sincrona?",
        "opzioni": ["Chat su WhatsApp", "Forum", "Email", "Messaggi vocali"],
        "rispostaCorretta": "Chat su WhatsApp",
        "area": "Area 2"
    },
    {
        "domanda": "Il manuale cita come social network per community:",
        "opzioni": ["Reddit", "Esplora file", "Pannello di controllo", "Cestino"],
        "rispostaCorretta": "Reddit",
        "area": "Area 2"
    },
    {
        "domanda": "La collaborazione digitale riguarda:",
        "opzioni": ["Il lavoro collettivo attraverso piattaforme digitali", "Il lavoro solo individuale", "L’uso di carta", "L’isolamento"],
        "rispostaCorretta": "Il lavoro collettivo attraverso piattaforme digitali",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è citata per le videoconferenze?",
        "opzioni": ["Zoom", "Word", "Excel", "Paint"],
        "rispostaCorretta": "Zoom",
        "area": "Area 2"
    },
    {
        "domanda": "Un obiettivo è:",
        "opzioni": ["Condividere informazioni e aggiornamenti", "Nascondere informazioni", "Eliminare aggiornamenti", "Limitare la condivisione"],
        "rispostaCorretta": "Condividere informazioni e aggiornamenti",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.1 è utile per:",
        "opzioni": ["Gestire relazioni personali e professionali", "Evitare ogni relazione", "Limitarsi a una sola persona", "Ignorare il contesto"],
        "rispostaCorretta": "Gestire relazioni personali e professionali",
        "area": "Area 2"
    },
    {
        "domanda": "Secondo il manuale AICA, quale delle seguenti è una forma di condivisione di documenti in tempo reale?",
        "opzioni": ["Google Docs", "Inviare file per email", "Salvare su chiavetta USB", "Stampare il documento"],
        "rispostaCorretta": "Google Docs",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è citata per la gestione dei progetti con suddivisione di compiti?",
        "opzioni": ["Trello", "Zoom", "Canva", "WhatsApp"],
        "rispostaCorretta": "Trello",
        "area": "Area 2"
    },
    {
        "domanda": "La condivisione attraverso le tecnologie digitali permette di:",
        "opzioni": ["Monitorare lo stato di avanzamento dei compiti", "Lavorare sempre in modo isolato", "Ridurre la collaborazione", "Eliminare ogni traccia di lavoro"],
        "rispostaCorretta": "Monitorare lo stato di avanzamento dei compiti",
        "area": "Area 2"
    },
    {
        "domanda": "Quale strumento è menzionato per la co-creazione di contenuti multimediali?",
        "opzioni": ["Figma", "Asana", "Microsoft Teams", "Gmail"],
        "rispostaCorretta": "Figma",
        "area": "Area 2"
    },
    {
        "domanda": "Quale delle seguenti è una forma di collaborazione digitale citata nel manuale?",
        "opzioni": ["Condivisione di documenti", "Riunioni solo di persona", "Stampa collettiva", "Lavagna fisica"],
        "rispostaCorretta": "Condivisione di documenti",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è elencata per la gestione dei progetti?",
        "opzioni": ["Jira", "Miro", "Reddit", "Facebook"],
        "rispostaCorretta": "Jira",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.2 riguarda principalmente:",
        "opzioni": ["Condividere informazioni attraverso le tecnologie digitali", "Creare siti web", "Installare sistemi operativi", "Fare backup su CD"],
        "rispostaCorretta": "Condividere informazioni attraverso le tecnologie digitali",
        "area": "Area 2"
    },
    {
        "domanda": "Quale strumento è citato per lo sviluppo collettivo di idee o materiali?",
        "opzioni": ["Canva", "Excel", "Word", "Paint"],
        "rispostaCorretta": "Canva",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è menzionata per la condivisione di file in tempo reale?",
        "opzioni": ["OneDrive", "Posta certificata", "Fax", "Telegramma"],
        "rispostaCorretta": "OneDrive",
        "area": "Area 2"
    },
    {
        "domanda": "La collaborazione digitale include:",
        "opzioni": ["Suddivisione di compiti e monitoraggio dello stato di avanzamento", "Lavoro sempre individuale", "Eliminazione dei file condivisi", "Nessun controllo sui progressi"],
        "rispostaCorretta": "Suddivisione di compiti e monitoraggio dello stato di avanzamento",
        "area": "Area 2"
    },
    {
        "domanda": "Quale strumento è citato per la co-creazione di contenuti?",
        "opzioni": ["Miro", "Blocco note", "Calcolatrice", "Esplora file"],
        "rispostaCorretta": "Miro",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è elencata per la gestione dei progetti?",
        "opzioni": ["Asana", "LinkedIn", "YouTube", "Instagram"],
        "rispostaCorretta": "Asana",
        "area": "Area 2"
    },
    {
        "domanda": "La condivisione di documenti in tempo reale avviene su:",
        "opzioni": ["Google Docs", "Carta e penna", "Lavagna fisica", "Fax"],
        "rispostaCorretta": "Google Docs",
        "area": "Area 2"
    },
    {
        "domanda": "Quale strumento è citato per la co-creazione di contenuti multimediali?",
        "opzioni": ["Canva", "Registro di Windows", "Pannello di controllo", "Cestino"],
        "rispostaCorretta": "Canva",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.2 permette di:",
        "opzioni": ["Raggiungere obiettivi comuni attraverso piattaforme digitali", "Lavorare sempre da soli", "Evitare ogni condivisione", "Limitarsi alla carta"],
        "rispostaCorretta": "Raggiungere obiettivi comuni attraverso piattaforme digitali",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è menzionata per il monitoraggio dello stato di avanzamento?",
        "opzioni": ["Trello", "Gmail", "Outlook", "Telegram"],
        "rispostaCorretta": "Trello",
        "area": "Area 2"
    },
    {
        "domanda": "La co-creazione di contenuti include:",
        "opzioni": ["Sviluppo collettivo di idee o materiali multimediali", "Lavoro individuale forzato", "Eliminazione dei contributi altrui", "Nessuna modifica condivisa"],
        "rispostaCorretta": "Sviluppo collettivo di idee o materiali multimediali",
        "area": "Area 2"
    },
    {
        "domanda": "Quale strumento è citato per la gestione dei progetti?",
        "opzioni": ["Jira", "Facebook", "Messenger", "TikTok"],
        "rispostaCorretta": "Jira",
        "area": "Area 2"
    },
    {
        "domanda": "La condivisione digitale serve a:",
        "opzioni": ["Lavorare insieme su file condivisi in tempo reale", "Nascondere i documenti", "Limitare l’accesso a tutti", "Eliminare la collaborazione"],
        "rispostaCorretta": "Lavorare insieme su file condivisi in tempo reale",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è elencata per la co-creazione?",
        "opzioni": ["Figma", "Paint", "Blocco note", "Calcolatrice"],
        "rispostaCorretta": "Figma",
        "area": "Area 2"
    },
    {
        "domanda": "La suddivisione di compiti avviene tipicamente su:",
        "opzioni": ["Trello", "Email", "Posta cartacea", "Telegramma"],
        "rispostaCorretta": "Trello",
        "area": "Area 2"
    },
    {
        "domanda": "Quale strumento è citato per la condivisione di documenti?",
        "opzioni": ["Microsoft OneDrive", "Fax", "Lettera", "Piccione viaggiatore"],
        "rispostaCorretta": "Microsoft OneDrive",
        "area": "Area 2"
    },
    {
        "domanda": "La collaborazione digitale riguarda il lavoro collettivo per:",
        "opzioni": ["Raggiungere obiettivi comuni", "Lavorare in isolamento", "Evitare ogni contatto", "Limitarsi a una persona"],
        "rispostaCorretta": "Raggiungere obiettivi comuni",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è menzionata per la co-creazione di materiali?",
        "opzioni": ["Miro", "Excel", "Word", "PowerPoint"],
        "rispostaCorretta": "Miro",
        "area": "Area 2"
    },
    {
        "domanda": "La gestione dei progetti include il monitoraggio dello stato di avanzamento su:",
        "opzioni": ["Asana", "WhatsApp", "SMS", "Telefono fisso"],
        "rispostaCorretta": "Asana",
        "area": "Area 2"
    },
    {
        "domanda": "Quale strumento è citato per la condivisione in tempo reale?",
        "opzioni": ["Google Docs", "Stampa", "Lavagna", "Carta"],
        "rispostaCorretta": "Google Docs",
        "area": "Area 2"
    },
    {
        "domanda": "La co-creazione di contenuti multimediali avviene su:",
        "opzioni": ["Canva", "Blocco note", "Registro", "Cestino"],
        "rispostaCorretta": "Canva",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.2 è essenziale per:",
        "opzioni": ["Il lavoro collettivo attraverso piattaforme digitali", "Il lavoro individuale forzato", "L’isolamento digitale", "L’eliminazione della collaborazione"],
        "rispostaCorretta": "Il lavoro collettivo attraverso piattaforme digitali",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è citata per la suddivisione di compiti?",
        "opzioni": ["Trello", "Facebook", "Instagram", "TikTok"],
        "rispostaCorretta": "Trello",
        "area": "Area 2"
    },
    {
        "domanda": "La condivisione digitale permette di lavorare insieme su file:",
        "opzioni": ["In tempo reale", "Solo uno alla volta con 24 ore di ritardo", "Mai contemporaneamente", "Solo stampando"],
        "rispostaCorretta": "In tempo reale",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.3 riguarda principalmente:",
        "opzioni": ["Partecipare alla società attraverso i servizi digitali pubblici e privati", "Creare videogiochi", "Limitarsi alla comunicazione privata", "Evitare ogni forma di cittadinanza"],
        "rispostaCorretta": "Partecipare alla società attraverso i servizi digitali pubblici e privati",
        "area": "Area 2"
    },
    {
        "domanda": "Quale delle seguenti è un esempio di cittadinanza attiva digitale citato nel manuale?",
        "opzioni": ["Firmare petizioni online", "Inviare lettere cartacee", "Telefonare agli uffici pubblici", "Andare di persona agli sportelli"],
        "rispostaCorretta": "Firmare petizioni online",
        "area": "Area 2"
    },
    {
        "domanda": "I servizi digitali pubblici comprendono:",
        "opzioni": ["SPID, CIE, PagoPA e servizi comunali online", "Solo acquisti online su Amazon", "Solo social network", "Solo giochi online"],
        "rispostaCorretta": "SPID, CIE, PagoPA e servizi comunali online",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è menzionata per i servizi della Pubblica Amministrazione?",
        "opzioni": ["PagoPA", "TikTok", "Instagram", "Snapchat"],
        "rispostaCorretta": "PagoPA",
        "area": "Area 2"
    },
    {
        "domanda": "La cittadinanza digitale attiva include:",
        "opzioni": ["Partecipare a consultazioni pubbliche online", "Ignorare ogni avviso pubblico", "Limitarsi alla TV", "Non votare mai"],
        "rispostaCorretta": "Partecipare a consultazioni pubbliche online",
        "area": "Area 2"
    },
    {
        "domanda": "Quale identità elettronica è citata nel manuale italiano?",
        "opzioni": ["SPID", "Facebook Login", "Google Account", "Apple ID"],
        "rispostaCorretta": "SPID",
        "area": "Area 2"
    },
    {
        "domanda": "Un esempio di servizio privato digitale per la cittadinanza è:",
        "opzioni": ["Home banking", "Solo giochi", "Solo social", "Solo email personali"],
        "rispostaCorretta": "Home banking",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.3 serve a:",
        "opzioni": ["Esercitare i propri diritti e doveri anche online", "Evitare ogni responsabilità digitale", "Limitarsi alla carta", "Non partecipare mai alla società"],
        "rispostaCorretta": "Esercitare i propri diritti e doveri anche online",
        "area": "Area 2"
    },
    {
        "domanda": "Quale carta elettronica è menzionata per l’accesso ai servizi pubblici?",
        "opzioni": ["Carta d’Identità Elettronica (CIE)", "Carta di credito normale", "Tessera sanitaria cartacea", "Biglietto dell’autobus"],
        "rispostaCorretta": "Carta d’Identità Elettronica (CIE)",
        "area": "Area 2"
    },
    {
        "domanda": "La partecipazione attiva alla società digitale comprende:",
        "opzioni": ["Firmare petizioni su piattaforme dedicate", "Non firmare mai nulla", "Firmare solo su carta", "Inviare fax"],
        "rispostaCorretta": "Firmare petizioni su piattaforme dedicate",
        "area": "Area 2"
    },
    {
        "domanda": "Quale sistema di pagamento digitale pubblico è citato?",
        "opzioni": ["PagoPA", "PayPal", "Satispay", "Revolut"],
        "rispostaCorretta": "PagoPA",
        "area": "Area 2"
    },
    {
        "domanda": "La cittadinanza digitale include l’uso di servizi:",
        "opzioni": ["Sia pubblici che privati", "Solo pubblici", "Solo privati", "Nessuno"],
        "rispostaCorretta": "Sia pubblici che privati",
        "area": "Area 2"
    },
    {
        "domanda": "Un esempio di consultazione pubblica online è:",
        "opzioni": ["Partecipare a sondaggi del Comune sul portale istituzionale", "Commentare post su Instagram", "Mettere like su Facebook", "Guardare storie"],
        "rispostaCorretta": "Partecipare a sondaggi del Comune sul portale istituzionale",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.3 promuove:",
        "opzioni": ["La partecipazione attiva e consapevole alla società digitale", "L’isolamento digitale", "Il rifiuto delle tecnologie", "L’uso solo per divertimento"],
        "rispostaCorretta": "La partecipazione attiva e consapevole alla società digitale",
        "area": "Area 2"
    },
    {
        "domanda": "Quale strumento è citato per l’identità digitale italiana?",
        "opzioni": ["SPID", "Twitter", "WhatsApp", "Telegram"],
        "rispostaCorretta": "SPID",
        "area": "Area 2"
    },
    {
        "domanda": "L’accesso ai servizi della PA avviene spesso tramite:",
        "opzioni": ["CIE", "Lettera raccomandata", "Fax", "Piccione viaggiatore"],
        "rispostaCorretta": "CIE",
        "area": "Area 2"
    },
    {
        "domanda": "Un esempio di servizio pubblico digitale è:",
        "opzioni": ["Prenotazione CUP online", "Solo Netflix", "Solo Spotify", "Solo YouTube"],
        "rispostaCorretta": "Prenotazione CUP online",
        "area": "Area 2"
    },
    {
        "domanda": "La cittadinanza attiva digitale comprende:",
        "opzioni": ["Segnalazioni al Comune tramite app o portale", "Telefonare sempre", "Andare sempre di persona", "Non segnalare mai"],
        "rispostaCorretta": "Segnalazioni al Comune tramite app o portale",
        "area": "Area 2"
    },
    {
        "domanda": "Il manuale cita come esempio di pagamento digitale pubblico:",
        "opzioni": ["PagoPA", "Amazon Pay", "Google Pay", "Apple Pay"],
        "rispostaCorretta": "PagoPA",
        "area": "Area 2"
    },
    {
        "domanda": "Partecipare a petizioni online è considerato:",
        "opzioni": ["Cittadinanza attiva digitale", "Spam", "Gioco", "Perdita di tempo"],
        "rispostaCorretta": "Cittadinanza attiva digitale",
        "area": "Area 2"
    },
    {
        "domanda": "L’uso di SPID serve per:",
        "opzioni": ["Accedere ai servizi della Pubblica Amministrazione", "Solo social network", "Solo giochi", "Solo email"],
        "rispostaCorretta": "Accedere ai servizi della Pubblica Amministrazione",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.3 include anche i servizi:",
        "opzioni": ["Bancari e assicurativi online", "Solo pubblici", "Solo privati", "Nessuno"],
        "rispostaCorretta": "Bancari e assicurativi online",
        "area": "Area 2"
    },
    {
        "domanda": "Un esempio di partecipazione civica digitale è:",
        "opzioni": ["Compilare moduli online per il Comune", "Scrivere lettere a mano", "Telefonare", "Andare allo sportello"],
        "rispostaCorretta": "Compilare moduli online per il Comune",
        "area": "Area 2"
    },
    {
        "domanda": "La CIE (Carta d’Identità Elettronica) permette:",
        "opzioni": ["L’accesso autenticato ai servizi pubblici online", "Solo foto tessera", "Solo residenza", "Solo voto cartaceo"],
        "rispostaCorretta": "L’accesso autenticato ai servizi pubblici online",
        "area": "Area 2"
    },
    {
        "domanda": "La cittadinanza digitale attiva significa:",
        "opzioni": ["Essere parte attiva della società anche online", "Essere passivi", "Non partecipare mai", "Limitarsi alla TV"],
        "rispostaCorretta": "Essere parte attiva della società anche online",
        "area": "Area 2"
    },
    {
        "domanda": "Quale sistema di identità digitale è citato?",
        "opzioni": ["SPID", "Facebook", "Instagram", "TikTok"],
        "rispostaCorretta": "SPID",
        "area": "Area 2"
    },
    {
        "domanda": "Un esempio di servizio privato per la cittadinanza digitale è:",
        "opzioni": ["Home banking", "Solo giochi", "Solo social", "Solo video"],
        "rispostaCorretta": "Home banking",
        "area": "Area 2"
    },
    {
        "domanda": "La partecipazione a consultazioni pubbliche online è:",
        "opzioni": ["Cittadinanza attiva digitale", "Spam", "Gioco", "Perdita di tempo"],
        "rispostaCorretta": "Cittadinanza attiva digitale",
        "area": "Area 2"
    },
    {
        "domanda": "PagoPA è utilizzato per:",
        "opzioni": ["Pagamenti verso la Pubblica Amministrazione", "Solo acquisti su Amazon", "Solo Netflix", "Solo Spotify"],
        "rispostaCorretta": "Pagamenti verso la Pubblica Amministrazione",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.3 promuove l’uso consapevole di servizi:",
        "opzioni": ["Digitali pubblici e privati", "Solo cartacei", "Solo telefonici", "Nessuno"],
        "rispostaCorretta": "Digitali pubblici e privati",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.4 riguarda principalmente:",
        "opzioni": ["Collaborare attraverso le tecnologie digitali", "Creare videogiochi", "Limitarsi alla comunicazione privata", "Evitare ogni forma di lavoro di gruppo"],
        "rispostaCorretta": "Collaborare attraverso le tecnologie digitali",
        "area": "Area 2"
    },
    {
        "domanda": "Quale delle seguenti è una forma di collaborazione digitale citata nel manuale?",
        "opzioni": ["Co-creazione di contenuti", "Scrivere lettere a mano", "Telefonare senza video", "Incontrarsi solo di persona"],
        "rispostaCorretta": "Co-creazione di contenuti",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è menzionata per la co-creazione di contenuti multimediali?",
        "opzioni": ["Canva", "Blocco note", "Calcolatrice", "Paint"],
        "rispostaCorretta": "Canva",
        "area": "Area 2"
    },
    {
        "domanda": "La gestione dei progetti con suddivisione di compiti avviene tipicamente su:",
        "opzioni": ["Trello", "WhatsApp", "SMS", "Fax"],
        "rispostaCorretta": "Trello",
        "area": "Area 2"
    },
    {
        "domanda": "Quale strumento è citato per lo sviluppo collettivo di idee?",
        "opzioni": ["Miro", "Excel", "Word", "PowerPoint"],
        "rispostaCorretta": "Miro",
        "area": "Area 2"
    },
    {
        "domanda": "La collaborazione digitale permette di:",
        "opzioni": ["Raggiungere obiettivi comuni attraverso piattaforme digitali", "Lavorare sempre in isolamento", "Eliminare ogni contributo altrui", "Limitarsi a testi scritti"],
        "rispostaCorretta": "Raggiungere obiettivi comuni attraverso piattaforme digitali",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è elencata per la gestione dei progetti?",
        "opzioni": ["Asana", "Facebook", "Instagram", "TikTok"],
        "rispostaCorretta": "Asana",
        "area": "Area 2"
    },
    {
        "domanda": "La co-creazione di materiali multimediali avviene su:",
        "opzioni": ["Figma", "Registro di Windows", "Pannello di controllo", "Cestino"],
        "rispostaCorretta": "Figma",
        "area": "Area 2"
    },
    {
        "domanda": "Quale strumento è citato per il monitoraggio dello stato di avanzamento?",
        "opzioni": ["Jira", "Gmail", "Outlook", "Telegram"],
        "rispostaCorretta": "Jira",
        "area": "Area 2"
    },
    {
        "domanda": "La collaborazione digitale include:",
        "opzioni": ["Condivisione di documenti in tempo reale", "Stampa collettiva", "Lavagna fisica", "Nessuna condivisione"],
        "rispostaCorretta": "Condivisione di documenti in tempo reale",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è menzionata per la co-creazione di contenuti?",
        "opzioni": ["Canva", "Paint", "Blocco note", "Calcolatrice"],
        "rispostaCorretta": "Canva",
        "area": "Area 2"
    },
    {
        "domanda": "La suddivisione di compiti è tipica di:",
        "opzioni": ["Trello", "Email", "Posta cartacea", "Piccione viaggiatore"],
        "rispostaCorretta": "Trello",
        "area": "Area 2"
    },
    {
        "domanda": "Quale strumento è citato per lo sviluppo collettivo di idee?",
        "opzioni": ["Miro", "Excel", "Word", "PowerPoint"],
        "rispostaCorretta": "Miro",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.4 è essenziale per:",
        "opzioni": ["Il lavoro collettivo attraverso piattaforme digitali", "Il lavoro individuale forzato", "L’isolamento digitale", "L’eliminazione della collaborazione"],
        "rispostaCorretta": "Il lavoro collettivo attraverso piattaforme digitali",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è elencata per la gestione dei progetti?",
        "opzioni": ["Asana", "LinkedIn", "YouTube", "Instagram"],
        "rispostaCorretta": "Asana",
        "area": "Area 2"
    },
    {
        "domanda": "La co-creazione di contenuti multimediali avviene su:",
        "opzioni": ["Figma", "Blocco note", "Registro", "Cestino"],
        "rispostaCorretta": "Figma",
        "area": "Area 2"
    },
    {
        "domanda": "Il monitoraggio dello stato di avanzamento è possibile su:",
        "opzioni": ["Jira", "WhatsApp", "SMS", "Telefono fisso"],
        "rispostaCorretta": "Jira",
        "area": "Area 2"
    },
    {
        "domanda": "La collaborazione digitale permette di lavorare insieme su file:",
        "opzioni": ["In tempo reale", "Solo uno alla volta con ritardo", "Mai contemporaneamente", "Solo stampando"],
        "rispostaCorretta": "In tempo reale",
        "area": "Area 2"
    },
    {
        "domanda": "Quale strumento è citato per la co-creazione di materiali?",
        "opzioni": ["Canva", "Paint", "Blocco note", "Calcolatrice"],
        "rispostaCorretta": "Canva",
        "area": "Area 2"
    },
    {
        "domanda": "La suddivisione di compiti avviene su piattaforme come:",
        "opzioni": ["Trello", "Facebook", "Instagram", "TikTok"],
        "rispostaCorretta": "Trello",
        "area": "Area 2"
    },
    {
        "domanda": "La gestione dei progetti include il monitoraggio su:",
        "opzioni": ["Asana", "Gmail", "Outlook", "Telegram"],
        "rispostaCorretta": "Asana",
        "area": "Area 2"
    },
    {
        "domanda": "La co-creazione di contenuti avviene su:",
        "opzioni": ["Miro", "Excel", "Word", "PowerPoint"],
        "rispostaCorretta": "Miro",
        "area": "Area 2"
    },
    {
        "domanda": "Quale piattaforma è citata per la collaborazione su design?",
        "opzioni": ["Figma", "Blocco note", "Registro", "Cestino"],
        "rispostaCorretta": "Figma",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.4 permette di:",
        "opzioni": ["Raggiungere obiettivi comuni in modo collettivo", "Lavorare sempre da soli", "Evitare ogni contatto", "Limitarsi a una persona"],
        "rispostaCorretta": "Raggiungere obiettivi comuni in modo collettivo",
        "area": "Area 2"
    },
    {
        "domanda": "Il lavoro collettivo attraverso piattaforme digitali è l’obiettivo di:",
        "opzioni": ["2.4", "Solo comunicazione individuale", "Solo cittadinanza", "Solo netiquette"],
        "rispostaCorretta": "2.4",
        "area": "Area 2"
    },
    {
        "domanda": "La co-creazione di materiali multimediali è possibile su:",
        "opzioni": ["Canva", "Paint", "Blocco note", "Calcolatrice"],
        "rispostaCorretta": "Canva",
        "area": "Area 2"
    },
    {
        "domanda": "La suddivisione di compiti è tipica di:",
        "opzioni": ["Trello", "Email", "SMS", "Fax"],
        "rispostaCorretta": "Trello",
        "area": "Area 2"
    },
    {
        "domanda": "La collaborazione digitale supera barriere:",
        "opzioni": ["Fisiche, geografiche e temporali", "Solo fisiche", "Solo culturali", "Nessuna"],
        "rispostaCorretta": "Fisiche, geografiche e temporali",
        "area": "Area 2"
    },
    {
        "domanda": "Quale strumento è citato per la gestione dei progetti?",
        "opzioni": ["Jira", "Facebook", "Instagram", "TikTok"],
        "rispostaCorretta": "Jira",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.4 è fondamentale per:",
        "opzioni": ["Il lavoro di gruppo in ambiente digitale", "Il lavoro individuale forzato", "L’isolamento digitale", "L’eliminazione della collaborazione"],
        "rispostaCorretta": "Il lavoro di gruppo in ambiente digitale",
        "area": "Area 2"
    },
    {
        "domanda": "La netiquette è definita nel manuale come:",
        "opzioni": ["L’insieme di regole di comportamento rispettoso online", "La libertà di dire qualsiasi cosa", "L’uso obbligatorio di maiuscole", "Inviare spam"],
        "rispostaCorretta": "L’insieme di regole di comportamento rispettoso online",
        "area": "Area 2"
    },
    {
        "domanda": "È buona netiquette:",
        "opzioni": ["Usare un linguaggio chiaro, cortese e rispettoso", "Scrivere tutto in MAIUSCOLO", "Insultare gli altri utenti", "Inviare catene di Sant’Antonio"],
        "rispostaCorretta": "Usare un linguaggio chiaro, cortese e rispettoso",
        "area": "Area 2"
    },
    {
        "domanda": "Secondo il manuale, perché è sconsigliato scrivere in maiuscolo?",
        "opzioni": ["Equivale a urlare", "È più elegante", "Risparmia inchiostro", "È più veloce"],
        "rispostaCorretta": "Equivale a urlare",
        "area": "Area 2"
    },
    {
        "domanda": "Un esempio di netiquette è:",
        "opzioni": ["Citare correttamente le fonti quando si condivide contenuto altrui", "Copiare testi senza indicare l’autore", "Inviare lo stesso messaggio a centinaia di persone", "Usare emoji aggressive"],
        "rispostaCorretta": "Citare correttamente le fonti quando si condivide contenuto altrui",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.5 serve a:",
        "opzioni": ["Evitare malintesi e conflitti nelle comunicazioni digitali", "Creare conflitti intenzionali", "Ignorare le regole", "Limitarsi a testi brevi"],
        "rispostaCorretta": "Evitare malintesi e conflitti nelle comunicazioni digitali",
        "area": "Area 2"
    },
    {
        "domanda": "È buona netiquette:",
        "opzioni": ["Rileggere il messaggio prima di inviarlo", "Inviare senza controllare", "Usare sempre abbreviazioni incomprensibili", "Rispondere dopo mesi"],
        "rispostaCorretta": "Rileggere il messaggio prima di inviarlo",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.6 riguarda principalmente:",
        "opzioni": ["Gestire la propria presenza, identità e reputazione digitale", "Creare profili falsi", "Condividere tutto pubblicamente", "Non avere nessun profilo online"],
        "rispostaCorretta": "Gestire la propria presenza, identità e reputazione digitale",
        "area": "Area 2"
    },
    {
        "domanda": "Un rischio dell’identità digitale è:",
        "opzioni": ["La permanenza delle informazioni online", "La cancellazione immediata di tutto", "L’assenza di tracce", "L’impossibilità di modificare"],
        "rispostaCorretta": "La permanenza delle informazioni online",
        "area": "Area 2"
    },
    {
        "domanda": "Per proteggere la reputazione digitale è consigliato:",
        "opzioni": ["Pensare prima di pubblicare", "Pubblicare tutto impulsivamente", "Usare sempre account anonimi", "Non controllare mai le impostazioni privacy"],
        "rispostaCorretta": "Pensare prima di pubblicare",
        "area": "Area 2"
    },
    {
        "domanda": "Il manuale cita l’importanza di:",
        "opzioni": ["Configurare correttamente le impostazioni di privacy sui social", "Rendere sempre tutto pubblico", "Condividere password", "Usare lo stesso nickname ovunque senza pensarci"],
        "rispostaCorretta": "Configurare correttamente le impostazioni di privacy sui social",
        "area": "Area 2"
    },
    {
        "domanda": "È possibile avere identità digitali diverse per:",
        "opzioni": ["Contesti professionali e personali", "Solo lavoro", "Solo svago", "Nessun contesto"],
        "rispostaCorretta": "Contesti professionali e personali",
        "area": "Area 2"
    },
    {
        "domanda": "Un consiglio per la gestione dell’identità digitale è:",
        "opzioni": ["Separare profilo personale e professionale", "Usare lo stesso profilo per tutto", "Non avere foto profilo", "Cambiare account ogni giorno"],
        "rispostaCorretta": "Separare profilo personale e professionale",
        "area": "Area 2"
    },
    {
        "domanda": "La reputazione digitale può essere danneggiata da:",
        "opzioni": ["Contenuti pubblicati anni fa", "Solo contenuti recenti", "Mai, tutto sparisce", "Solo da altri utenti"],
        "rispostaCorretta": "Contenuti pubblicati anni fa",
        "area": "Area 2"
    },
    {
        "domanda": "Per la netiquette è consigliato:",
        "opzioni": ["Evitare di rispondere emotivamente a messaggi provocatori", "Rispondere sempre con insulti", "Alimentare flame", "Inviare messaggi multipli uguali"],
        "rispostaCorretta": "Evitare di rispondere emotivamente a messaggi provocatori",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.6 include:",
        "opzioni": ["Monitorare la propria impronta digitale", "Ignorare cosa c’è online su di sé", "Pubblicare tutto senza filtri", "Non usare mai i social"],
        "rispostaCorretta": "Monitorare la propria impronta digitale",
        "area": "Area 2"
    },
    {
        "domanda": "Un esempio di buona netiquette è:",
        "opzioni": ["Rispondere in modo educato anche a critiche", "Bloccare tutti", "Trollare", "Inviare spam"],
        "rispostaCorretta": "Rispondere in modo educato anche a critiche",
        "area": "Area 2"
    },
    {
        "domanda": "Per gestire l’identità digitale è utile:",
        "opzioni": ["Cercare periodicamente il proprio nome su Google", "Non controllare mai", "Usare solo nickname assurdi", "Creare centinaia di profili falsi"],
        "rispostaCorretta": "Cercare periodicamente il proprio nome su Google",
        "area": "Area 2"
    },
    {
        "domanda": "La netiquette vieta praticamente:",
        "opzioni": ["Il flaming (provocazioni intenzionali)", "Le discussioni serene", "Le risposte educate", "L’uso di emoji"],
        "rispostaCorretta": "Il flaming (provocazioni intenzionali)",
        "area": "Area 2"
    },
    {
        "domanda": "È buona prassi per la reputazione digitale:",
        "opzioni": ["Pubblicare solo contenuti di cui si è orgogliosi", "Usare sempre linguaggio volgare", "Taggare tutti senza permesso", "Pubblicare tutto ciò che viene in mente"],
        "rispostaCorretta": "Pubblicare solo contenuti di cui si è orgogliosi",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.6 consiglia di:",
        "opzioni": ["Usare password diverse e complesse per ogni account", "Usare sempre la stessa password", "Non usare password", "Condividere le password"],
        "rispostaCorretta": "Usare password diverse e complesse per ogni account",
        "area": "Area 2"
    },
    {
        "domanda": "Un rischio citato per l’identità digitale è:",
        "opzioni": ["Furto d’identità", "Nessun rischio", "Troppa privacy", "Impossibilità di creare profili"],
        "rispostaCorretta": "Furto d’identità",
        "area": "Area 2"
    },
    {
        "domanda": "È buona netiquette:",
        "opzioni": ["Non inondare le chat con messaggi inutili", "Inviare 50 messaggi uguali", "Usare solo emoji", "Scrivere solo in maiuscolo"],
        "rispostaCorretta": "Non inondare le chat con messaggi inutili",
        "area": "Area 2"
    },
    {
        "domanda": "Per proteggere l’identità digitale è consigliato:",
        "opzioni": ["Attivare l’autenticazione a due fattori", "Disattivarla sempre", "Condividere codici 2FA", "Usare solo SMS"],
        "rispostaCorretta": "Attivare l’autenticazione a due fattori",
        "area": "Area 2"
    },
    {
        "domanda": "La netiquette promuove:",
        "opzioni": ["Il rispetto della privacy altrui", "La condivisione di dati personali senza consenso", "Il doxxing", "La diffamazione"],
        "rispostaCorretta": "Il rispetto della privacy altrui",
        "area": "Area 2"
    },
    {
        "domanda": "La gestione dell’identità digitale include:",
        "opzioni": ["Eliminare periodicamente contenuti compromettenti", "Lasciare tutto online per sempre", "Non eliminare mai nulla", "Pubblicare solo foto altrui"],
        "rispostaCorretta": "Eliminare periodicamente contenuti compromettenti",
        "area": "Area 2"
    },
    {
        "domanda": "È buona netiquette:",
        "opzioni": ["Chiedere permesso prima di taggare qualcuno", "Taggare tutti senza chiedere", "Pubblicare foto di altri senza consenso", "Creare gruppi senza avvisare"],
        "rispostaCorretta": "Chiedere permesso prima di taggare qualcuno",
        "area": "Area 2"
    },
    {
        "domanda": "La competenza 2.6 serve soprattutto a:",
        "opzioni": ["Proteggere la propria reputazione futura (lavoro, università…)", "Rendere tutto pubblico", "Non pensare al futuro", "Creare solo profili falsi"],
        "rispostaCorretta": "Proteggere la propria reputazione futura (lavoro, università…)",
        "area": "Area 2"
    },
    {
        "domanda": "Un consiglio del manuale per la netiquette è:",
        "opzioni": ["Usare un tono professionale nelle comunicazioni di lavoro", "Rispondere con modi inappropriati", "Ignorare la cortesia", "Scrivere messaggi criptici"],
        "rispostaCorretta": "Usare un tono professionale nelle comunicazioni di lavoro",
        "area": "Area 2"
    } // FINE DELLA TUA ULTIMA DOMANDA. NESSUNA VIRGOLA QUI!
];
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
