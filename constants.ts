export const HEADER_INFO = {
  title: "Delta i möten hemifrån",
  subtitle: "med Utby Församling",
  intro: "Vi använder en gemensam Zoom-länk för alla möten. Välj det rum du ska till nedan för att se schemat.",
  footer: "kyrkahemma.netlify.app"
};

export const MAIN_MEETING = {
  url: "https://zoom.us/j/97153558402?pwd=bkhtRlNxL3E3SnZCTU1oSFNHcHJNQT09",
  meetingId: "97153558402",
  passcode: "0", 
  location: "Zoom"
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
  joinButton: "Anslut",
  copy: "Kopiera",
  copied: "Kopierad!",
  idLabel: "Mötes-ID",
  passcodeLabel: "Kod",
  nextSunday: "Kommande söndag",
  today: "Idag",
  breakoutTitle: "Så här fungerar det",
  closed: "Inget möte i detta rum"
};

export const BREAKOUT_INFO = {
  title: "Grupprum i Zoom",
  description: "När du anslutit till Zoom startar du i huvudrummet. För att gå till Kapellsalen eller Hjälpföreningens rum, klickar du på ikonen.",
};

export interface ScheduleItem {
  time: string;
  title: string;
  subtitle?: string;
}

export interface RoomConfig {
  id: string;
  name: string;
  description: string;
  getSchedule: (weekIndex: number) => ScheduleItem[];
}

export const ROOMS: RoomConfig[] = [
  {
    id: 'kapell',
    name: "Kapellsalen",
    description: "Huvudrummet för gudstjänst och undervisning",
    getSchedule: (weekIndex: number) => {
      const schedule: ScheduleItem[] = [
        { time: "11:00", title: "Sakramentsmöte", subtitle: "För alla" }
      ];

      // Block 2 Logic for Kapellsalen
      if ([1, 3].includes(weekIndex)) {
        schedule.push({ time: "12:10", title: "Söndagsskola", subtitle: "Ungdomar & Vuxna" });
      } else if ([2, 4].includes(weekIndex)) {
        schedule.push({ time: "12:10", title: "Äldstekvorum", subtitle: "Män 18+" });
      } else if (weekIndex === 5) {
        schedule.push({ time: "12:10", title: "Biskopsrådet undervisar", subtitle: "Gemensamt möte" });
      }

      return schedule;
    }
  },
  {
    id: 'rs',
    name: "Hjälpföreningens rum",
    description: "För Hjälpföreningens lektioner",
    getSchedule: (weekIndex: number) => {
      const schedule: ScheduleItem[] = [];

      // Block 2 Logic for RS Room
      if ([2, 4].includes(weekIndex)) {
        schedule.push({ time: "12:10", title: "Hjälpföreningen", subtitle: "Kvinnor 18+" });
      } 
      
      // Weeks 1, 3, 5 this room is typically empty as everyone is in Kapellsalen
      return schedule;
    }
  }
];

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