module.exports = {
  format_date: (date) => {
    console.log('format_date function called with date:', date);
    const formattedDate = new Date(date).toLocaleDateString();
    console.log('Formatted date:', formattedDate);
    return formattedDate;
  },
  get_emoji: () => {
    console.log('get_emoji function called.');
    const randomNum = Math.random();
    console.log('Generated random number:', randomNum);

    if (randomNum > 0.7) {
      console.log('Returning emoji: 💡');
      return `<span aria-label="emoji">💡</span>`;
    } else if (randomNum > 0.4) {
      console.log('Returning emoji: 💻');
      return `<span aria-label="emoji">💻</span>`;
    } else {
      console.log('Returning emoji: ⚙️');
      return `<span aria-label="emoji">⚙️</span>`;
    }
  },
};



// module.exports = {
//   format_date: (date) => {
//     return new Date(date).toLocaleDateString();
//   },
//   get_emoji: () => {
//     const randomNum = Math.random();
//     if (randomNum > 0.7) {
//       return `<span aria-label="emoji">💡</span>`;
//     } else if (randomNum > 0.4) {
//       return `<span aria-label="emoji">💻</span>`;
//     } else {
//       return `<span aria-label="emoji">⚙️</span>`;
//     }
//   },
// };
