// i put outside the getRank controller to be like a database (each time i add a score it keeps it) (saved in cash if server restarted added new data will be lost).

const dummy_ranks = [
  20, 90, 100, 50, 10, 50, 60, 0, 60, 10, 90, 30, 100, 30, 20, 90, 40, 20, 10,
  60, 50, 100, 50, 80, 50, 80, 60, 80, 10, 40,
];

exports.getRank = (req, res, next) => {
  // to make sure that it is a Number (don't trust the user input)

  const score = +req.body.score;

  if (score === 0) {
    return res.status(200).json({ rank: 0 });
  }
  if (score) {
    dummy_ranks.push(score);

    // made slice cuz sort is changing the old array

    const sortedRanks = dummy_ranks.slice().sort((a, b) => b - a);
    const scoreIndex = sortedRanks.findIndex(rank => rank === score);
    const dataLength = sortedRanks.length;
    const rank = ((dataLength - scoreIndex) / dataLength) * 100;

    // used Number.EPSILON to make sure that JS respond with the expected values (عشان تاخد بالها من الارقام  صح)

    const finalRank = Math.round((rank + Number.EPSILON) * 100) / 100;

    res.status(200).json({ rank: finalRank });
  } else {
    const error = new Error('Please enter a valid score number.');
    error.code = 403;

    return next(error);
  }
};
