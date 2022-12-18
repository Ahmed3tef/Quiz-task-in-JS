const dummy_words = [
  {
    id: 1,
    word: 'slowly',
    pos: 'adverb',
  },
  {
    id: 2,
    word: 'ride',
    pos: 'verb',
  },
  {
    id: 3,
    word: 'bus',
    pos: 'noun',
  },
  {
    id: 4,
    word: 'commute',
    pos: 'verb',
  },
  {
    id: 5,
    word: 'emissions',
    pos: 'noun',
  },
  {
    id: 6,
    word: 'walk',
    pos: 'verb',
  },
  {
    id: 7,
    word: 'fast',
    pos: 'adjective',
  },
  {
    id: 8,
    word: 'car',
    pos: 'noun',
  },
  {
    id: 9,
    word: 'crowded',
    pos: 'adjective',
  },
  {
    id: 10,
    word: 'arrival',
    pos: 'noun',
  },
  {
    id: 11,
    word: 'emit',
    pos: 'verb',
  },
  {
    id: 12,
    word: 'independent',
    pos: 'adjective',
  },
  {
    id: 13,
    word: 'convenient',
    pos: 'adjective',
  },
  {
    id: 14,
    word: 'lane',
    pos: 'noun',
  },
  {
    id: 15,
    word: 'heavily',
    pos: 'adverb',
  },
];

const getRandomData = dataLength => {
  let data = [];

  for (let i = 0; i < dataLength; i++) {
    const randomIndex = Math.floor(Math.random() * dummy_words.length);
    data.push(dummy_words[randomIndex]);
  }

  return data;
};

const getWords = (req, res, next) => {
  const data = getRandomData(10);

  const hasVerb = data.find(obj => obj.pos === 'verb');
  const hasAdjective = data.find(obj => obj.pos === 'adjective');
  const haNoun = data.find(obj => obj.pos === 'noun');
  const hasAdverb = data.find(obj => obj.pos === 'adverb');

  if (hasVerb && hasAdjective && haNoun && hasAdverb) {
    res.status(200).json({ data });
  } else {
    // repeat all steps again
    getWords(req, res, next);
  }
};

exports.getWords = getWords;
