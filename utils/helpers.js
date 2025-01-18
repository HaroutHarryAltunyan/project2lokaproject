module.exports = {
  format_date: (date) => {
    return new Date(date).toLocaleDateString();
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
