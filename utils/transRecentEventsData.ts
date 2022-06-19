export const transRecentEventsData = (data: any) => {
  const recentEventsData = data.map((item: any) => {
    const { id, name, date } = item;
    const image = item.launches[0]?.image ?? null;
    return { id, name, date, image };
  });

  return recentEventsData;
};
