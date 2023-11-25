export const updateLight = (current: string): string => {
  const trafficLights = ['green', 'yellow', 'red'];
  const currentIndex = trafficLights.indexOf(current);
  const index = currentIndex === trafficLights.length - 1 ? 0 : currentIndex + 1;

  return trafficLights[index];
}