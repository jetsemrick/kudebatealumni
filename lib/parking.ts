export type ParkingItem = {
  time: string;
  title: string;
  instructions: string[];
};

export type ParkingDay = {
  day: string;
  date: string;
  items: ParkingItem[];
};

export const parkingInstructions: ParkingDay[] = [
  {
    day: "Friday",
    date: "August 28, 2026",
    items: [
      {
        time: "5:30 PM",
        title: "Banner Hanging — Bailey Hall",
        instructions: [
          "Parking is available along Memorial Drive (the road in front of the Campanile) just down the steps behind Bailey Hall. If you have mobility issues you can drop off in the lot immediately behind Bailey Hall (accessed off of Jayhawk Blvd between Snow and Strong Halls).",
        ],
      },
      {
        time: "6:30 PM",
        title: "Maceli's",
        instructions: [
          "There is free street parking along New Hampshire in front of Maceli's. KU parking enforcement ends after 6:00 pm.",
        ],
      },
    ],
  },
  {
    day: "Saturday",
    date: "August 29, 2026",
    items: [
      {
        time: "9:00 AM",
        title: "Squad Room, Walking Tour & Spencer Library",
        instructions: [
          "There will be a food truck with coffee and pastries parked behind Bailey Hall starting at 8:30. If you are doing the KU squadroom, the walking tour, or the Spencer Library tour, the parking instructions are the same as for the Banner Hanging ceremony.",
        ],
      },
      {
        time: "9:00 AM",
        title: "Basketball & Pickleball — Robinson Gymnasium",
        instructions: [
          "Park in yellow lot 90 across Naismith Rd from Allen Fieldhouse. There will be a door propped open at the top of the metal staircase on the west side of Robinson immediately across from the Field House.",
        ],
      },
      {
        time: "12:30 PM",
        title: "Luncheon — Jayhawk Welcome Center",
        instructions: [
          "You can park in the Union parking garage or the open parking lot next to the Union. There is a small charge for parking in the Union lot. There is also some street parking along Jayhawk Blvd toward the Oread Hotel.",
        ],
      },
      {
        time: "6:00 PM",
        title: "Dinner — The Jayhawk Club",
        instructions: [
          "The Jayhawk Club has a large parking lot at the club.",
        ],
      },
    ],
  },
  {
    day: "Sunday",
    date: "August 30, 2026",
    items: [
      {
        time: "9:30 AM",
        title: "Brunch — The Oread",
        instructions: [
          "Use the same directions as for the Saturday luncheon. The Oread also has valet parking available.",
        ],
      },
    ],
  },
];
