const formatDisplayedTime = duration => {
  if (!duration) {
    return { minutes: null, seconds: null };
  }
  const minutes = Math.floor(duration / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.round(duration % 60)
    .toString()
    .padStart(2, "0");
  return { minutes, seconds };
};
export default formatDisplayedTime;
