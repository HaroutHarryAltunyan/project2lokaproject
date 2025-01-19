const router = require('express').Router();
const { User } = require('../../models');
console.log('User routes initialized.');

// CREATE new user (Sign up)
router.post('/', async (req, res) => {
  console.log('POST request to create a new user received.');
  try {
    console.log('Request body:', req.body);
    const userData = await User.create(req.body);
    console.log('New user created:', userData);

    req.session.save(() => {
      console.log('Session saved with user ID:', userData.id);
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
      console.log('Response sent with new user data.');
    });
  } catch (err) {
    console.error('Error creating new user:', err);
    res.status(400).json(err);
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  console.log('POST request to log in received.');
  try {
    console.log('Request body:', req.body);
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      console.log('No user found with this email:', req.body.email);
      return res.status(400).json({ message: 'Incorrect email or password' });
    }
    console.log('User found:', userData);

    const validPassword = userData.checkPassword(req.body.password);
    if (!validPassword) {
      console.log('Invalid password for user ID:', userData.id);
      return res.status(400).json({ message: 'Incorrect email or password' });
    }
    console.log('Password validated for user ID:', userData.id);

    req.session.save(() => {
      console.log('Session saved for user ID:', userData.id);
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
      console.log('Response sent for successful login.');
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(400).json(err);
  }
});

// LOGOUT
router.post('/logout', (req, res) => {
  console.log('POST request to log out received.');
  if (req.session.logged_in) {
    console.log('User logged in. Destroying session.');
    req.session.destroy(() => {
      console.log('Session destroyed. Sending response.');
      res.status(204).end();
    });
  } else {
    console.log('No user logged in. Sending 404 response.');
    res.status(404).end();
  }
});

module.exports = router;
console.log('User routes exported.');







// const router = require('express').Router();
// const { User } = require('../../models');

// // CREATE new user (Sign up)
// router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // LOGIN
// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });
//     if (!userData) {
//       return res.status(400).json({ message: 'Incorrect email or password' });
//     }

//     const validPassword = userData.checkPassword(req.body.password);
//     if (!validPassword) {
//       return res.status(400).json({ message: 'Incorrect email or password' });
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // LOGOUT
// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => res.status(204).end());
//   } else {
//     res.status(404).end();
//   }
// });

// module.exports = router;

