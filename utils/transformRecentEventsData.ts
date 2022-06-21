import { EventsData } from '../Interfaces';

interface InputEvent {
  id: string;
  name: string;
  date: string;
  launches: Array<EventLaunches> | [];
}

interface EventLaunches {
  image: string;
}

export const transformRecentEventsData = (data: Array<InputEvent>): Array<EventsData> => {
  const recentEventsData = data.map((item: InputEvent) => {
    const { id, name, date } = item;
    const image = item.launches[0]?.image ?? null;

    return { id, name, date, image };
  });

  return recentEventsData;
};
