  module.exports = {
  format_date: (date) => {
    const dateobj = new Date(date)
    const formattedDate = dateobj.toLocaleDateString();
    return formattedDate;
  },
  get_emoji: () => {
    const randomNum = Math.random();

    if (randomNum > 0.7) {
      return `<span aria-label="emoji">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span aria-label="emoji">💻</span>`;
    } else {
      return `<span aria-label="emoji">⚙️</span>`;
    }
  },
};













