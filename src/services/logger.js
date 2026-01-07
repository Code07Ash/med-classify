export const logEvent = (event) => {
  console.log({
    ...event,
    timestamp: new Date().toISOString()
  });
};