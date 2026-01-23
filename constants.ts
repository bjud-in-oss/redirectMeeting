export const HEADER_INFO = {
  title: "Delta i möten hemifrån",
  subtitle: "med Utby Församling",
  intro: "Vi använder nu en gemensam länk. Alla möten sker via Grupprum (Breakout Rooms) i Zoom.",
  footer: "kyrkahemma.netlify.app"
};

export const MAIN_MEETING = {
  url: "https://zoom.us/j/97153558402?pwd=bkhtRlNxL3E3SnZCTU1oSFNHcHJNQT09",
  meetingId: "97153558402",
  passcode: "0", 
  location: "Kapellsalen"
};

export const MEETING_CONFIG = {
  ...MAIN_MEETING,
  title: "Söndagsmöte",
  organizer: "Utby Församling"
};

export const APP_CONFIG = {
  redirectDelaySeconds: 5
};

export const UI_TEXTS = {
  joinButton: "Anslut till Mötet",
  copy: "Kopiera",
  copied: "Kopierad!",
  idLabel: "Mötes-ID",
  passcodeLabel: "Kod",
  scheduleTitle: "Schema",
  showFullSchedule: "Visa hela månadsschemat",
  hideFullSchedule: "Dölj schema",
  nextSunday: "Kommande söndag",
  today: "Idag",
  breakoutTitle: "Så här gör du"
};

export const BREAKOUT_INFO = {
  title: "Grupprum i Zoom",
  description: "När du anslutit till Zoom, klicka på ikonen för Grupprum och välj Kapellsalen för att delta i sakramentsmötet.",
  rooms: [
    { name: "Kapellsalen", description: "Sakramentsmöte, Äldstekvorum & Söndagsskola" },
    { name: "Hjälpföreningen", description: "Hjälpföreningens möten" }
  ]
};

// 1 = 1st Sunday, 2 = 2nd, etc.
export const SCHEDULE_RULES = {
  block1: {
    time: "11:00 - 12:00",
    title: "Sakramentsmöte",
    room: "Kapellsalen",
    note: "För alla"
  },
  block2: {
    time: "12:10 - 13:00",
    variations: {
      sundaySchool: {
        weeks: [1, 3],
        title: "Söndagsskola",
        rooms: ["Kapellsalen"]
      },
      priesthoodRS: {
        weeks: [2, 4],
        title: "Äldstekvorum och Hjälpförening",
        rooms: ["Kapellsalen", "Hjälpföreningen"]
      },
      fifthSunday: {
        weeks: [5],
        title: "Biskopsrådets undervisning",
        rooms: ["Kapellsalen"]
      }
    }
  }
};

export const TEXTS = {
  helpTitle: "Behöver du hjälp?",
  helpSubtitle: "Information för manuell anslutning.",
  copy: "Kopiera",
  zoomLinkLabel: "Länk",
  meetingIdLabel: "Mötes-ID",
  passcodeLabel: "Lösenkod",
  paused: "Pausad",
  connecting: "Ansluter...",
  seconds: "sekunder",
  resume: "Återuppta",
  cancel: "Avbryt",
  manualLink: "Öppna manuellt"
};