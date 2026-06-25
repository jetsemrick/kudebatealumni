export type ScheduleEvent = {
  time: string;
  title: string;
  location?: string;
  address?: string;
  notes?: string;
};

export type ScheduleDay = {
  day: string;
  date: string;
  events: ScheduleEvent[];
};

export const reunionSchedule: ScheduleDay[] = [
  {
    day: "Friday",
    date: "August 28, 2026",
    events: [
      {
        time: "5:30 – 6:30 PM",
        title: "Squad Room Kickoff: Registration, Check In & Hanging of the Banners",
        location: "Squad Room, Bailey Hall, KU Campus",
        address: "1440 Jayhawk Blvd.",
      },
      {
        time: "7:00 PM",
        title: "Kickoff Party",
        location: "Maceli's Banquet Hall",
        address: "1031 New Hampshire Street",
      },
    ],
  },
  {
    day: "Saturday",
    date: "August 29, 2026",
    events: [
      {
        time: "9:00 – 11:30 AM",
        title: "Optional Morning Activities",
        notes:
          "Feel free to participate in any that interest you. RSVP may be required for some activities — indicate your interest on the RSVP form.",
      },
      {
        time: "9:00 AM",
        title: "Coffee & Donuts with the Squad",
        location: "KU Debate Squad Room, Bailey Hall, KU Campus",
        address: "1440 Jayhawk Blvd.",
        notes: "Available all morning starting at 9:00 AM.",
      },
      {
        time: "9:00 AM",
        title: "Recreation with Squadmates: Basketball and Pickleball",
        location: "Ambler Student Recreation Center",
        address: "1740 Watkins Center Drive",
      },
      {
        time: "9:30 AM",
        title: "Campus Coffee & Power Walk through Downtown Lawrence",
        notes: "Meetup location TBD.",
      },
      {
        time: "10:00 AM",
        title: "Spencer Research Library Rare Books Tour",
        location: "Spencer Research Library, KU Campus",
        address: "1450 Poplar Lane",
        notes: "RSVP required. Number of attendees limited.",
      },
      {
        time: "10:00 AM",
        title: "KU Behind-the-Scenes: Tour of the Hidden Sights of KU",
        notes:
          "Led by our KU facilities team (Fraser Flags, etc.). Meetup location TBD.",
      },
      {
        time: "12:30 PM",
        title: "Lunch and Program",
        location: "Jayhawk Welcome Center",
        address: "1266 Oread Avenue",
      },
      {
        time: "2:30 PM",
        title: "Audience Debate: British Parliamentary Demonstration Debate",
        location: "Jayhawk Welcome Center",
      },
      {
        time: "6:30 PM",
        title: "Dinner",
        notes: "Location TBD.",
      },
    ],
  },
  {
    day: "Sunday",
    date: "August 30, 2026",
    events: [
      {
        time: "9:30 – 11:30 AM",
        title: "Brunch",
        location: "The Oread Hotel",
        address: "1200 Oread Avenue",
        notes: "Parents of current KU Debaters cordially invited.",
      },
    ],
  },
];

export type SaturdayActivity = {
  id: string;
  label: string;
  description: string;
  rsvpRequired?: boolean;
};

export const saturdayMorningActivities: SaturdayActivity[] = [
  {
    id: "coffee-donuts",
    label: "Coffee & Donuts with the Squad",
    description: "Available all morning in the Squad Room starting at 9:00 AM.",
  },
  {
    id: "recreation",
    label: "Recreation: Basketball and Pickleball",
    description: "9:00 AM at Ambler Student Recreation Center.",
  },
  {
    id: "power-walk",
    label: "Campus Coffee & Power Walk",
    description: "9:30 AM walk through downtown Lawrence.",
  },
  {
    id: "rare-books",
    label: "Spencer Research Library Rare Books Tour",
    description: "10:00 AM start. Limited capacity.",
    rsvpRequired: true,
  },
  {
    id: "ku-tour",
    label: "KU Behind-the-Scenes Tour",
    description: "10:00 AM tour of hidden sights of KU with the facilities team.",
  },
];
