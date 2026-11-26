// All personal content of the site lives here, in both languages, so it can be edited in one place.
import type { Lang } from "./i18n";

type Localized = Record<Lang, string>;

export const profile = {
  name: "Enrico Fantuz",
  email: "enrico.fantuz@live.it",
  role: {
    it: "Studente di Ingegneria Elettronica e Informatica",
    en: "Electronic & Computer Engineering student",
  } satisfies Localized,
  tagline: {
    it: "Sono di Pordenone e studio all’Università degli Studi di Trieste. Mi interessa il punto in cui l'hardware incontra il software: sistemi embedded, elettronica digitale e codice che gira vicino al metallo.",
    en: "I'm from Pordenone and study at the University of Trieste. I'm drawn to the place where hardware meets software: embedded systems, digital electronics and code that runs close to the metal.",
  } satisfies Localized,
  links: [
    { label: "GitHub", href: "https://github.com/grecsello", handle: "github.com/grecsello" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/enrico-fantuz", handle: "in/enrico-fantuz" },
  ],
  skills: [
    { area: { it: "Linguaggi", en: "Languages" }, items: ["C", "C++", "Python", "VHDL", "Java", "GDScript", "HTML", "CSS", "JavaScript"] },
    { area: { it: "Embedded", en: "Embedded" }, items: ["STM32", "ESP32", "Arduino", "FreeRTOS", "Raspberry Pi"] },
    {
      area: { it: "Strumenti", en: "Tools" },
      items: ["KiCad", "Git", "Linux", "MATLAB", "Fusion 360", "Shapr3D", "Godot", "Piper", "NumPy", "GitHub Pages", { it: "Modellazione 3D", en: "3D modeling" }],
    },
  ] satisfies { area: Localized; items: (string | Localized)[] }[],
};

export type Project = {
  year?: string;
  status?: "ongoing";
  title: Localized;
  description: Localized;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    status: "ongoing",
    title: {
      it: "Orologio a tubi Nixie",
      en: "Nixie tube clock",
    },
    description: {
      it: "Progetto in corso di un orologio che visualizza l’ora attraverso tubi Nixie.",
      en: "An ongoing project to build a clock that displays the time using Nixie tubes.",
    },
    tags: ["Nixie"],
  },
  {
    year: "2025",
    title: {
      it: "Ricevitore RFID e NFC con PCB dedicata",
      en: "RFID and NFC receiver with a custom PCB",
    },
    description: {
      it: "Progetto completo di un ricevitore RFID con comunicazione I²C: progettazione in KiCad e costruzione di una PCB per alloggiare i componenti, con un programma in C sviluppato nell'ambiente Arduino per la comunicazione e il riconoscimento di tag NFC e RFID.",
      en: "A complete RFID receiver project using I²C communication: a custom PCB designed in KiCad and built to house the components, with a C program developed in the Arduino environment for communication and NFC and RFID tag recognition.",
    },
    tags: ["RFID", "NFC", "I²C", "KiCad", "PCB", "Arduino", "C"],
  },
  {
    year: "2025",
    title: {
      it: "Debugger ESP32 con display Waveshare",
      en: "ESP32 debugger with a Waveshare display",
    },
    description: {
      it: "Progetto scritto in C per usare un display Waveshare come strumento di debug per schede ESP32, visualizzando la console del microcontrollore sullo schermo.",
      en: "A project written in C that uses a Waveshare display as a debugging tool for ESP32 boards, showing the microcontroller's console on screen.",
    },
    tags: ["ESP32", "Waveshare", "C", "Debug"],
  },
  {
    year: "2024",
    title: {
      it: "Sistema di indizi vocali per escape room",
      en: "Voice hint system for an escape room",
    },
    description: {
      it: "Sistema text-to-speech in italiano e inglese su Raspberry Pi, scritto in Python con Piper e NumPy, per leggere ad alta voce gli indizi ai giocatori di una escape room.",
      en: "An Italian and English text-to-speech system running on a Raspberry Pi, written in Python with Piper and NumPy, reading hints aloud to players in an escape room.",
    },
    tags: ["Raspberry Pi", "Python", "Piper", "NumPy", "TTS"],
  },
  // GitHub entries use repository creation years, not verified completion dates.
  {
    year: "2023",
    title: {
      it: "The Last Bite: Vampire Resistance",
      en: "The Last Bite: Vampire Resistance",
    },
    description: {
      it: "Primo gioco personale realizzato in sette giorni per una game jam, sviluppato con Godot e GDScript.",
      en: "My first personal game, built in seven days for a game jam using Godot and GDScript.",
    },
    tags: ["Godot", "GDScript", "Game Jam"],
  },
  {
    year: "2023",
    title: {
      it: "Gestione prenotazioni per un ristorante",
      en: "Restaurant booking management",
    },
    description: {
      it: "Applicazione da console in Java per gestire tavoli e prenotazioni di un ristorante: inserimento, elenco, ricerca e rimozione delle prenotazioni, con dati salvati su file.",
      en: "A Java console application for managing restaurant tables and bookings: adding, listing, finding and removing reservations, with data saved to files.",
    },
    tags: ["Java", "CSV"],
    href: "https://github.com/Grecsello/restaurant-booking-project",
  },
  {
    year: "2023",
    title: {
      it: "Sito web sulla storia e i modelli Dyson",
      en: "Website about Dyson history and models",
    },
    description: {
      it: "Sito realizzato per il corso di Reti di Calcolatori, con pagine dedicate alla storia e ai modelli degli aspirapolvere Dyson, scritto in HTML e CSS con semplici interazioni JavaScript.",
      en: "A website built for the Computer Networks course, with pages about Dyson vacuum cleaner history and models, written in HTML and CSS with simple JavaScript interactions.",
    },
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    href: "https://github.com/Grecsello/Grecsello.github.io",
  },
];

// Interface strings.
export const ui = {
  nav: {
    home: { it: "Home", en: "Home" },
    projects: { it: "Progetti", en: "Projects" },
    contact: { it: "Contatti", en: "Contact" },
    darkTheme: { it: "Attiva tema scuro", en: "Switch to dark theme" },
    lightTheme: { it: "Attiva tema chiaro", en: "Switch to light theme" },
  },
  home: {
    recent: { it: "Progetti recenti", en: "Recent projects" },
    allProjects: { it: "Tutti i progetti", en: "All projects" },
    skills: { it: "Competenze", en: "Skills" },
    elsewhere: { it: "Altrove", en: "Elsewhere" },
  },
  projects: {
    eyebrow: { it: "Cose che ho costruito", en: "Things I've built" },
    title: { it: "Progetti", en: "Projects" },
    ongoing: { it: "In corso", en: "Ongoing" },
  },
  contact: {
    eyebrow: { it: "Scrivimi", en: "Say hello" },
    title: { it: "Contatti", en: "Contact" },
    intro: {
      it: "Per una domanda su un progetto, un'idea o anche solo per salutare, il modo più rapido è una email.",
      en: "For a question about a project, an idea, or just to say hi, email is the quickest way to reach me.",
    },
  },
} satisfies Record<string, Record<string, Localized>>;
