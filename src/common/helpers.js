export const sortByAsc = ((first, second) => {
  return new Date(second.date_local).getTime() - new Date(first.date_local).getTime();
});

export const sortByDesc = ((first, second) => {
  return new Date(first.date_local).getTime() - new Date(second.date_local).getTime();
});
