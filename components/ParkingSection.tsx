import type { ParkingDay } from "@/lib/parking";

type ParkingSectionProps = {
  parking: ParkingDay[];
};

export default function ParkingSection({ parking }: ParkingSectionProps) {
  return (
    <div className="schedule">
      {parking.map((day) => (
        <article key={day.date} className="schedule-day">
          <header className="schedule-day__header">
            <h3 className="schedule-day__title">{day.day}</h3>
            <p className="schedule-day__date">{day.date}</p>
          </header>
          <ul className="schedule-day__events">
            {day.items.map((item, index) => (
              <li key={`${day.date}-${index}`} className="schedule-event">
                <p className="schedule-event__time">{item.time}</p>
                <div className="schedule-event__body">
                  <p className="schedule-event__title">{item.title}</p>
                  {item.instructions.map((instruction) => (
                    <p
                      key={instruction}
                      className="schedule-event__notes"
                    >
                      {instruction}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
