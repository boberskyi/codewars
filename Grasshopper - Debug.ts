export const weatherInfo = (temp: number): string => {
  const c: number = convertToCelsius(temp);
  return `${Math.round(c * 1e5) / 1e5} ${c < 0 ? "is freezing temperature" : "is above freezing temperature"}`;
};

export const convertToCelsius = (temperature: number): number => {
  return Math.round(((temperature - 32) * 5) / 9 * 1e5) / 1e5;
};