export const rankWordFrequency = (sentence: string, n: number): [string, number][] => {
  sentence = sentence.toLowerCase();

  const words: string[] = sentence.split(" ");
  const wordFrequency: {[key: string]: number} = {};

  for (let i = 0; i < words.length; i++) {
      const currentWord: string = words[i];
      if (Object.keys(wordFrequency).includes(currentWord)) {
          wordFrequency[currentWord]++;
      } else {
          wordFrequency[currentWord] = 1;
      }
  }

  const sortedArray: [string, number][] = Object.entries(wordFrequency).sort((a: [string, number], b: [string, number]) => {
      if (a[1] !== b[1]) {
          return b[1] - a[1];
      } else {
          return a[0].localeCompare(b[0]);
      }
  })

  return sortedArray.slice(0, n);
}