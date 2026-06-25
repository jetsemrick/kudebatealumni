import type { ScheduleDay } from "@/lib/schedule";

type ScheduleSectionProps = {
  schedule: ScheduleDay[];
};

export default function ScheduleSection({ schedule }: ScheduleSectionProps) {
  return (
    <div className="schedule">
      {schedule.map((day) => (
        <article key={day.date} className="schedule-day">
          <header className="schedule-day__header">
            <h3 className="schedule-day__title">{day.day}</h3>
            <p className="schedule-day__date">{day.date}</p>
          </header>
          <ul className="schedule-day__events">
            {day.events.map((event, index) => (
              <li key={`${day.date}-${index}`} className="schedule-event">
                <p className="schedule-event__time">{event.time}</p>
                <div className="schedule-event__body">
                  <p className="schedule-event__title">{event.title}</p>
                  {event.location && (
                    <p className="schedule-event__location">{event.location}</p>
                  )}
                  {event.address && (
                    <p className="schedule-event__address">{event.address}</p>
                  )}
                  {event.notes && (
                    <p className="schedule-event__notes">{event.notes}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
