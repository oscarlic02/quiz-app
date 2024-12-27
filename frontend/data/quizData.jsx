// data/quizData.js
export const quizData = {
    title: "Qual è il tuo codice operativo?",
    sections: [
      {
        id: 1,
        title: "Reazione personale",
        trait1: "E",
        trait2: "C",
        description: "E (Energico) → Tende ad agire subito, con fiducia.\nC (Calmo) → Si concentra sull'ascolto e sulla comprensione prima di agire."
      },
      {
        id: 2,
        title: "Focus operativo",
        trait1: "S",
        trait2: "A",
        description: "S (Strategico) → Ama pianificare e prevedere.\nA (Adattabile) → Preferisce improvvisare e reagire sul momento."
      },
      {
        id: 3,
        title: "Approccio al problema",
        trait1: "P",
        trait2: "I",
        description: "P (Pragmatico) → Orientato al risultato e alla praticità.\nI (Ispiratore) → Usa creatività e comunicazione per risolvere problemi."
      },
      {
        id: 4,
        title: "Relazione con gli altri",
        trait1: "M",
        trait2: "D",
        description: "M (Mediatore) → Cerca di creare armonia e collaborazioni.\nD (Decisore) → Prende rapidamente decisioni per il bene del gruppo."
      }
    ],
    questions: [
      // Section 1: Reazione personale
      {
        id: 1,
        section: 1,
        text: "Sei davanti a un imprevisto. Cosa fai?",
        options: [
          {
            id: "A",
            text: "Mi attivo immediatamente per risolvere il problema.",
            trait: "E"
          },
          {
            id: "B",
            text: "Rifletto e aspetto per capire meglio la situazione prima di agire.",
            trait: "C"
          }
        ]
      },
      {
        id: 2,
        section: 1,
        text: "Qual è la tua tendenza in situazioni di stress?",
        options: [
          {
            id: "A",
            text: "Reagire rapidamente mantenendo il controllo.",
            trait: "E"
          },
          {
            id: "B",
            text: "Recuperare la calma e aspettare per prendere decisioni con lucidità.",
            trait: "C"
          }
        ]
      },
      {
        id: 3,
        section: 1,
        text: "Come ti senti in contesti dinamici e caotici?",
        options: [
          {
            id: "A",
            text: "Mi trovo a mio agio, mi caricano di energia.",
            trait: "E"
          },
          {
            id: "B",
            text: "Mi trovo a disagio e vado in confusione.",
            trait: "C"
          }
        ]
      },
      // Section 2: Focus operativo
      {
        id: 4,
        section: 2,
        text: "Come affronti un progetto con molte incognite?",
        options: [
          {
            id: "A",
            text: "Creo preventivamente un piano dettagliato per gestire ogni eventualità.",
            trait: "S"
          },
          {
            id: "B",
            text: "Mi lascio guidare dalle circostanze e sono sempre pronto ad improvvisare se necessario.",
            trait: "A"
          }
        ]
      },
      {
        id: 5,
        section: 2,
        text: "Qual è il tuo approccio al cambiamento?",
        options: [
          {
            id: "A",
            text: "Mi preoccupa e quindi preparo una pianificazione attenta preventiva.",
            trait: "S"
          },
          {
            id: "B",
            text: "Mi carica di energia e mi adatto velocemente alle nuove situazioni.",
            trait: "A"
          }
        ]
      },
      {
        id: 6,
        section: 2,
        text: "Cosa ritieni sia più importante in un progetto?",
        options: [
          {
            id: "A",
            text: "Avere sin da subito una strategia chiara e ben definita.",
            trait: "S"
          },
          {
            id: "B",
            text: "Essere flessibile e pronto a modificare i piani in ogni momento.",
            trait: "A"
          }
        ]
      },
      // Section 3: Approccio al problema
      {
        id: 7,
        section: 3,
        text: "Come risolvi un problema complesso?",
        options: [
          {
            id: "A",
            text: "Trovo una soluzione pratica e diretta.",
            trait: "P"
          },
          {
            id: "B",
            text: "Uso la creatività per cercare un'idea fuori dagli schemi.",
            trait: "I"
          }
        ]
      },
      {
        id: 8,
        section: 3,
        text: "Qual è il tuo ruolo naturale in un gruppo?",
        options: [
          {
            id: "A",
            text: "Portare risultati concreti e gestire le risorse.",
            trait: "P"
          },
          {
            id: "B",
            text: "Motivare e ispirare gli altri con le tue idee.",
            trait: "I"
          }
        ]
      },
      {
        id: 9,
        section: 3,
        text: "Cosa preferisci in una situazione difficile?",
        options: [
          {
            id: "A",
            text: "Agire con concretezza e orientarmi al risultato per raggiungerlo nel minor tempo possibile.",
            trait: "P"
          },
          {
            id: "B",
            text: "Cercare nuove prospettive per risolvere il problema anche se implicano una durata maggiore.",
            trait: "I"
          }
        ]
      },
      // Section 4: Relazione con gli altri
      {
        id: 10,
        section: 4,
        text: "Come gestisci un conflitto in un gruppo?",
        options: [
          {
            id: "A",
            text: "Mediare per trovare un compromesso.",
            trait: "M"
          },
          {
            id: "B",
            text: "Prendere una decisione rapida che vada bene per tutti e guidare il gruppo.",
            trait: "D"
          }
        ]
      },
      {
        id: 11,
        section: 4,
        text: "Qual è il tuo stile di leadership?",
        options: [
          {
            id: "A",
            text: "Ascoltare e garantire che tutti si sentano coinvolti.",
            trait: "M"
          },
          {
            id: "B",
            text: "Essere deciso e fornire una direzione chiara verso la risoluzione del problema.",
            trait: "D"
          }
        ]
      },
      {
        id: 12,
        section: 4,
        text: "Cosa fai quando qualcuno ha bisogno di aiuto?",
        options: [
          {
            id: "A",
            text: "Mi impegno a supportare e comprendere la persona per spingerla ad uscirne.",
            trait: "M"
          },
          {
            id: "B",
            text: "Indico una soluzione concreta e agisco praticamente per aiutare.",
            trait: "D"
          }
        ]
      }
    ],
    results: {
      profiles: [{
    type: "Operatore d'Emergenza",
    requiredTraits: ["C", "S", "D"],
    description: "Caratteristiche indispensabili strategia e decisione",
    variants: [
      {
        code: "CSDP",
        title: "Il Maestro dell'Ordine",
        subtitle: "Governare il caos è la tua arte",
        description: "Sei il punto di riferimento in situazioni critiche come catastrofi naturali. La tua capacità di pianificare e prendere decisioni precise ti rende indispensabile nella logistica e nel coordinamento."
      },
      {
        code: "CSDI",
        title: "Il Generale della Logistica",
        subtitle: "Nella tempesta, organizzi la calma",
        description: "Porti una calma contagiosa nei momenti di caos. Sei in grado di ispirare il tuo team a dare il massimo, anche in condizioni difficili."
      },
      {
        code: "ESDI",
        title: "L'Aggiustatutto",
        subtitle: "La forza del bene in azione",
        description: "Con il tuo carisma e la tua energia accendi il fuoco nell'animo di chi ti aiuta. Hai una forza inesauribile se si tratta di fare del bene."
      }
    ]
  },
  {
    type: "Operatore di Sensibilizzazione e Prevenzione",
    requiredTraits: ["E", "A"],
    description: "Energia ed Adattabilità",
    variants: [
      {
        code: "EADI",
        title: "Designer di attività",
        subtitle: "Creatore di messaggi universali",
        description: "Sei il creatore di messaggi universali. Sai ispirare il pubblico con la tua energia e orientarlo verso soluzioni pratiche. Grazie alle tue doti creative e alla tua spiccata capacità nel prendere le decisioni sei perfetto per progettare le attività."
      },
      {
        code: "EAMP",
        title: "Il Guardiano del Bene",
        subtitle: "Proteggi la comunità con il potere della prevenzione",
        description: "Sei lo stratega della comunicazione. Con energia e pragmatismo, sai pianificare campagne efficaci e mediare per raggiungere il consenso. Perfetto per ruoli di sensibilizzazione nelle comunità."
      },
      {
        code: "EAMI",
        title: "Il Portatore di Speranza",
        subtitle: "Ogni parola che esce dalla tua bocca è un invito all'azione positiva",
        description: "Hai il dono di trasformare un messaggio in una missione collettiva. Sai ispirare il pubblico con la tua energia e orientarlo verso soluzioni pratiche. Grazie alle tue doti da mediatore riesci a portare chiunque sulla giusta strada rendendolo consapevole."
      }
    ]
  },
  {
    type: "Comunicatore e Ufficio Stampa",
    requiredTraits: ["E", "S", "M"],
    description: "Strategia e Mediazione",
    variants: [
      {
        code: "ESMI",
        title: "Il Pifferaio Magico",
        subtitle: "Le tue parole incantano chiunque ti ascolti",
        description: "Hai una personalità magnetica che sa bilanciare strategia e ispirazione. Sei perfetto per vendere idee e valori, usando la tua energia per unire persone e diffondere messaggi potenti."
      },
      {
        code: "ESMP",
        title: "Il Profeta dei Media",
        subtitle: "Sai prevedere la prossima tendenza",
        description: "La tua forza risiede nella capacità di comunicare con precisione e pragmatismo. Sai mediare tra visioni diverse e tradurre ideali in piani d'azione."
      }
    ]
  },
  {
    type: "Formatore di Operatori",
    requiredTraits: ["C", "I"],
    description: "Calmo e Ispiratore",
    variants: [
      {
        code: "CAMI",
        title: "Il Maestro di Vita",
        subtitle: "Non solo insegnante, ma anche guida",
        description: "Hai una straordinaria capacità di insegnare e accogliere nuove prospettive. La tua calma e la tua strategia rendono l'apprendimento un'esperienza armoniosa per i tuoi studenti. Grazie alla tua grande adattabilità sei adatto ad insegnare in ogni contesto coinvolgendo tutti."
      },
      {
        code: "CSMI",
        title: "Il Creatore di Supereroi",
        subtitle: "Forgiatore di talenti",
        description: "Sai trasferire conoscenze con empatia e ispirare i nuovi operatori a dare il massimo. Sei un punto di riferimento per chi desidera apprendere. Grazie alla tua organizzazione e alle tue capacità strategiche riesci sempre a tenere alta l'attenzione."
      }
    ]
  },
  {
    type: "Settore Migrazioni",
    requiredTraits: ["C", "S", "M"],
    description: "Calma e mediazione",
    variants: [
      {
        code: "CSMP",
        title: "L'Esploratore dell'Anima",
        subtitle: "Trovi un terreno comune tra mondi diversi",
        description: "Hai una pace interiore che ti rende un pilastro per le persone in transizione. Sai mediare con sensibilità tra culture diverse, adattandoti a situazioni complesse. Grazie alla tua visione pragmatica della situazione riesci ad individuare immediatamente la strada più giusta da percorrere per arrivare dritto al cuore delle persone."
      },
      {
        code: "CSMI",
        title: "L'Equilibrista Culturale",
        subtitle: "Cammini su fili sottili, ma non cadi mai",
        description: "Con la tua capacità di ispirare fiducia e speranza, sei perfetto per supportare chi si trova in momenti di cambiamento e integrazione. Grazie alla tua capacità di ispirare gli altri riesci ad ottenere l'appoggio di qualsiasi comunità."
      }
    ]
  }
]
}
};