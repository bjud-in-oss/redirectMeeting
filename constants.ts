export const HEADER_INFO = {
  title: "Delta i möten hemifrån",
  subtitle: "med Utby Församling",
  intro: "Vi använder nu två olika länkar. Välj den länk som passar mötet du ska delta i.",
  footer: "kyrkahemma.netlify.app"
};

export const MEETINGS = [
  {
    id: "chapel",
    badge: "LÄNK 1",
    location: "Kapellsalen",
    url: "https://zoom.us/j/97153558402?pwd=bkhtRlNxL3E3SnZCTU1oSFNHcHJNQT09",
    meetingId: "97153558402",
    passcode: "0",
    schedule: [
      {
        time: "Söndagar 11:00-12:00",
        title: "Sakramentsmöte",
        targetGroup: "För alla"
      },
      {
        time: "1:a & 3:e sön 12:10-13:00",
        title: "Söndagsskola",
        targetGroup: "Vuxna 18+"
      }
    ]
  },
  {
    id: "rs",
    badge: "LÄNK 2",
    location: "Hjälpföreningens rum",
    url: "https://zoom.us/j/98913147891?pwd=dHhvWE92c0VIQ1hobVJpRS8zQVdlQT09",
    meetingId: "98913147891",
    passcode: "0",
    schedule: [
      {
        time: "2:a & 4:e sön 12:10-13:00",
        title: "Hjälpföreningen",
        targetGroup: "Kvinnor 18+"
      }
    ]
  }
];

export const UI_TEXTS = {
  joinButton: "Anslut via Zoom",
  copy: "Kopiera",
  copied: "Kopierad!",
  idLabel: "Mötes-ID",
  passcodeLabel: "Kod"
};

export const APP_CONFIG = {
  redirectDelaySeconds: 5
};

export const MEETING_CONFIG = {
  title: HEADER_INFO.title,
  organizer: HEADER_INFO.footer,
  url: MEETINGS[0].url,
  meetingId: MEETINGS[0].meetingId,
  passcode: MEETINGS[0].passcode
};

export const TEXTS = {
  helpTitle: "Behöver du hjälp?",
  helpSubtitle: "Här är informationen du behöver för att ansluta manuellt.",
  zoomLinkLabel: "Zoom-länk",
  meetingIdLabel: "Mötes-ID",
  passcodeLabel: "Kod",
  copy: "Kopiera",
  paused: "Pausad",
  connecting: "Ansluter...",
  seconds: "sekunder",
  resume: "Återuppta",
  cancel: "Avbryt",
  manualLink: "Anslut manuellt"
};