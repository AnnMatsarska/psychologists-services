export const applyFilter = (psychologists, filter) => {
  switch (filter) {
    case 'A to Z':
      return psychologists.slice().sort((a, b) => a.name.localeCompare(b.name));
    case 'Z to A':
      return psychologists.slice().sort((a, b) => b.name.localeCompare(a.name));
    case 'Less than 10$':
      return psychologists.filter(
        psychologist => psychologist.price_per_hour < 10
      );
    case 'Greater than 10$':
      return psychologists.filter(
        psychologist => psychologist.price_per_hour > 10
      );
    case 'Popular':
      return psychologists.filter(psychologist => psychologist.rating > 4.7);
    case 'Not popular':
      return psychologists.filter(psychologist => psychologist.rating < 4.7);
    default:
      return psychologists;
  }
};
