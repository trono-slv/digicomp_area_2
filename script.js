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
let paniereCompleto =[
    {
        domanda: "Secondo il manuale AICA, quale delle seguenti è una comunicazione sincrona?", 
        corretta: "Videochiamata su Microsoft Teams", 
        errate: ["Email", "Messaggi vocali su WhatsApp", "Post su un forum"] 
    },
    {
        domanda: "Quale piattaforma è citata come esempio di messaggistica istantanea?", 
        corretta: "Slack", 
        errate: ["Google Docs", "Trello", "Canva"] 
    },
    { 
        domanda: "La comunicazione asincrona si caratterizza per:", 
        corretta: "Non richiedere la contemporaneità delle parti", 
        errate: ["Presenza contemporanea obbligatoria", "Necessità di essere online nello stesso momento", "Uso esclusivo di video"] 
    },
    { 
        domanda: "Quale software di videoconferenza è espressamente menzionato nel manuale?", 
        corretta: "Zoom", 
        errate: ["OneDrive", "Asana", "Figma"] 
    },
    { 
        domanda: "Quale social network è citato tra le community online?", 
        corretta: "Reddit", 
        errate: ["Microsoft Word", "Excel", "PowerPoint"] 
    },
    { 
        domanda: "Un obiettivo principale della competenza 2.1 è:", 
        corretta: "Risolvere problemi e rispondere rapidamente a domande", 
        errate: ["Installare hardware", "Creare siti web", "Analizzare dati statistici"] 
    },
    { 
        domanda: "La collaborazione in ambienti digitali supera barriere:", 
        corretta: "Fisiche, geografiche e temporali", 
        errate: ["Solo fisiche", "Solo culturali", "Nessuna"] 
    },
    { 
        domanda: "Quale dei seguenti è un esempio di strumento asincrono?", 
        corretta: "Email", 
        errate: ["Chat in tempo reale", "Riunioni virtuali live", "Videochiamata"] 
    },
    { 
        domanda: "Quale piattaforma per videoconferenze è elencata nel manuale?", 
        corretta: "Google Meet", 
        errate: ["Trello", "OneDrive", "Canva"] 
    },
    { 
        domanda: "La competenza 2.1 richiede di considerare:", 
        corretta: "La diversità culturale e generazionale", 
        errate: ["Solo la diversità generazionale", "Nessuna diversità", "Solo la diversità culturale"] 
    },
    { 
        domanda: "Quale strumento è citato per le riunioni virtuali?", 
        corretta: "Microsoft Teams", 
        errate: ["Excel", "PowerPoint", "Word"] 
    },
    { 
        domanda: "La comunicazione digitale favorisce:", 
        corretta: "L’interazione sociale e il networking", 
        errate: ["L’isolamento totale", "La riduzione delle relazioni", "Solo comunicazioni scritte"] 
    },
    { 
        domanda: "Esempio di piattaforma di messaggistica istantanea citata:", 
        corretta: "WhatsApp", 
        errate: ["Google Drive", "Asana", "Miro"] 
    },
    { 
        domanda: "Quale social network è menzionato per il networking professionale?", 
        corretta: "LinkedIn", 
        errate: ["Paint", "Notepad", "Calcolatrice"] 
    },
    { 
        domanda: "Un esempio di comunicazione asincrona è:", 
        corretta: "Messaggi vocali", 
        errate: ["Chat live", "Videoconferenza", "Riunione su Teams"] 
    },
    { 
        domanda: "La competenza 2.1 serve a:", 
        corretta: "Capire quali strumenti sono più appropriati in un determinato contesto", 
        errate: ["Usare sempre lo stesso strumento", "Evitare le tecnologie", "Limitarsi alla posta cartacea"] 
    },
    { 
        domanda: "Quale piattaforma è citata per le community online?", 
        corretta: "Facebook", 
        errate: ["Blocco note", "Registro di Windows", "Pannello di controllo"] 
    },
    { 
        domanda: "La collaborazione digitale permette di:", 
        corretta: "Superare barriere fisiche, geografiche e temporali", 
        errate: ["Aumentare le distanze", "Rendere tutto più lento", "Limitare le interazioni"] 
    },
    { 
        domanda: "Esempio di software di videoconferenza citato:", 
        corretta: "Google Meet", 
        errate: ["Word", "Excel", "Paint"] 
    },
    { 
        domanda: "Un obiettivo della competenza 2.1 è:", 
        corretta: "Favorire l’interazione sociale e il networking", 
        errate: ["Ridurre le relazioni personali", "Eliminare le comunicazioni", "Limitarsi a testi"] 
    },
    { 
        domanda: "Quale strumento è citato per le riunioni virtuali?", 
        corretta: "Microsoft Teams", 
        errate: ["Calcolatrice", "Blocco note", "Esplora file"] 
    },
    { 
        domanda: "La comunicazione in ambienti digitali è essenziale per:", 
        corretta: "Il mondo del lavoro moderno e l’istruzione a distanza", 
        errate: ["Solo l’intrattenimento", "Evitare ogni contatto", "Limitarsi alla carta"] 
    },
    { 
        domanda: "Esempio di piattaforma di messaggistica istantanea:", 
        corretta: "Slack", 
        errate: ["Google Sheets", "OneNote", "Paint"] 
    },
    { 
        domanda: "La competenza 2.1 include:", 
        corretta: "Interagire tenendo conto della diversità culturale e generazionale", 
        errate: ["Ignorare ogni differenza", "Limitarsi a una sola cultura", "Evitare le generazioni diverse"] 
    },
    { 
        domanda: "Quale dei seguenti è un esempio di comunicazione sincrona?", 
        corretta: "Chat su WhatsApp", 
        errate: ["Forum", "Email", "Messaggi vocali"] 
    },
    { 
        domanda: "Il manuale cita come social network per community:", 
        corretta: "Reddit", 
        errate: ["Esplora file", "Pannello di controllo", "Cestino"] 
    },
    { 
        domanda: "La collaborazione digitale riguarda:", 
        corretta: "Il lavoro collettivo attraverso piattaforme digitali", 
        errate: ["Il lavoro solo individuale", "L’uso di carta", "L’isolamento"] 
    },
    { 
        domanda: "Quale piattaforma è citata per le videoconferenze?", 
        corretta: "Zoom", 
        errate: ["Word", "Excel", "Paint"] 
    },
    { 
        domanda: "Un obiettivo è:", 
        corretta: "Condividere informazioni e aggiornamenti", 
        errate: ["Nascondere informazioni", "Eliminare aggiornamenti", "Limitare la condivisione"] 
    },
    { 
        domanda: "La competenza 2.1 è utile per:", 
        corretta: "Gestire relazioni personali e professionali", 
        errate: ["Evitare ogni relazione", "Limitarsi a una sola persona", "Ignorare il contesto"] 
    },
    // INCOLLA QUI LE RESTANTI 120 DOMANDE (Dalla 31 alla 150) seguendo la struttura:
    // { domanda: "...", corretta: "...", errate: ["...", "...", "..."] },
    { 
        domanda: "Secondo il manuale AICA, quale delle seguenti è una forma di condivisione di documenti in tempo reale?", 
        corretta: "Google Docs", 
        errate: ["Inviare file per email", "Salvare su chiavetta USB", "Stampare il documento"] 
    },
    { 
        domanda: "Quale piattaforma è citata per la gestione dei progetti con suddivisione di compiti?", 
        corretta: "Trello", 
        errate: ["Zoom", "Canva", "WhatsApp"] 
    },
    { 
        domanda: "La condivisione attraverso le tecnologie digitali permette di:", 
        corretta: "Monitorare lo stato di avanzamento dei compiti", 
        errate: ["Lavorare sempre in modo isolato", "Ridurre la collaborazione", "Eliminare ogni traccia di lavoro"] 
    },
    { 
        domanda: "Quale strumento è menzionato per la co-creazione di contenuti multimediali?", 
        corretta: "Figma", 
        errate: ["Asana", "Microsoft Teams", "Gmail"] 
    },
    { 
        domanda: "Quale delle seguenti è una forma di collaborazione digitale citata nel manuale?", 
        corretta: "Condivisione di documenti", 
        errate: ["Riunioni solo di persona", "Stampa collettiva", "Lavagna fisica"] 
    },
    { 
        domanda: "Quale piattaforma è elencata per la gestione dei progetti?", 
        corretta: "Jira", 
        errate: ["Miro", "Reddit", "Facebook"] 
    },
    { 
        domanda: "La competenza 2.2 riguarda principalmente:", 
        corretta: "Condividere informazioni attraverso le tecnologie digitali", 
        errate: ["Creare siti web", "Installare sistemi operativi", "Fare backup su CD"] 
    },
    { 
        domanda: "Quale strumento è citato per lo sviluppo collettivo di idee o materiali?", 
        corretta: "Canva", 
        errate: ["Excel", "Word", "Paint"] 
    },
    { 
        domanda: "Quale piattaforma è menzionata per la condivisione di file in tempo reale?", 
        corretta: "OneDrive", 
        errate: ["Posta certificata", "Fax", "Telegramma"] 
    },
    { 
        domanda: "La collaborazione digitale include:", 
        corretta: "Suddivisione di compiti e monitoraggio dello stato di avanzamento", 
        errate: ["Lavoro sempre individuale", "Eliminazione dei file condivisi", "Nessun controllo sui progressi"] 
    },
    { 
        domanda: "Quale strumento è citato per la co-creazione di contenuti?", 
        corretta: "Miro", 
        errate: ["Blocco note", "Calcolatrice", "Esplora file"] 
    },
    { 
        domanda: "Quale piattaforma è elencata per la gestione dei progetti?", 
        corretta: "Asana", 
        errate: ["LinkedIn", "YouTube", "Instagram"] 
    },
    { 
        domanda: "La condivisione di documenti in tempo reale avviene su:", 
        corretta: "Google Docs", 
        errate: ["Carta e penna", "Lavagna fisica", "Fax"] 
    },
    { 
        domanda: "Quale strumento è citato per la co-creazione di contenuti multimediali?", 
        corretta: "Canva", 
        errate: ["Registro di Windows", "Pannello di controllo", "Cestino"] 
    },
    { 
        domanda: "La competenza 2.2 permette di:", 
        corretta: "Raggiungere obiettivi comuni attraverso piattaforme digitali", 
        errate: ["Lavorare sempre da soli", "Evitare ogni condivisione", "Limitarsi alla carta"] 
    },
    { 
        domanda: "Quale piattaforma è menzionata per il monitoraggio dello stato di avanzamento?", 
        corretta: "Trello", 
        errate: ["Gmail", "Outlook", "Telegram"] 
    },
    { 
        domanda: "La co-creazione di contenuti include:", 
        corretta: "Sviluppo collettivo di idee o materiali multimediali", 
        errate: ["Lavoro individuale forzato", "Eliminazione dei contributi altrui", "Nessuna modifica condivisa"] 
    },
    { 
        domanda: "Quale strumento è citato per la gestione dei progetti?", 
        corretta: "Jira", 
        errate: ["Facebook", "Messenger", "TikTok"] 
    },
    { 
        domanda: "La condivisione digitale serve a:", 
        corretta: "Lavorare insieme su file condivisi in tempo reale", 
        errate: ["Nascondere i documenti", "Limitare l’accesso a tutti", "Eliminare la collaborazione"] 
    },
    { 
        domanda: "Quale piattaforma è elencata per la co-creazione?", 
        corretta: "Figma", 
        errate: ["Paint", "Blocco note", "Calcolatrice"] 
    },
    { 
        domanda: "La suddivisione di compiti avviene tipicamente su:", 
        corretta: "Trello", 
        errate: ["Email", "Posta cartacea", "Telegramma"] 
    },
    { 
        domanda: "Quale strumento è citato per la condivisione di documenti?", 
        corretta: "Microsoft OneDrive", 
        errate: ["Fax", "Lettera", "Piccione viaggiatore"] 
    },
    { 
        domanda: "La collaborazione digitale riguarda il lavoro collettivo per:", 
        corretta: "Raggiungere obiettivi comuni", 
        errate: ["Lavorare in isolamento", "Evitare ogni contatto", "Limitarsi a una persona"] 
    },
    { 
        domanda: "Quale piattaforma è menzionata per la co-creazione di materiali?", 
        corretta: "Miro", 
        errate: ["Excel", "Word", "PowerPoint"] 
    },
    { 
        domanda: "La gestione dei progetti include il monitoraggio dello stato di avanzamento su:", 
        corretta: "Asana", 
        errate: ["WhatsApp", "SMS", "Telefono fisso"] 
    },
    { 
        domanda: "Quale strumento è citato per la condivisione in tempo reale?", 
        corretta: "Google Docs", 
        errate: ["Stampa", "Lavagna", "Carta"] 
    },
    { 
        domanda: "La co-creazione di contenuti multimediali avviene su:", 
        corretta: "Canva", 
        errate: ["Blocco note", "Registro", "Cestino"] 
    },
    { 
        domanda: "La competenza 2.2 è essenziale per:", 
        corretta: "Il lavoro collettivo attraverso piattaforme digitali", 
        errate: ["Il lavoro individuale forzato", "L’isolamento digitale", "L’eliminazione della collaborazione"] 
    },
    { 
        domanda: "Quale piattaforma è citata per la suddivisione di compiti?", 
        corretta: "Trello", 
        errate: ["Facebook", "Instagram", "TikTok"] 
    },
    { 
        domanda: "La condivisione digitale permette di lavorare insieme su file:", 
        corretta: "In tempo reale", 
        errate: ["Solo uno alla volta con 24 ore di ritardo", "Mai contemporaneamente", "Solo stampando"] 
    },
    { 
        domanda: "La competenza 2.3 riguarda principalmente:", 
        corretta: "Partecipare alla società attraverso i servizi digitali pubblici e privati", 
        errate: ["Creare videogiochi", "Limitarsi alla comunicazione privata", "Evitare ogni forma di cittadinanza"] 
    },
    { 
        domanda: "Quale delle seguenti è un esempio di cittadinanza attiva digitale citato nel manuale?", 
        corretta: "Firmare petizioni online", 
        errate: ["Inviare lettere cartacee", "Telefonare agli uffici pubblici", "Andare di persona agli sportelli"] 
    },
    { 
        domanda: "I servizi digitali pubblici comprendono:", 
        corretta: "SPID, CIE, PagoPA e servizi comunali online", 
        errate: ["Solo acquisti online su Amazon", "Solo social network", "Solo giochi online"] 
    },
    { 
        domanda: "Quale piattaforma è menzionata per i servizi della Pubblica Amministrazione?", 
        corretta: "PagoPA", 
        errate: ["TikTok", "Instagram", "Snapchat"] 
    },
    { 
        domanda: "La cittadinanza digitale attiva include:", 
        corretta: "Partecipare a consultazioni pubbliche online", 
        errate: ["Ignorare ogni avviso pubblico", "Limitarsi alla TV", "Non votare mai"] 
    },
    { 
        domanda: "Quale identità elettronica è citata nel manuale italiano?", 
        corretta: "SPID", 
        errate: ["Facebook Login", "Google Account", "Apple ID"] 
    },
    { 
        domanda: "Un esempio di servizio privato digitale per la cittadinanza è:", 
        corretta: "Home banking", 
        errate: ["Solo giochi", "Solo social", "Solo email personali"] 
    },
    { 
        domanda: "La competenza 2.3 serve a:", 
        corretta: "Esercitare i propri diritti e doveri anche online", 
        errate: ["Evitare ogni responsabilità digitale", "Limitarsi alla carta", "Non partecipare mai alla società"] 
    },
    { 
        domanda: "Quale carta elettronica è menzionata per l’accesso ai servizi pubblici?", 
        corretta: "Carta d’Identità Elettronica (CIE)", 
        errate: ["Carta di credito normale", "Tessera sanitaria cartacea", "Biglietto dell’autobus"] 
    },
    { 
        domanda: "La partecipazione attiva alla società digitale comprende:", 
        corretta: "Firmare petizioni su piattaforme dedicate", 
        errate: ["Non firmare mai nulla", "Firmare solo su carta", "Inviare fax"] 
    },
    { 
        domanda: "Quale sistema di pagamento digitale pubblico è citato?", 
        corretta: "PagoPA", 
        errate: ["PayPal", "Satispay", "Revolut"] 
    },
    { 
        domanda: "La cittadinanza digitale include l’uso di servizi:", 
        corretta: "Sia pubblici che privati", 
        errate: ["Solo pubblici", "Solo privati", "Nessuno"] 
    },
    { 
        domanda: "Un esempio di consultazione pubblica online è:", 
        corretta: "Partecipare a sondaggi del Comune sul portale istituzionale", 
        errate: ["Commentare post su Instagram", "Mettere like su Facebook", "Guardare storie"] 
    },
    { 
        domanda: "La competenza 2.3 promuove:", 
        corretta: "La partecipazione attiva e consapevole alla società digitale", 
        errate: ["L’isolamento digitale", "Il rifiuto delle tecnologie", "L’uso solo per divertimento"] 
    },
    { 
        domanda: "Quale strumento è citato per l’identità digitale italiana?", 
        corretta: "SPID", 
        errate: ["Twitter", "WhatsApp", "Telegram"] 
    },
    { 
        domanda: "L’accesso ai servizi della PA avviene spesso tramite:", 
        corretta: "CIE", 
        errate: ["Lettera raccomandata", "Fax", "Piccione viaggiatore"] 
    },
    { 
        domanda: "Un esempio di servizio pubblico digitale è:", 
        corretta: "Prenotazione CUP online", 
        errate: ["Solo Netflix", "Solo Spotify", "Solo YouTube"] 
    },
    { 
        domanda: "La cittadinanza attiva digitale comprende:", 
        corretta: "Segnalazioni al Comune tramite app o portale", 
        errate: ["Telefonare sempre", "Andare sempre di persona", "Non segnalare mai"] 
    },
    { 
        domanda: "Il manuale cita come esempio di pagamento digitale pubblico:", 
        corretta: "PagoPA", 
        errate: ["Amazon Pay", "Google Pay", "Apple Pay"] 
    },
    { 
        domanda: "Partecipare a petizioni online è considerato:", 
        corretta: "Cittadinanza attiva digitale", 
        errate: ["Spam", "Gioco", "Perdita di tempo"] 
    },
    { 
        domanda: "L’uso di SPID serve per:", 
        corretta: "Accedere ai servizi della Pubblica Amministrazione", 
        errate: ["Solo social network", "Solo giochi", "Solo email"] 
    },
    { 
        domanda: "La competenza 2.3 include anche i servizi:", 
        corretta: "Bancari e assicurativi online", 
        errate: ["Solo pubblici", "Solo privati", "Nessuno"] 
    },
    { 
        domanda: "Un esempio di partecipazione civica digitale è:", 
        corretta: "Compilare moduli online per il Comune", 
        errate: ["Scrivere lettere a mano", "Telefonare", "Andare allo sportello"] 
    },
    { 
        domanda: "La CIE (Carta d’Identità Elettronica) permette:", 
        corretta: "L’accesso autenticato ai servizi pubblici online", 
        errate: ["Solo foto tessera", "Solo residenza", "Solo voto cartaceo"] 
    },
    { 
        domanda: "La cittadinanza digitale attiva significa:", 
        corretta: "Essere parte attiva della società anche online", 
        errate: ["Essere passivi", "Non partecipare mai", "Limitarsi alla TV"] 
    },
    { 
        domanda: "Quale sistema di identità digitale è citato?", 
        corretta: "SPID", 
        errate: ["Facebook", "Instagram", "TikTok"] 
    },
    { 
        domanda: "Un esempio di servizio privato per la cittadinanza digitale è:", 
        corretta: "Home banking", 
        errate: ["Solo giochi", "Solo social", "Solo video"] 
    },
    { 
        domanda: "La partecipazione a consultazioni pubbliche online è:", 
        corretta: "Cittadinanza attiva digitale", 
        errate: ["Spam", "Gioco", "Perdita di tempo"] 
    },
    { 
        domanda: "PagoPA è utilizzato per:", 
        corretta: "Pagamenti verso la Pubblica Amministrazione", 
        errate: ["Solo acquisti su Amazon", "Solo Netflix", "Solo Spotify"] 
    },
    { 
        domanda: "La competenza 2.3 promuove l’uso consapevole di servizi:", 
        corretta: "Digitali pubblici e privati", 
        errate: ["Solo cartacei", "Solo telefonici", "Nessuno"] 
    },
    { 
        domanda: "La competenza 2.4 riguarda principalmente:", 
        corretta: "Collaborare attraverso le tecnologie digitali", 
        errate: ["Creare videogiochi", "Limitarsi alla comunicazione privata", "Evitare ogni forma di lavoro di gruppo"] 
    },
    { 
        domanda: "Quale delle seguenti è una forma di collaborazione digitale citata nel manuale?", 
        corretta: "Co-creazione di contenuti", 
        errate: ["Scrivere lettere a mano", "Telefonare senza video", "Incontrarsi solo di persona"] 
    },
    { 
        domanda: "Quale piattaforma è menzionata per la co-creazione di contenuti multimediali?", 
        corretta: "Canva", 
        errate: ["Blocco note", "Calcolatrice", "Paint"] 
    },
    { 
        domanda: "La gestione dei progetti con suddivisione di compiti avviene tipicamente su:", 
        corretta: "Trello", 
        errate: ["WhatsApp", "SMS", "Fax"] 
    },
    { 
        domanda: "Quale strumento è citato per lo sviluppo collettivo di idee?", 
        corretta: "Miro", 
        errate: ["Excel", "Word", "PowerPoint"] 
    },
    { 
        domanda: "La collaborazione digitale permette di:", 
        corretta: "Raggiungere obiettivi comuni attraverso piattaforme digitali", 
        errate: ["Lavorare sempre in isolamento", "Eliminare ogni contributo altrui", "Limitarsi a testi scritti"] 
    },
    { 
        domanda: "Quale piattaforma è elencata per la gestione dei progetti?", 
        corretta: "Asana", 
        errate: ["Facebook", "Instagram", "TikTok"] 
    },
    { 
        domanda: "La co-creazione di materiali multimediali avviene su:", 
        corretta: "Figma", 
        errate: ["Registro di Windows", "Pannello di controllo", "Cestino"] 
    },
    { 
        domanda: "Quale strumento è citato per il monitoraggio dello stato di avanzamento?", 
        corretta: "Jira", 
        errate: ["Gmail", "Outlook", "Telegram"] 
    },
    { 
        domanda: "La collaborazione digitale include:", 
        corretta: "Condivisione di documenti in tempo reale", 
        errate: ["Stampa collettiva", "Lavagna fisica", "Nessuna condivisione"] 
    },
    { 
        domanda: "Quale piattaforma è menzionata per la co-creazione di contenuti?", 
        corretta: "Canva", 
        errate: ["Paint", "Blocco note", "Calcolatrice"] 
    },
    { 
        domanda: "La suddivisione di compiti è tipica di:", 
        corretta: "Trello", 
        errate: ["Email", "Posta cartacea", "Piccione viaggiatore"] 
    },
    { 
        domanda: "Quale strumento è citato per lo sviluppo collettivo di idee?", 
        corretta: "Miro", 
        errate: ["Excel", "Word", "PowerPoint"] 
    },
    { 
        domanda: "La competenza 2.4 è essenziale per:", 
        corretta: "Il lavoro collettivo attraverso piattaforme digitali", 
        errate: ["Il lavoro individuale forzato", "L’isolamento digitale", "L’eliminazione della collaborazione"] 
    },
    { 
        domanda: "Quale piattaforma è elencata per la gestione dei progetti?", 
        corretta: "Asana", 
        errate: ["LinkedIn", "YouTube", "Instagram"] 
    },
    { 
        domanda: "La co-creazione di contenuti multimediali avviene su:", 
        corretta: "Figma", 
        errate: ["Blocco note", "Registro", "Cestino"] 
    },
    { 
        domanda: "Il monitoraggio dello stato di avanzamento è possibile su:", 
        corretta: "Jira", 
        errate: ["WhatsApp", "SMS", "Telefono fisso"] 
    },
    { 
        domanda: "La collaborazione digitale permette di lavorare insieme su file:", 
        corretta: "In tempo reale", 
        errate: ["Solo uno alla volta con ritardo", "Mai contemporaneamente", "Solo stampando"] 
    },
    { 
        domanda: "Quale strumento è citato per la co-creazione di materiali?", 
        corretta: "Canva", 
        errate: ["Paint", "Blocco note", "Calcolatrice"] 
    },
    { 
        domanda: "La suddivisione di compiti avviene su piattaforme come:", 
        corretta: "Trello", 
        errate: ["Facebook", "Instagram", "TikTok"] 
    },
    { 
        domanda: "La gestione dei progetti include il monitoraggio su:", 
        corretta: "Asana", 
        errate: ["Gmail", "Outlook", "Telegram"] 
    },
    { 
        domanda: "La co-creazione di contenuti avviene su:", 
        corretta: "Miro", 
        errate: ["Excel", "Word", "PowerPoint"] 
    },
    { 
        domanda: "Quale piattaforma è citata per la collaborazione su design?", 
        corretta: "Figma", 
        errate: ["Blocco note", "Registro", "Cestino"] 
    },
    { 
        domanda: "La competenza 2.4 permette di:", 
        corretta: "Raggiungere obiettivi comuni in modo collettivo", 
        errate: ["Lavorare sempre da soli", "Evitare ogni contatto", "Limitarsi a una persona"] 
    },
    { 
        domanda: "Il lavoro collettivo attraverso piattaforme digitali è l’obiettivo di:", 
        corretta: "2.4", 
        errate: ["Solo comunicazione individuale", "Solo cittadinanza", "Solo netiquette"] 
    },
    { 
        domanda: "La co-creazione di materiali multimediali è possibile su:", 
        corretta: "Canva", 
        errate: ["Paint", "Blocco note", "Calcolatrice"] 
    },
    { 
        domanda: "La suddivisione di compiti è tipica di:", 
        corretta: "Trello", 
        errate: ["Email", "SMS", "Fax"] 
    },
    { 
        domanda: "La collaborazione digitale supera barriere:", 
        corretta: "Fisiche, geografiche e temporali", 
        errate: ["Solo fisiche", "Solo culturali", "Nessuna"] 
    },
    { 
        domanda: "Quale strumento è citato per la gestione dei progetti?", 
        corretta: "Jira", 
        errate: ["Facebook", "Instagram", "TikTok"] 
    },
    { 
        domanda: "La competenza 2.4 è fondamentale per:", 
        corretta: "Il lavoro di gruppo in ambiente digitale", 
        errate: ["Il lavoro individuale forzato", "L’isolamento digitale", "L’eliminazione della collaborazione"] 
    },
    { 
        domanda: "La netiquette è definita nel manuale come:", 
        corretta: "L’insieme di regole di comportamento rispettoso online", 
        errate: ["La libertà di dire qualsiasi cosa", "L’uso obbligatorio di maiuscole", "Inviare spam"] 
    },
    { 
        domanda: "È buona netiquette:", 
        corretta: "Usare un linguaggio chiaro, cortese e rispettoso", 
        errate: ["Scrivere tutto in MAIUSCOLO", "Insultare gli altri utenti", "Inviare catene di Sant’Antonio"] 
    },
    { 
        domanda: "Secondo il manuale, perché è sconsigliato scrivere in maiuscolo?", 
        corretta: "Equivale a urlare", 
        errate: ["È più elegante", "Risparmia inchiostro", "È più veloce"] 
    },
    { 
        domanda: "Un esempio di netiquette è:", 
        corretta: "Citare correttamente le fonti quando si condivide contenuto altrui", 
        errate: ["Copiare testi senza indicare l’autore", "Inviare lo stesso messaggio a centinaia di persone", "Usare emoji aggressive"] 
    },
    { 
        domanda: "La competenza 2.5 serve a:", 
        corretta: "Evitare malintesi e conflitti nelle comunicazioni digitali", 
        errate: ["Creare conflitti intenzionali", "Ignorare le regole", "Limitarsi a testi brevi"] 
    },
    { 
        domanda: "È buona netiquette:", 
        corretta: "Rileggere il messaggio prima di inviarlo", 
        errate: ["Inviare senza controllare", "Usare sempre abbreviazioni incomprensibili", "Rispondere dopo mesi"] 
    },
    { 
        domanda: "La competenza 2.6 riguarda principalmente:", 
        corretta: "Gestire la propria presenza, identità e reputazione digitale", 
        errate: ["Creare profili falsi", "Condividere tutto pubblicamente", "Non avere nessun profilo online"] 
    },
    { 
        domanda: "Un rischio dell’identità digitale è:", 
        corretta: "La permanenza delle informazioni online", 
        errate: ["La cancellazione immediata di tutto", "L’assenza di tracce", "L’impossibilità di modificare"] 
    },
    { 
        domanda: "Per proteggere la reputazione digitale è consigliato:", 
        corretta: "Pensare prima di pubblicare", 
        errate: ["Pubblicare tutto impulsivamente", "Usare sempre account anonimi", "Non controllare mai le impostazioni privacy"] 
    },
    { 
        domanda: "Il manuale cita l’importanza di:", 
        corretta: "Configurare correttamente le impostazioni di privacy sui social", 
        errate: ["Rendere sempre tutto pubblico", "Condividere password", "Usare lo stesso nickname ovunque senza pensarci"] 
    },
    { 
        domanda: "È possibile avere identità digitali diverse per:", 
        corretta: "Contesti professionali e personali", 
        errate: ["Solo lavoro", "Solo svago", "Nessun contesto"] 
    },
    { 
        domanda: "Un consiglio per la gestione dell’identità digitale è:", 
        corretta: "Separare profilo personale e professionale", 
        errate: ["Usare lo stesso profilo per tutto", "Non avere foto profilo", "Cambiare account ogni giorno"] 
    },
    { 
        domanda: "La reputazione digitale può essere danneggiata da:", 
        corretta: "Contenuti pubblicati anni fa", 
        errate: ["Solo contenuti recenti", "Mai, tutto sparisce", "Solo da altri utenti"] 
    },
    { 
        domanda: "Per la netiquette è consigliato:", 
        corretta: "Evitare di rispondere emotivamente a messaggi provocatori", 
        errate: ["Rispondere sempre con insulti", "Alimentare flame", "Inviare messaggi multipli uguali"] 
    },
    { 
        domanda: "La competenza 2.6 include:", 
        corretta: "Monitorare la propria impronta digitale", 
        errate: ["Ignorare cosa c’è online su di sé", "Pubblicare tutto senza filtri", "Non usare mai i social"] 
    },
    { 
        domanda: "Un esempio di buona netiquette è:", 
        corretta: "Rispondere in modo educato anche a critiche", 
        errate: ["Bloccare tutti", "Trollare", "Inviare spam"] 
    },
    { 
        domanda: "Per gestire l’identità digitale è utile:", 
        corretta: "Cercare periodicamente il proprio nome su Google", 
        errate: ["Non controllare mai", "Usare solo nickname assurdi", "Creare centinaia di profili falsi"] 
    },
    { 
        domanda: "La netiquette vieta praticamente:", 
        corretta: "Il flaming (provocazioni intenzionali)", 
        errate: ["Le discussioni serene", "Le risposte educate", "L’uso di emoji"] 
    },
    { 
        domanda: "È buona prassi per la reputazione digitale:", 
        corretta: "Pubblicare solo contenuti di cui si è orgogliosi", 
        errate: ["Usare sempre linguaggio volgare", "Taggare tutti senza permesso", "Pubblicare tutto ciò che viene in mente"] 
    },
    { 
        domanda: "La competenza 2.6 consiglia di:", 
        corretta: "Usare password diverse e complesse per ogni account", 
        errate: ["Usare sempre la stessa password", "Non usare password", "Condividere le password"] 
    },
    { 
        domanda: "Un rischio citato per l’identità digitale è:", 
        corretta: "Furto d’identità", 
        errate: ["Nessun rischio", "Troppa privacy", "Impossibilità di creare profili"] 
    },
    { 
        domanda: "È buona netiquette:", 
        corretta: "Non inondare le chat con messaggi inutili", 
        errate: ["Inviare 50 messaggi uguali", "Usare solo emoji", "Scrivere solo in maiuscolo"] 
    },
    { 
        domanda: "Per proteggere l’identità digitale è consigliato:", 
        corretta: "Attivare l’autenticazione a due fattori", 
        errate: ["Disattivarla sempre", "Condividere codici 2FA", "Usare solo SMS"] 
    },
    { 
        domanda: "La netiquette promuove:", 
        corretta: "Il rispetto della privacy altrui", 
        errate: ["La condivisione di dati personali senza consenso", "Il doxxing", "La diffamazione"] 
    },
    { 
        domanda: "La gestione dell’identità digitale include:", 
        corretta: "Eliminare periodicamente contenuti compromettenti", 
        errate: ["Lasciare tutto online per sempre", "Non eliminare mai nulla", "Pubblicare solo foto altrui"] 
    },
    { 
        domanda: "È buona netiquette:", 
        corretta: "Chiedere permesso prima di taggare qualcuno", 
        errate: ["Taggare tutti senza chiedere", "Pubblicare foto di altri senza consenso", "Creare gruppi senza avvisare"] 
    },
    { 
        domanda: "La competenza 2.6 serve soprattutto a:", 
        corretta: "Proteggere la propria reputazione futura (lavoro, università…)", 
        errate: ["Rendere tutto pubblico", "Non pensare al futuro", "Creare solo profili falsi"] 
    },
    { 
        domanda: "Un consiglio del manuale per la netiquette è:", 
        corretta: "Usare un tono professionale nelle comunicazioni di lavoro", 
        errate: ["Usare sempre slang e abbreviazioni", "Scrivere in modo illeggibile", "Non salutare mai"] 
    },
    { 
        domanda: "Per l’identità digitale è importante:", 
        corretta: "Separare vita privata e professionale quando necessario", 
        errate: ["Mescolare tutto sempre", "Usare solo un account per tutto", "Non avere privacy"] 
    },
    { 
        domanda: "La netiquette e la gestione dell’identità digitale sono collegate perché:", 
        corretta: "Un comportamento rispettoso protegge anche la propria reputazione", 
        errate: ["Non hanno nessun legame", "Servono solo a limitare la libertà", "Sono obbligatorie solo a scuola"] 
    }
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
