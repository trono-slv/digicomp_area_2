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
"domanda": "Secondo il syllabus, cosa si intende per collaborazione in ambienti digitali?",
"opzioni": ["L'uso di tecnologie digitali per lavorare insieme verso un obiettivo comune", "La navigazione su siti di notizie", "L'invio di posta elettronica non richiesta", "L'acquisto di prodotti su siti di e-commerce"],
"rispostaCorretta": "L'uso di tecnologie digitali per lavorare insieme verso un obiettivo comune",
"area": "Area 2"
},
{
"domanda": "Quale tra i seguenti strumenti è un esempio tipico di comunicazione asincrona?",
"opzioni": ["Videochiamata in diretta", "Posta elettronica (E-mail)", "Telefonata tradizionale", "Chat dal vivo con supporto tecnico"],
"rispostaCorretta": "Posta elettronica (E-mail)",
"area": "Area 2"
},
{
"domanda": "Quale dei seguenti è un sistema di messaggistica istantanea citato nel manuale AICA?",
"opzioni": ["Microsoft Excel", "Signal", "Adobe Acrobat", "Google Drive"],
"rispostaCorretta": "Signal",
"area": "Area 2"
},
{
"domanda": "Secondo la definizione standard del syllabus, cos'è lo spam?",
"opzioni": ["Un virus che cancella i file", "L'invio massivo di messaggi indesiderati", "Un tipo di file compresso", "Un sistema di protezione dei dati"],
"rispostaCorretta": "L'invio massivo di messaggi indesiderati",
"area": "Area 2"
},
{
"domanda": "Qual è un vantaggio della posta elettronica rispetto alla messaggistica istantanea?",
"opzioni": ["L'obbligo di risposta immediata", "Una migliore organizzazione e archiviazione formale dei messaggi", "La possibilità di inviare solo messaggi vocali", "La necessità che entrambi gli utenti siano online"],
"rispostaCorretta": "Una migliore organizzazione e archiviazione formale dei messaggi",
"area": "Area 2"
},
{
"domanda": "Cosa indica il manuale AICA riguardo all'uso di sistemi come Zoom o Google Meet?",
"opzioni": ["Sono utilizzabili solo da tablet", "Alcuni sistemi possono richiedere l'installazione di un'app dedicata", "Funzionano solo senza connessione internet", "Sostituiscono completamente l'invio di SMS"],
"rispostaCorretta": "Alcuni sistemi possono richiedere l'installazione di un'app dedicata",
"area": "Area 2"
},
{
"domanda": "Cosa si intende per 'interazione con un'intelligenza artificiale'?",
"opzioni": ["L'invio di una raccomandata", "L'uso di chatbot che rispondono in modo automatizzato alle richieste", "La pulizia dello schermo del PC", "La condivisione di una foto su Instagram"],
"rispostaCorretta": "L'uso di chatbot che rispondono in modo automatizzato alle richieste",
"area": "Area 2"
},
{
"domanda": "Perché molti servizi di comunicazione digitali sono offerti gratuitamente?",
"opzioni": ["Perché non hanno costi di gestione", "Perché sono finanziati tramite la pubblicità e l'uso dei dati degli utenti", "Perché sono obbligatori per legge", "Perché sono creati da volontari anonimi"],
"rispostaCorretta": "Perché sono finanziati tramite la pubblicità e l'uso dei dati degli utenti",
"area": "Area 2"
},
{
"domanda": "Quale programma è un esempio di 'client di posta' gestito in locale sul computer?",
"opzioni": ["Gmail (tramite browser)", "Microsoft Outlook", "Facebook Messenger", "WhatsApp Web"],
"rispostaCorretta": "Microsoft Outlook",
"area": "Area 2"
},
{
"domanda": "Quale strumento è più adatto per una comunicazione ufficiale e formale con un ente pubblico?",
"opzioni": ["Podcast", "E-mail (o PEC)", "Messaggio su TikTok", "Stato di WhatsApp"],
"rispostaCorretta": "E-mail (o PEC)",
"area": "Area 2"
},
{
"domanda": "Cosa si intende per 'nudging' negli ambienti digitali?",
"opzioni": ["Un attacco informatico per rubare password", "L'uso di meccanismi per influenzare sottilmente il comportamento dell'utente", "Il blocco automatico della videocamera", "L'aggiornamento del sistema operativo"],
"rispostaCorretta": "L'uso di meccanismi per influenzare sottilmente il comportamento dell'utente",
"area": "Area 2"
},
{
"domanda": "Per leggere una e-mail ricevuta, quale azione è solitamente necessaria?",
"opzioni": ["Riavviare il computer", "Selezionare o cliccare sul messaggio nell'elenco della posta in arrivo", "Cancellare il messaggio immediatamente", "Inviarne una copia a se stessi"],
"rispostaCorretta": "Selezionare o cliccare sul messaggio nell'elenco della posta in arrivo",
"area": "Area 2"
},
{
"domanda": "In un sistema di messaggistica istantanea, come si invia un messaggio dopo averlo scritto?",
"opzioni": ["Premendo il tasto di spegnimento", "Cliccando sull'icona di invio (solitamente un aeroplanino)", "Chiudendo la finestra dell'applicazione", "Scuotendo il dispositivo"],
"rispostaCorretta": "Cliccando sull'icona di invio (solitamente un aeroplanino)",
"area": "Area 2"
},
{
"domanda": "In una e-mail, a cosa serve il campo 'Cc'?",
"opzioni": ["A inserire l'allegato", "A inviare una copia del messaggio per conoscenza ad altri destinatari", "A nascondere l'indirizzo del mittente", "A correggere gli errori grammaticali"],
"rispostaCorretta": "A inviare una copia del messaggio per conoscenza ad altri destinatari",
"area": "Area 2"
},
{
"domanda": "Cosa significa fare un uso consapevole delle comunicazioni?",
"opzioni": ["Inviare messaggi a qualsiasi ora senza distinzione", "Valutare quale strumento sia più adatto tra sincrono e asincrono in base all'urgenza", "Usare solo strumenti a pagamento", "Non rispondere mai alle e-mail dei colleghi"],
"rispostaCorretta": "Valutare quale strumento sia più adatto tra sincrono e asincrono in base all'urgenza",
"area": "Area 2"
},
{
"domanda": "Quale funzione di messaggistica permette di inoltrare un messaggio ricevuto?",
"opzioni": ["Elimina", "Inoltra (Forward)", "Copia", "Silenzia"],
"rispostaCorretta": "Inoltra (Forward)",
"area": "Area 2"
},
{
"domanda": "Per spedire un messaggio vocale, quale componente hardware deve essere attivo?",
"opzioni": ["La stampante", "Il microfono", "Lo scanner", "Il mouse"],
"rispostaCorretta": "Il microfono",
"area": "Area 2"
},
{
"domanda": "Come si può partecipare a una videochiamata programmata tramite link?",
"opzioni": ["Bisogna chiamare il numero verde", "Bisogna cliccare sul link ricevuto all'orario stabilito", "Bisogna inviare una raccomandata", "Bisogna cambiare la password del Wi-Fi"],
"rispostaCorretta": "Bisogna cliccare sul link ricevuto all'orario stabilito",
"area": "Area 2"
},
{
"domanda": "Durante una videochiamata, cosa si intende per 'MUTE'?",
"opzioni": ["La disattivazione della videocamera", "La disattivazione del proprio microfono", "La chiusura della connessione internet", "L'invio di un messaggio di testo"],
"rispostaCorretta": "La disattivazione del proprio microfono",
"area": "Area 2"
},
{
"domanda": "Quale tasto si usa solitamente per terminare una videochiamata individuale o di gruppo?",
"opzioni": ["Il tasto F5 sulla tastiera", "Il tasto 'Abbandona' o l'icona della cornetta rossa", "Il tasto di blocco dello schermo", "Il tasto INVIO"],
"rispostaCorretta": "Il tasto 'Abbandona' o l'icona della cornetta rossa",
"area": "Area 2"
},
{
"domanda": "Cosa consente di fare la 'condivisione dello schermo' in una videochiamata?",
"opzioni": ["Vedere cosa mangia l'interlocutore", "Mostrare il proprio desktop o un'applicazione specifica agli altri partecipanti", "Dividere lo schermo fisicamente in due parti", "Aumentare la risoluzione della webcam"],
"rispostaCorretta": "Mostrare il proprio desktop o un'applicazione specifica agli altri partecipanti",
"area": "Area 2"
},
{
"domanda": "Qual è il vantaggio di usare la chat interna durante una videochiamata?",
"opzioni": ["Spegnere il computer degli altri", "Comunicare per iscritto o condividere link senza interrompere chi parla", "Evitare di pagare il canone internet", "Visualizzare i file segreti del mittente"],
"rispostaCorretta": "Comunicare per iscritto o condividere link senza interrompere chi parla",
"area": "Area 2"
},
{
"domanda": "Come si può visualizzare chi sta partecipando a una videochiamata su piattaforme come Meet o Teams?",
"opzioni": ["Bisogna gridare il proprio nome", "Consultando l'apposita sezione 'Partecipanti' nell'interfaccia del software", "Contando le luci sul modem", "Non è possibile visualizzare l'elenco"],
"rispostaCorretta": "Consultando l'apposita sezione 'Partecipanti' nell'interfaccia del software",
"area": "Area 2"
},
{
"domanda": "Cosa comporta l'azione di 'archiviare' un messaggio di posta?",
"opzioni": ["La cancellazione definitiva del messaggio", "Lo spostamento del messaggio dalla cartella principale a un archivio, mantenendolo recuperabile", "L'invio del messaggio alla polizia postale", "La stampa automatica su carta"],
"rispostaCorretta": "Lo spostamento del messaggio dalla cartella principale a un archivio, mantenendolo recuperabile",
"area": "Area 2"
},
{
"domanda": "Come si dovrebbe gestire un'e-mail identificata come spam?",
"opzioni": ["Rispondendo con rabbia", "Aprendo tutti i link per curiosità", "Segnalandola come spam e cancellandola senza aprire gli allegati", "Inviandola a tutti i propri amici"],
"rispostaCorretta": "Segnalandola come spam e cancellandola senza aprire gli allegati",
"area": "Area 2"
},
{
"domanda": "Quale elemento suggerisce che stai interagendo con un chatbot basato su IA?",
"opzioni": ["La presenza di errori di ortografia umani", "Risposte immediate disponibili 24 ore su 24 con uno stile spesso ripetitivo", "Il fatto che l'interlocutore ti chieda un prestito", "La necessità di usare una penna ottica"],
"rispostaCorretta": "Risposte immediate disponibili 24 ore su 24 con uno stile spesso ripetitivo",
"area": "Area 2"
},
{
"domanda": "Qual è lo scopo principale del fornire feedback a un sistema di IA?",
"opzioni": ["Vincere un premio in denaro", "Aiutare il sistema ad apprendere e migliorare la qualità delle risposte", "Spegnere il server dell'azienda", "Ottenere uno sconto sulla bolletta elettrica"],
"rispostaCorretta": "Aiutare il sistema ad apprendere e migliorare la qualità delle risposte",
"area": "Area 2"
},
{
"domanda": "Per programmare una riunione tra più persone in modalità asincrona, cosa è utile usare?",
"opzioni": ["Una telefonata circolare", "Uno strumento di sondaggio (come Doodle)", "Un post su un social network pubblico", "Un messaggio vocale di 10 minuti"],
"rispostaCorretta": "Uno strumento di sondaggio (come Doodle)",
"area": "Area 2"
},
{
    "domanda": "Secondo il manuale AICA, che cos'è il 'Cloud'?",
    "opzioni": ["Un dispositivo fisico da collegare al router", "Uno spazio di archiviazione e servizi accessibili via internet su server remoti", "Un programma per stampare documenti a distanza", "Un sistema per velocizzare il processore del computer"],
    "rispostaCorretta": "Uno spazio di archiviazione e servizi accessibili via internet su server remoti",
    "area": "Area 2"
  },
  {
    "domanda": "Quale tra i seguenti è un social network citato come luogo di comunità digitale nel syllabus?",
    "opzioni": ["Google Drive", "TikTok", "Microsoft Word", "Dropbox"],
    "rispostaCorretta": "TikTok",
    "area": "Area 2"
  },
  {
    "domanda": "Quale tecnologia è più indicata per la condivisione di file e informazioni in ambito lavorativo collaborativo?",
    "opzioni": ["SMS tradizionali", "Piattaforme di cloud storage o messaggistica come Slack", "Solo la posta ordinaria", "Le telefonate anonime"],
    "rispostaCorretta": "Piattaforme di cloud storage o messaggistica come Slack",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è uno dei rischi principali legati alla sincronizzazione dei file con il cloud?",
    "opzioni": ["Il computer consuma meno energia", "Le modifiche o cancellazioni fatte su un dispositivo si replicano su tutti gli altri collegati", "I file diventano leggibili solo in bianco e nero", "La connessione internet viene interrotta per sempre"],
    "rispostaCorretta": "Le modifiche o cancellazioni fatte su un dispositivo si replicano su tutti gli altri collegati",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa deve sapere l'utente riguardo ai contenuti condivisi pubblicamente online e l'IA?",
    "opzioni": ["Che vengono protetti da una password segreta universale", "Che possono essere usati per addestrare sistemi di intelligenza artificiale", "Che vengono cancellati automaticamente dopo un'ora", "Che non possono essere visti da nessuno"],
    "rispostaCorretta": "Che possono essere usati per addestrare sistemi di intelligenza artificiale",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è la responsabilità principale di un 'facilitatore online'?",
    "opzioni": ["Riparare i guasti elettrici dei server", "Guidare e strutturare un gruppo di discussione favorendo la partecipazione", "Controllare la cronologia del browser dei partecipanti", "Vendere prodotti pubblicitari ai membri del gruppo"],
    "rispostaCorretta": "Guidare e strutturare un gruppo di discussione favorendo la partecipazione",
    "area": "Area 2"
  },
  {
    "domanda": "Sui social network, qual è la funzione principale del tasto 'mi piace'?",
    "opzioni": ["Scaricare il post sul proprio PC", "Esprimere un parere positivo o apprezzamento verso un contenuto", "Bloccare l'autore del post", "Inviare una mail di reclamo alla piattaforma"],
    "rispostaCorretta": "Esprimere un parere positivo o apprezzamento verso un contenuto",
    "area": "Area 2"
  },
  {
    "domanda": "Quale funzione permette di inviare la propria posizione GPS tramite messaggistica istantanea?",
    "opzioni": ["Invia allegato", "Condividi posizione", "Invia contatto", "Inoltra messaggio"],
    "rispostaCorretta": "Condividi posizione",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa significa creare una rete di contatti (follower) in un social network?",
    "opzioni": ["Cancellare tutti i propri dati personali", "Costruire un elenco di persone con cui scambiare informazioni e aggiornamenti", "Installare un nuovo sistema operativo", "Pagare una quota mensile a ogni amico"],
    "rispostaCorretta": "Costruire un elenco di persone con cui scambiare informazioni e aggiornamenti",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa si intende per 'aderire a un gruppo di interesse' su un social network?",
    "opzioni": ["Diventare proprietari della società che gestisce il social", "Unirsi a una comunità digitale focalizzata su un tema specifico", "Sostituire la propria foto profilo con un logo", "Inviare un messaggio privato a tutti gli utenti della piattaforma"],
    "rispostaCorretta": "Unirsi a una comunità digitale focalizzata su un tema specifico",
    "area": "Area 2"
  },
  {
    "domanda": "In un'app di messaggistica, chi può 'abbandonare' una chat di gruppo?",
    "opzioni": ["Solo l'amministratore", "Qualsiasi partecipante in modo autonomo", "Solo chi ha creato l'account telefonico", "Nessuno, bisogna essere rimossi dall'esterno"],
    "rispostaCorretta": "Qualsiasi partecipante in modo autonomo",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa significa 'caricare un file nel cloud'?",
    "opzioni": ["Stampare il file su carta", "Trasferire un file dal proprio dispositivo a un server remoto su internet", "Cancellare il file dal disco rigido", "Spostare il file in una cartella locale del desktop"],
    "rispostaCorretta": "Trasferire un file dal proprio dispositivo a un server remoto su internet",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa consente il permesso di 'Commento' su un file condiviso nel cloud?",
    "opzioni": ["Di cancellare l'intero contenuto", "Di inserire note e osservazioni senza modificare il testo originale", "Di cambiare il nome del proprietario", "Di impedire agli altri di aprire il file"],
    "rispostaCorretta": "Di inserire note e osservazioni senza modificare il testo originale",
    "area": "Area 2"
  },
  {
    "domanda": "Perché è fondamentale citare le fonti quando si condividono contenuti altrui?",
    "opzioni": ["Per aumentare la velocità di download", "Per rispettare il diritto d'autore e la proprietà intellettuale", "Perché i file citati occupano meno spazio", "Per evitare che il computer si surriscaldi"],
    "rispostaCorretta": "Per rispettare il diritto d'autore e la proprietà intellettuale",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è lo scopo della creazione di una 'Pagina' per un'organizzazione su un social network?",
    "opzioni": ["Nascondere le informazioni al pubblico", "Creare un profilo ufficiale per comunicare con il proprio pubblico o clienti", "Sostituire il sito web della Pubblica Amministrazione", "Controllare i profili privati dei dipendenti"],
    "rispostaCorretta": "Creare un profilo ufficiale per comunicare con il proprio pubblico o clienti",
    "area": "Area 2"
  },
  {
    "domanda": "Come si può contrastare la disinformazione (notizie false) sui social media?",
    "opzioni": ["Condividendo la notizia con più persone possibile", "Usando le funzioni di segnalazione messe a disposizione dalla piattaforma", "Scrivendo un commento offensivo sotto il post", "Disinstallando il browser"],
    "rispostaCorretta": "Usando le funzioni di segnalazione messe a disposizione dalla piattaforma",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa si intende per 'e-government'?",
    "opzioni": ["L'uso delle tecnologie digitali per migliorare i servizi pubblici e la partecipazione dei cittadini", "La vendita di prodotti elettronici da parte del governo", "Un sistema per spiare i cittadini online", "La sostituzione dei politici con dei robot"],
    "rispostaCorretta": "L'uso delle tecnologie digitali per migliorare i servizi pubblici e la partecipazione dei cittadini",
    "area": "Area 2"
  },
  {
    "domanda": "Quale di questi è un esempio di portale di e-government citato nel syllabus?",
    "opzioni": ["Amazon", "Anagrafe Nazionale (ANPR)", "Netflix", "eBay"],
    "rispostaCorretta": "Anagrafe Nazionale (ANPR)",
    "area": "Area 2"
  },
  {
    "domanda": "A cosa si riferisce il termine 'e-Health'?",
    "opzioni": ["Alla vendita di attrezzi sportivi online", "All'uso delle tecnologie digitali applicate alla sanità e all'assistenza", "Al controllo della temperatura del computer", "Alla ginnastica fatta davanti allo schermo"],
    "rispostaCorretta": "All'uso delle tecnologie digitali applicate alla sanità e all'assistenza",
    "area": "Area 2"
  },
  {
    "domanda": "Perché siti come Wikipedia o OpenStreetMap sono definiti basati sulla collaborazione?",
    "opzioni": ["Perché sono di proprietà di una sola persona", "Perché il loro contenuto è creato e aggiornato da una vasta comunità di volontari", "Perché richiedono un pagamento obbligatorio per ogni lettura", "Perché sono scritti interamente da intelligenze artificiali senza supervisione"],
    "rispostaCorretta": "Perché il loro contenuto è creato e aggiornato da una vasta comunità di volontari",
    "area": "Area 2"
  },
  {
    "domanda": "Quale tipo di firma elettronica ha il massimo valore legale e garantisce l'integrità del documento?",
    "opzioni": ["Firma elettronica semplice", "Firma digitale", "Firma su carta scannerizzata", "Firma scritta con il mouse"],
    "rispostaCorretta": "Firma digitale",
    "area": "Area 2"
  },
  {
    "domanda": "Quale documento normativo definisce i diritti di cittadinanza digitale in Italia?",
    "opzioni": ["Il Codice Civile del 1942", "Il Codice dell'Amministrazione Digitale (CAD)", "Il manuale d'uso di Windows", "La costituzione americana"],
    "rispostaCorretta": "Il Codice dell'Amministrazione Digitale (CAD)",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa si intende per 'ricetta digitale' (ePrescription)?",
    "opzioni": ["Un consiglio medico trovato su un blog", "La versione elettronica della ricetta medica cartacea, identificata da un codice (NRE)", "Una fattura per l'acquisto di farmaci online", "Un'applicazione per cucinare piatti sani"],
    "rispostaCorretta": "La versione elettronica della ricetta medica cartacea, identificata da un codice (NRE)",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa contiene il Fascicolo Sanitario Elettronico (FSE)?",
    "opzioni": ["Solo l'elenco dei medici di base", "I dati e i documenti digitali relativi alla storia sanitaria di un cittadino", "Le fatture dell'energia elettrica", "L'elenco dei contatti telefonici della farmacia"],
    "rispostaCorretta": "I dati e i documenti digitali relativi alla storia sanitaria di un cittadino",
    "area": "Area 2"
  },
  {
    "domanda": "Quale diritto hanno i cittadini europei rispetto alle decisioni prese da sistemi di IA?",
    "opzioni": ["Nessun diritto specifico", "Il diritto di non essere soggetti a decisioni basate esclusivamente su processi automatizzati", "Il diritto di ricevere un computer nuovo ogni anno", "Il diritto di non pagare i servizi online"],
    "rispostaCorretta": "Il diritto di non essere soggetti a decisioni basate esclusivamente su processi automatizzati",
    "area": "Area 2"
  },
  {
    "domanda": "Secondo il syllabus, cosa offrono le piattaforme online per la sostenibilità ai cittadini?",
    "opzioni": ["Sconti per l'acquisto di prodotti di plastica", "L'opportunità di partecipare ad azioni per l'innovazione a livello locale o internazionale", "L'obbligo di spegnere il computer per 10 ore al giorno", "La possibilità di stampare documenti cartacei gratuitamente"],
    "rispostaCorretta": "L'opportunità di partecipare ad azioni per l'innovazione a livello locale o internazionale",
    "area": "Area 2"
  },
  {
    "domanda": "In quale modo l'IA può favorire la cittadinanza digitale secondo il manuale AICA?",
    "opzioni": ["Sostituendo completamente il giudizio umano nelle leggi", "Supportando i cittadini in diversi aspetti della vita quotidiana, se ben progettata", "Impedendo l'accesso ai siti web non governativi", "Aumentando il costo della connessione internet"],
    "rispostaCorretta": "Supportando i cittadini in diversi aspetti della vita quotidiana, se ben progettata",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa si trova solitamente nel 'menu principale' di un portale di e-government?",
    "opzioni": ["L'elenco dei siti di giochi online", "I collegamenti alle diverse sezioni e ai servizi offerti dall'ente pubblico", "Solo le foto dei dipendenti dell'ufficio", "Un link per scaricare film protetti da copyright"],
    "rispostaCorretta": "I collegamenti alle diverse sezioni e ai servizi offerti dall'ente pubblico",
    "area": "Area 2"
  },
  {
    "domanda": "Per visualizzare i propri dati in un portale di e-government, quale operazione è necessaria?",
    "opzioni": ["Inviare una lettera anonima", "Accedere all'area riservata tramite un sistema di autenticazione (es. SPID o CIE)", "Cercare il proprio nome su un motore di ricerca pubblico", "Scrivere un post su un social network"],
    "rispostaCorretta": "Accedere all'area riservata tramite un sistema di autenticazione (es. SPID o CIE)",
    "area": "Area 2"
  },
  {
    "domanda": "Dove può un cittadino consultare le proprie ricette mediche digitali?",
    "opzioni": ["Sul proprio profilo Instagram", "Nel Fascicolo Sanitario Elettronico (FSE) o portale sanitario regionale", "Sul sito della propria banca", "Esclusivamente sul sito del produttore del farmaco"],
    "rispostaCorretta": "Nel Fascicolo Sanitario Elettronico (FSE) o portale sanitario regionale",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa permette di fare il servizio ANPR (Anagrafe Nazionale della Popolazione Residente)?",
    "opzioni": ["Votare per i concorsi canori online", "Richiedere e scaricare certificati anagrafici per sé o per i componenti della propria famiglia", "Modificare la data di nascita di altri cittadini", "Prenotare voli aerei a prezzi scontati"],
    "rispostaCorretta": "Richiedere e scaricare certificati anagrafici per sé o per i componenti della propria famiglia",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è il metodo standard in Italia per pagare online i servizi della Pubblica Amministrazione?",
    "opzioni": ["Inviare un assegno via mail", "Utilizzare la piattaforma PagoPA", "Barattare beni digitali", "Non è possibile pagare online i servizi pubblici"],
    "rispostaCorretta": "Utilizzare la piattaforma PagoPA",
    "area": "Area 2"
  },
  {
    "domanda": "Secondo il manuale, qual è un vantaggio della didattica a distanza (DaD)?",
    "opzioni": ["Elimina totalmente la necessità di studiare", "Consente la continuità dell'apprendimento anche quando non è possibile la presenza fisica", "Permette di usare i videogiochi durante le lezioni", "Riduce la durata dell'anno scolastico"],
    "rispostaCorretta": "Consente la continuità dell'apprendimento anche quando non è possibile la presenza fisica",
    "area": "Area 2"
  },
  {
    "domanda": "Quale tra i seguenti è un ambiente digitale di collaborazione citato nel syllabus?",
    "opzioni": ["Microsoft Notepad", "Google Workspace", "Il cestino di Windows", "La calcolatrice di sistema"],
    "rispostaCorretta": "Google Workspace",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è uno svantaggio comune del lavoro a distanza (smart working)?",
    "opzioni": ["Il risparmio sui tempi di spostamento", "Il rischio di isolamento sociale e la difficoltà di separazione tra vita privata e lavorativa", "L'obbligo di stare in ufficio 8 ore al giorno", "L'impossibilità di usare il computer"],
    "rispostaCorretta": "Il rischio di isolamento sociale e la difficoltà di separazione tra vita privata e lavorativa",
    "area": "Area 2"
  },
  {
    "domanda": "A cosa serve lo strumento online 'Doodle'?",
    "opzioni": ["A disegnare loghi aziendali", "A pianificare e concordare date e orari per riunioni tra più persone", "A proteggere il computer dai malware", "A creare fogli di calcolo complessi"],
    "rispostaCorretta": "A pianificare e concordare date e orari per riunioni tra più persone",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa permette di fare la funzione 'commento' in un documento cloud condiviso?",
    "opzioni": ["Cancellare il lavoro degli altri senza lasciare traccia", "Aggiungere note, osservazioni o suggerimenti senza modificare il testo principale", "Modificare la password di tutti i collaboratori", "Nascondere il file ai motori di ricerca"],
    "rispostaCorretta": "Aggiungere note, osservazioni o suggerimenti senza modificare il testo principale",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è la funzione di piattaforme come Miro o Padlet?",
    "opzioni": ["Sostituire il sistema operativo", "Fungere da lavagne digitali per collaborare visivamente e scambiare idee in tempo reale", "Ripulire il disco rigido dai file inutili", "Gestire solo la posta elettronica"],
    "rispostaCorretta": "Fungere da lavagne digitali per collaborare visivamente e scambiare idee in tempo reale",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa si intende per 'permesso di modifica' in un file condiviso?",
    "opzioni": ["L'utente può solo guardare il file", "L'utente ha l'autorizzazione per apportare cambiamenti al contenuto del file", "L'utente può solo stampare il file", "L'utente deve pagare una licenza per ogni click"],
    "rispostaCorretta": "L'utente ha l'autorizzazione per apportare cambiamenti al contenuto del file",
    "area": "Area 2"
  },
  {
    "domanda": "A cosa serve la 'cronologia delle versioni' in strumenti come Google Docs o Word Online?",
    "opzioni": ["A vedere quante persone hanno comprato il software", "A visualizzare le modifiche apportate nel tempo e ripristinare versioni precedenti se necessario", "A cancellare definitivamente tutti i backup", "A cambiare la lingua del sistema operativo"],
    "rispostaCorretta": "A visualizzare le modifiche apportate nel tempo e ripristinare versioni precedenti se necessario",
    "area": "Area 2"
  },
  {
    "domanda": "Quale strumento è ideale per raccogliere opinioni o dati da un gruppo numeroso di persone?",
    "opzioni": ["Un foglio di testo semplice", "Un servizio per la creazione di sondaggi online (es. Google Moduli)", "Una telefonata singola a ogni partecipante", "Un'immagine pubblicata su un blog"],
    "rispostaCorretta": "Un servizio per la creazione di sondaggi online (es. Google Moduli)",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è lo scopo principale di software di gestione progetti come Trello o Asana?",
    "opzioni": ["Ascoltare musica in streaming", "Organizzare, assegnare e monitorare i compiti all'interno di un team", "Ritoccare fotografie digitali", "Navigare in modo anonimo sul web"],
    "rispostaCorretta": "Organizzare, assegnare e monitorare i compiti all'interno di un team",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa permette la creazione condivisa di mappe mentali online?",
    "opzioni": ["La navigazione stradale GPS", "L'organizzazione visiva e collaborativa di idee e concetti", "La stampa di poster giganti", "Il controllo remoto di altri computer"],
    "rispostaCorretta": "L'organizzazione visiva e collaborativa di idee e concetti",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa si intende per 'Netiquette' negli ambienti digitali?",
    "opzioni": ["Un software per la protezione della rete", "L'insieme delle regole di buona educazione e comportamento da rispettare online", "Un tipo di abbonamento internet ultra veloce", "La procedura per resettare la password del router"],
    "rispostaCorretta": "L'insieme delle regole di buona educazione e comportamento da rispettare online",
    "area": "Area 2"
  },
  {
    "domanda": "In una comunicazione scritta online, cosa suggerisce l'uso del TUTTO MAIUSCOLO?",
    "opzioni": ["Che il mittente ha la tastiera guasta", "Che si sta urlando o parlando con aggressività", "Che il messaggio è molto importante e va stampato", "Che il testo è stato scritto da un'intelligenza artificiale"],
    "rispostaCorretta": "Che si sta urlando o parlando con aggressività",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è un comportamento corretto da tenere in una chat di gruppo secondo la netiquette?",
    "opzioni": ["Inviare messaggi a qualsiasi ora della notte", "Evitare di andare fuori tema (off-topic) rispetto allo scopo del gruppo", "Inserire pubblicità dei propri prodotti ogni ora", "Insultare chi esprime un'opinione diversa"],
    "rispostaCorretta": "Evitare di andare fuori tema (off-topic) rispetto allo scopo del gruppo",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa si intende per 'flaming' nelle comunità online?",
    "opzioni": ["L'invio di messaggi d'amore e amicizia", "L'invio di messaggi ostili, insulti o provocazioni per scatenare litigi", "Il surriscaldamento del processore del computer", "La condivisione di foto di paesaggi naturali"],
    "rispostaCorretta": "L'invio di messaggi ostili, insulti o provocazioni per scatenare litigi",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è il modo corretto di gestire i conflitti in una comunicazione digitale?",
    "opzioni": ["Rispondere immediatamente con rabbia", "Mantenere la calma e cercare un chiarimento costruttivo o ignorare le provocazioni", "Segnalare l'utente alla polizia anche per piccoli disaccordi", "Cancellare il proprio account per sempre"],
    "rispostaCorretta": "Mantenere la calma e cercare un chiarimento costruttivo o ignorare le provocazioni",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa si intende per 'Identità Digitale'?",
    "opzioni": ["La marca del proprio computer e smartphone", "L'insieme delle informazioni e dei dati che rappresentano una persona online", "Un codice segreto fornito solo ai programmatori", "L'immagine del profilo scelta su un social network"],
    "rispostaCorretta": "L'insieme delle informazioni e dei dati che rappresentano una persona online",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è un esempio di sistema di identità digitale protetta in Italia?",
    "opzioni": ["Il numero di cellulare", "Lo SPID (Sistema Pubblico di Identità Digitale)", "L'indirizzo di casa", "Il nickname usato nei videogiochi"],
    "rispostaCorretta": "Lo SPID (Sistema Pubblico di Identità Digitale)",
    "area": "Area 2"
  },
  {
    "domanda": "Perché è importante proteggere la propria reputazione online?",
    "opzioni": ["Perché ciò che pubblichiamo può influenzare le opportunità lavorative e personali future", "Perché altrimenti il computer rallenta", "Perché è obbligatorio per legge non sbagliare mai", "Perché le foto online occupano troppo spazio"],
    "rispostaCorretta": "Perché ciò che pubblichiamo può influenzare le opportunità lavorative e personali future",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa indica il termine 'Digital Footprint' (impronta digitale)?",
    "opzioni": ["La scansione del dito per sbloccare il telefono", "Le tracce che lasciamo online attraverso le nostre attività e pubblicazioni", "La polvere che si accumula sulla tastiera", "Il numero di dispositivi collegati allo stesso Wi-Fi"],
    "rispostaCorretta": "Le tracce che lasciamo online attraverso le nostre attività e pubblicazioni",
    "area": "Area 2"
  },
  {
    "domanda": "Come si possono limitare i dati personali raccolti dalle applicazioni?",
    "opzioni": ["Spegnendo il monitor ogni 5 minuti", "Controllando e modificando le autorizzazioni nelle impostazioni sulla privacy del dispositivo", "Cancellando tutti i contatti in rubrica", "Usando solo applicazioni a pagamento"],
    "rispostaCorretta": "Controllando e modificando le autorizzazioni nelle impostazioni sulla privacy del dispositivo",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è una buona pratica per gestire le proprie password?",
    "opzioni": ["Usare la stessa password per tutti i siti", "Utilizzare password forti, uniche per ogni servizio e cambiarle regolarmente", "Scrivere le password su un post-it attaccato al monitor", "Condividere le password con gli amici per sicurezza"],
    "rispostaCorretta": "Utilizzare password forti, uniche per ogni servizio e cambiarle regolarmente",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa permette di fare l'autenticazione a due fattori (2FA)?",
    "opzioni": ["Accedere a due siti contemporaneamente", "Aggiungere un ulteriore livello di sicurezza richiedendo un secondo codice oltre alla password", "Usare due tastiere diverse per scrivere", "Visualizzare il doppio delle informazioni"],
    "rispostaCorretta": "Aggiungere un ulteriore livello di sicurezza richiedendo un secondo codice oltre alla password",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa dovrebbe fare un utente se non intende più utilizzare un servizio online?",
    "opzioni": ["Lasciare l'account così com'è per sempre", "Disattivare o eliminare l'account per ridurre l'esposizione dei propri dati", "Cambiare solo la foto profilo", "Inviare un messaggio di addio a tutti"],
    "rispostaCorretta": "Disattivare o eliminare l'account per ridurre l'esposizione dei propri dati",
    "area": "Area 2"
  },
  {
    "domanda": "In merito alla privacy, cosa differenzia motori di ricerca come DuckDuckGo da quelli tradizionali?",
    "opzioni": ["Sono molto più veloci", "Non tracciano l'attività online dell'utente per fini pubblicitari", "Sono a pagamento", "Funzionano solo su computer fissi"],
    "rispostaCorretta": "Non tracciano l'attività online dell'utente per fini pubblicitari",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è un rischio legato alla gestione di più identità digitali (es. profilo privato e professionale)?",
    "opzioni": ["Il rischio di confondere i contesti e pubblicare contenuti inappropriati nel profilo sbagliato", "Il rischio di dover pagare due volte la connessione internet", "Il rischio di rompere lo schermo del PC", "Non esiste alcun rischio"],
    "rispostaCorretta": "Il rischio di confondere i contesti e pubblicare contenuti inappropriati nel profilo sbagliato",
    "area": "Area 2"
  },
 {
    "domanda": "In un contesto lavorativo, quale strategia è preferibile per gestire una comunicazione complessa che richiede una spiegazione dettagliata e non urgente?",
    "opzioni": ["Inviare una serie di brevi messaggi su WhatsApp", "Utilizzare una e-mail ben strutturata (comunicazione asincrona)", "Chiamare immediatamente il collega senza preavviso", "Scrivere un commento pubblico su un social network"],
    "rispostaCorretta": "Utilizzare una e-mail ben strutturata (comunicazione asincrona)",
    "area": "Area 2"
  },
  {
    "domanda": "Quale tra queste è una funzione avanzata della Posta Elettronica Certificata (PEC) rispetto alla e-mail tradizionale?",
    "opzioni": ["La possibilità di inviare allegati più grandi di 100GB", "L'attribuzione di valore legale alla trasmissione, equiparata a una raccomandata con ricevuta di ritorno", "La traduzione automatica dei messaggi in tempo reale", "L'invio di messaggi che si autodistruggono dopo la lettura"],
    "rispostaCorretta": "L'attribuzione di valore legale alla trasmissione, equiparata a una raccomandata con ricevuta di ritorno",
    "area": "Area 2"
  },
  {
    "domanda": "Se un sistema di IA fornisce una risposta che appare corretta ma contiene dati inventati (allucinazione), quale azione intermedia dovrebbe compiere l'utente?",
    "opzioni": ["Accettare la risposta come vera poiché generata da una macchina", "Verificare le informazioni consultando fonti ufficiali e segnalare l'errore al sistema", "Spegnere il computer e non usare più l'IA", "Condividere immediatamente la risposta sui social"],
    "rispostaCorretta": "Verificare le informazioni consultando fonti ufficiali e segnalare l'errore al sistema",
    "area": "Area 2"
  },
  {
    "domanda": "In una piattaforma di Cloud Storage, cosa comporta attivare la 'Sincronizzazione Selettiva'?",
    "opzioni": ["Scegliere quali cartelle scaricare localmente sul PC per risparmiare spazio su disco", "Permettere solo a determinati utenti di vedere i file", "Inviare i file solo quando il computer è collegato via cavo", "Criptare i file con una doppia password"],
    "rispostaCorretta": "Scegliere quali cartelle scaricare localmente sul PC per risparmiare spazio su disco",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è il vantaggio principale dell'utilizzo di 'Etichette' o 'Filtri' avanzati nella gestione della posta elettronica?",
    "opzioni": ["Aumentare la velocità di invio dei messaggi", "Automatizzare l'organizzazione dei messaggi in arrivo e facilitarne il reperimento", "Cancellare automaticamente tutte le e-mail più vecchie di un giorno", "Impedire agli hacker di leggere i messaggi"],
    "rispostaCorretta": "Automatizzare l'organizzazione dei messaggi in arrivo e facilitarne il reperimento",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa si intende per 'interoperabilità' tra diverse piattaforme di pubblica amministrazione?",
    "opzioni": ["L'obbligo di usare lo stesso computer per ogni ufficio", "La capacità dei sistemi informatici di scambiare dati e informazioni in modo efficace", "Il divieto di accedere ai siti governativi da smartphone", "La possibilità di usare una sola password per tutti i social"],
    "rispostaCorretta": "La capacità dei sistemi informatici di scambiare dati e informazioni in modo efficace",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è la corretta procedura per gestire i permessi di un documento condiviso che deve essere revisionato da un supervisore senza che questi modifichi il testo originale?",
    "opzioni": ["Fornire il permesso di 'Modifica'", "Fornire il permesso di 'Commentatore'", "Inviare uno screenshot del documento", "Fornire solo l'accesso tramite password"],
    "rispostaCorretta": "Fornire il permesso di 'Commentatore'",
    "area": "Area 2"
  },
  {
    "domanda": "Perché è importante monitorare regolarmente la propria 'ombra digitale' (digital shadow)?",
    "opzioni": ["Per verificare che lo schermo non sia troppo luminoso", "Per essere consapevoli dei dati che gli altri o le macchine pubblicano su di noi senza il nostro controllo diretto", "Per aumentare il numero di follower sui social", "Per pulire fisicamente i sensori della webcam"],
    "rispostaCorretta": "Per essere consapevoli dei dati che gli altri o le macchine pubblicano su di noi senza il nostro controllo diretto",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa si intende per 'Data Portability' (Portabilità dei dati) secondo il GDPR?",
    "opzioni": ["Il diritto di portare il proprio computer all'estero", "Il diritto di ricevere i propri dati in un formato strutturato per trasferirli a un altro fornitore", "L'obbligo di salvare i dati solo su chiavette USB", "La possibilità di stampare tutti i propri post di Facebook"],
    "rispostaCorretta": "Il diritto di ricevere i propri dati in un formato strutturato per trasferirli a un altro fornitore",
    "area": "Area 2"
  },
  {
    "domanda": "In un sistema di videochiamata professionale, a cosa serve la funzione 'Stanza di attesa' (Waiting Room)?",
    "opzioni": ["A far riposare il computer tra una chiamata e l'altra", "A permettere all'organizzatore di controllare e ammettere singolarmente i partecipanti per sicurezza", "A visualizzare video pubblicitari prima dell'inizio", "A testare la velocità della connessione dei partecipanti"],
    "rispostaCorretta": "A permettere all'organizzatore di controllare e ammettere singolarmente i partecipanti per sicurezza",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è l'impatto etico principale degli algoritmi di 'Filter Bubble' sui social media?",
    "opzioni": ["Migliorano la qualità delle immagini pubblicate", "Isolano l'utente in un ambiente informativo che conferma solo le sue opinioni preesistenti", "Rendono il computer più protetto dai virus", "Aumentano la durata della batteria dello smartphone"],
    "rispostaCorretta": "Isolano l'utente in un ambiente informativo che conferma solo le sue opinioni preesistenti",
    "area": "Area 2"
  },
  {
    "domanda": "In ambito di collaborazione online, cos'è un sistema di 'Version Control' (controllo di versione)?",
    "opzioni": ["Un programma per aggiornare Windows", "Un sistema che registra ogni modifica a un file permettendo di risalire a chi ha fatto cosa e quando", "Un software che impedisce la modifica dei file", "Un metodo per rinominare i file aggiungendo la data"],
    "rispostaCorretta": "Un sistema che registra ogni modifica a un file permettendo di risalire a chi ha fatto cosa e quando",
    "area": "Area 2"
  },
    {
    "domanda": "Quale segnale può aiutare un utente a identificare che sta interagendo con un chatbot (IA) invece che con un essere umano?",
    "opzioni": ["La presenza di errori di battitura casuali", "L'immediatezza della risposta h24 e l'uso di un linguaggio estremamente standardizzato", "La richiesta di inviare un fax per conferma", "L'incapacità del sistema di leggere file PDF"],
    "rispostaCorretta": "L'immediatezza della risposta h24 e l'uso di un linguaggio estremamente standardizzato",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è lo scopo principale del fornire un feedback (pollice su/giù) a una risposta generata da un'IA?",
    "opzioni": ["Cancellare la risposta dal database mondiale", "Aiutare il sistema ad apprendere e migliorare la pertinenza delle risposte future", "Ottenere un rimborso sul canone internet", "Aumentare la velocità di download del browser"],
    "rispostaCorretta": "Aiutare il sistema ad apprendere e migliorare la pertinenza delle risposte future",
    "area": "Area 2"
  },
  {
    "domanda": "Secondo il syllabus, quale rischio etico comporta l'uso di dati pubblici per l'addestramento dell'IA?",
    "opzioni": ["Il rischio che il computer si spenga improvvisamente", "Il rischio di violazione della privacy e l'uso di informazioni personali senza un consenso esplicito per tale scopo", "L'obbligo di pagare una tassa per ogni dato condiviso", "Nessun rischio, i dati pubblici sono per definizione privi di copyright"],
    "rispostaCorretta": "Il rischio di violazione della privacy e l'uso di informazioni personali senza un consenso esplicito per tale scopo",
    "area": "Area 2"
  },
  {
    "domanda": "In Italia, che valore ha un documento sottoscritto con Firma Digitale rispetto a uno con firma autografa?",
    "opzioni": ["Ha un valore puramente informativo e non legale", "Ha lo stesso valore legale della firma autografa e garantisce autenticità e integrità", "Vale solo se accompagnato da una marca da bollo cartacea", "Vale solo se il destinatario è un ente privato"],
    "rispostaCorretta": "Ha lo stesso valore legale della firma autografa e garantisce autenticità e integrità",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa indica il termine 'ricetta dematerializzata' nel sistema sanitario italiano?",
    "opzioni": ["Una ricetta medica scritta a mano e poi distrutta", "La versione elettronica della ricetta cartacea, associata a un Numero di Ricetta Elettronica (NRE)", "Un consiglio dietetico inviato via mail", "Un documento che non richiede l'uso della tessera sanitaria"],
    "rispostaCorretta": "La versione elettronica della ricetta cartacea, associata a un Numero di Ricetta Elettronica (NRE)",
    "area": "Area 2"
  },
  {
    "domanda": "Quale funzione permette a un cittadino di visualizzare referti, vaccini e verbali di pronto soccorso in un unico ambiente digitale?",
    "opzioni": ["Il sito dell'INPS", "Il Fascicolo Sanitario Elettronico (FSE)", "Il portale dell'Agenzia delle Entrate", "La propria pagina profilo di Facebook"],
    "rispostaCorretta": "Il Fascicolo Sanitario Elettronico (FSE)",
    "area": "Area 2"
  },
  {
    "domanda": "Cos'è il crowdsourcing nel contesto della cittadinanza digitale?",
    "opzioni": ["Un attacco informatico basato sull'invio di troppi dati", "La raccolta di idee, servizi o contenuti sollecitando contributi da un grande gruppo di persone online", "Un metodo per vendere prodotti in stock", "Il download illegale di software"],
    "rispostaCorretta": "La raccolta di idee, servizi o contenuti sollecitando contributi da un grande gruppo di persone online",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa sono strumenti come Mural o Miro utilizzati durante una collaborazione a distanza?",
    "opzioni": ["Software per il montaggio video", "Lavagne virtuali condivise per facilitare il brainstorming e la progettazione visiva", "Sistemi di protezione contro lo spam", "Piattaforme per l'invio di newsletter"],
    "rispostaCorretta": "Lavagne virtuali condivise per facilitare il brainstorming e la progettazione visiva",
    "area": "Area 2"
  },
  {
    "domanda": "A cosa serve l'integrazione di un sistema di sondaggi (es. Google Moduli) in un progetto di gruppo?",
    "opzioni": ["A contare i click sul sito aziendale", "A raccogliere pareri, dati o votazioni dai membri o dal pubblico in modo strutturato", "A bloccare l'accesso ai documenti non autorizzati", "A misurare la temperatura della stanza"],
    "rispostaCorretta": "A raccogliere pareri, dati o votazioni dai membri o dal pubblico in modo strutturato",
    "area": "Area 2"
  },
  {
    "domanda": "In termini di accessibilità digitale, cosa si intende per 'inclusione sensoriale' nelle comunicazioni?",
    "opzioni": ["L'uso di colori molto brillanti per attirare l'attenzione", "Progettare contenuti fruibili anche da persone con disabilità visive o uditive (es. sottotitoli o lettori di schermo)", "L'obbligo di usare solo messaggi vocali", "L'acquisto di monitor ad altissima risoluzione"],
    "rispostaCorretta": "Progettare contenuti fruibili anche da persone con disabilità visive o uditive (es. sottotitoli o lettori di schermo)",
    "area": "Area 2"
  },
  {
    "domanda": "Qual è il significato culturale dell'uso di una GIF o di un'emoji in un contesto lavorativo?",
    "opzioni": ["È sempre un segnale di mancanza di professionalità", "Aggiunge una componente non verbale che può chiarire il tono del messaggio, ma va usata con consapevolezza del contesto", "Serve a nascondere errori grammaticali", "Rallenta la ricezione del messaggio da parte del server"],
    "rispostaCorretta": "Aggiunge una componente non verbale che può chiarire il tono del messaggio, ma va usata con consapevolezza del contesto",
    "area": "Area 2"
  },
  {
    "domanda": "Cosa prevede il 'Diritto all'oblio' nel contesto dell'identità digitale?",
    "opzioni": ["Il diritto di dimenticare la propria password", "Il diritto di richiedere la rimozione di informazioni personali che non sono più pertinenti o sono obsolete dai risultati di ricerca", "L'obbligo di cancellare la cronologia ogni giorno", "Il diritto di non essere contattati dalla Pubblica Amministrazione"],
    "rispostaCorretta": "Il diritto di richiedere la rimozione di informazioni personali che non sono più pertinenti o sono obsolete dai risultati di ricerca",
    "area": "Area 2"
  },
  {
    "domanda": "Quale precauzione è fondamentale adottare prima di effettuare un pagamento su un sito di e-commerce?",
    "opzioni": ["Spegnere il Wi-Fi e usare il Bluetooth", "Verificare che l'indirizzo inizi con 'https' e che ci sia l'icona del lucchetto, oltre a usare metodi di pagamento sicuri", "Inviare una foto della propria carta d'identità al venditore via chat", "Usare solo la tastiera virtuale di Windows"],
    "rispostaCorretta": "Verificare che l'indirizzo inizi con 'https' e che ci sia l'icona del lucchetto, oltre a usare metodi di pagamento sicuri",
    "area": "Area 2"
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
