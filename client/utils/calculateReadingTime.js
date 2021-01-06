const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const regex = /\w+/g;
  const wordCount = (text || "").match(regex).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  if (wordCount + 50 < wordsPerMinute) {
    return "< 1 min."
  }

  return `${readingTime} min.`
}

export default calculateReadingTime;
