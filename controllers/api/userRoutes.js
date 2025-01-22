const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const validator = require('validator');
const rateLimit = require('express-rate-limit');

// Rate limiter for login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per window
  message: 'Too many login attempts from this IP, please try again later.',
});
console.log('User routes initialized.');

// Helper function to validate password
const isStrongPassword = (password) => {
  return validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  });
};

// CREATE new user (Sign up)
router.post('/', async (req, res) => {
  try {
    console.log('Request to create new user received.');

    const { email, name, password } = req.body;

    // Validate email and password
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format.' });
    }
    if (!isStrongPassword(password)) {
      return res.status(400).json({
        message: 'Password must contain at least 8 characters, including an uppercase letter, a number, and a symbol.',
      });
    }

    // Create new user
    const userData = await User.create({ email, name, password });
    console.log('New user created:', { id: userData.id, email: userData.email });

    // Save session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json({ user: userData, message: 'Signup successful!' });
    });
  } catch (err) {
    console.error('Error creating new user:', err.message);
    res.status(500).json({ message: 'Failed to create user. Please try again.' });
  }
});

// LOGIN
router.post('/login', loginLimiter, async (req, res) => {
  try {
    console.log('Request to log in received.');

    const { email, password } = req.body;

    if (!validator.isEmail(email) || !password) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const userData = await User.findOne({ where: { email } });
    if (!userData) {
      return res.status(400).json({ message: 'Incorrect email or password.' });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, userData.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Incorrect email or password.' });
    }

    // Save session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: { id: userData.id, email: userData.email }, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.error('Error during login:', err.message);
    res.status(500).json({ message: 'Login failed. Please try again.' });
  }
});

// LOGOUT
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).json({ message: 'No active session to log out from.' });
  }
});

// PASSWORD RESET (Optional Example)
router.post('/reset-password', async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!validator.isEmail(email) || !isStrongPassword(newPassword)) {
      return res.status(400).json({
        message: 'Invalid email or password format.',
      });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'No user found with this email.' });
    }

    // Update password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password updated successfully.' });
  } catch (err) {
    console.error('Error resetting password:', err.message);
    res.status(500).json({ message: 'Password reset failed. Please try again.' });
  }
});

module.exports = router;
console.log('User routes exported.');


