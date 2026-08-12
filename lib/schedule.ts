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
        title: "Coffee & Pastries with the Squad",
        location: "KU Debate Squad Room, Bailey Hall, KU Campus",
        address: "1440 Jayhawk Blvd.",
        notes:
          "Uplift Coffee's truck will be parked outside Bailey Hall with coffee and assorted pastries.",
      },
      {
        time: "9:00 AM",
        title: "Recreation with Squadmates: Basketball and Pickleball",
        location: "Robinson Health and Physical Education Center",
        address: "1001 Sunnyside Avenue, Lawrence, Kansas 66045",
        notes: "We will have a few basketball courts and a pickleball court.",
      },
      {
        time: "9:30 AM",
        title: "Campus Coffee & Power Walk",
        notes: "Starting at Bailey Hall and walking around campus.",
      },
      {
        time: "10:00 AM",
        title: "Spencer Research Library Rare Books Tour",
        location: "Spencer Research Library, KU Campus",
        address: "1450 Poplar Lane",
        notes:
          "RSVP required. Number of attendees limited. Bailey Hall is next door — grab coffee and pastries at the food truck.",
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
        time: "6:00 PM",
        title: "Dinner",
        location: "The Jayhawk Club",
        address: "1809 Birdie Way, Lawrence, KS 66047",
        notes: "Happy hour from 6:00–7:30 PM, with dinner at 7:30 PM.",
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
  time: string;
  description: string;
  rsvpRequired?: boolean;
};

export const saturdayMorningActivities: SaturdayActivity[] = [
  {
    id: "coffee-pastries",
    label: "Coffee & Pastries with the Squad",
    time: "9:00 AM",
    description:
      "Uplift Coffee's truck will be parked outside Bailey Hall with coffee and assorted pastries.",
  },
  {
    id: "recreation",
    label: "Recreation: Basketball and Pickleball",
    time: "9:00 AM",
    description:
      "9:00 AM at Robinson Health and Physical Education Center. We will have a few basketball courts and a pickleball court.",
  },
  {
    id: "power-walk",
    label: "Campus Coffee & Power Walk",
    time: "9:30 AM",
    description: "9:30 AM, starting at Bailey Hall and walking around campus.",
  },
  {
    id: "rare-books",
    label: "Spencer Research Library Rare Books Tour",
    time: "10:00 AM",
    description: "10:00 AM start. Limited capacity.",
    rsvpRequired: true,
  },
];
