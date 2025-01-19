// const router = require('express').Router();
// const { User } = require('../../models');

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

// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
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

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// module.exports = router;




// THIS IS FOR THE PROJECT 




// // // // error code // // // //
// // const router = require('express').Router();
// const { User } = require('../../models');
// console.log('User routes initialized.');

// // CREATE new user (Sign up)
// router.post('/', async (req, res) => {
//   console.log('POST request to create a new user received.');
//   try {
//     console.log('Request body:', req.body);
//     const userData = await User.create(req.body);
//     console.log('New user created:', userData);

//     req.session.save(() => {
//       console.log('Session saved with user ID:', userData.id);
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//       console.log('Response sent with new user data.');
//     });
//   } catch (err) {
//     console.error('Error creating new user:', err);
//     res.status(400).json(err);
//   }
// });

// // LOGIN
// router.post('/login', async (req, res) => {
//   console.log('POST request to log in received.');
//   try {
//     console.log('Request body:', req.body);
//     const userData = await User.findOne({ where: { email: req.body.email } });
//     if (!userData) {
//       console.log('No user found with this email:', req.body.email);
//       return res.status(400).json({ message: 'Incorrect email or password' });
//     }
//     console.log('User found:', userData);

//     const validPassword = userData.checkPassword(req.body.password);
//     if (!validPassword) {
//       console.log('Invalid password for user ID:', userData.id);
//       return res.status(400).json({ message: 'Incorrect email or password' });
//     }
//     console.log('Password validated for user ID:', userData.id);

//     req.session.save(() => {
//       console.log('Session saved for user ID:', userData.id);
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.json({ user: userData, message: 'You are now logged in!' });
//       console.log('Response sent for successful login.');
//     });
//   } catch (err) {
//     console.error('Error during login:', err);
//     res.status(400).json(err);
//   }
// });

// // LOGOUT
// router.post('/logout', (req, res) => {
//   console.log('POST request to log out received.');
//   if (req.session.logged_in) {
//     console.log('User logged in. Destroying session.');
//     req.session.destroy(() => {
//       console.log('Session destroyed. Sending response.');
//       res.status(204).end();
//     });
//   } else {
//     console.log('No user logged in. Sending 404 response.');
//     res.status(404).end();
//   }
// });

// module.exports = router;
// console.log('User routes exported.');







// // // // // // this is a fix terminal gave an error// // // // // 



// // // // // // // // // // // // // // // // // // // // // // / // / /// / / / /   need better error handling 
// const router = require('express').Router(); // Ensure this is uncommented
// const { User } = require('../../models');
// console.log('User routes initialized.');

// // CREATE new user (Sign up)
// router.post('/', async (req, res) => {
//   console.log('POST request to create a new user received.');
//   try {
//     console.log('Request body:', req.body);
//     const userData = await User.create(req.body);
//     console.log('New user created:', userData);

//     req.session.save(() => {
//       console.log('Session saved with user ID:', userData.id);
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//       console.log('Response sent with new user data.');
//     });
//   } catch (err) {
//     console.error('Error creating new user:', err);
//     res.status(400).json(err);
//   }
// });

// // LOGIN
// router.post('/login', async (req, res) => {
//   console.log('POST request to log in received.');
//   try {
//     console.log('Request body:', req.body);
//     const userData = await User.findOne({ where: { email: req.body.email } });
//     if (!userData) {
//       console.log('No user found with this email:', req.body.email);
//       return res.status(400).json({ message: 'Incorrect email or password' });
//     }
//     console.log('User found:', userData);

//     const validPassword = userData.checkPassword(req.body.password);
//     if (!validPassword) {
//       console.log('Invalid password for user ID:', userData.id);
//       return res.status(400).json({ message: 'Incorrect email or password' });
//     }
//     console.log('Password validated for user ID:', userData.id);

//     req.session.save(() => {
//       console.log('Session saved for user ID:', userData.id);
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.json({ user: userData, message: 'You are now logged in!' });
//       console.log('Response sent for successful login.');
//     });
//   } catch (err) {
//     console.error('Error during login:', err);
//     res.status(400).json(err);
//   }
// });

// // LOGOUT
// router.post('/logout', (req, res) => {
//   console.log('POST request to log out received.');
//   if (req.session.logged_in) {
//     console.log('User logged in. Destroying session.');
//     req.session.destroy(() => {
//       console.log('Session destroyed. Sending response.');
//       res.status(204).end();
//     });
//   } else {
//     console.log('No user logged in. Sending 404 response.');
//     res.status(404).end();
//   }
// });

// module.exports = router;
// console.log('User routes exported.');


// // // // // // // // // // // // // // // // this is updated code 



//// -----------------------------------------------------------------------------i am having server issue error code 500


// const router = require('express').Router();
// const { User } = require('../../models');
// const bcrypt = require('bcrypt');
// console.log('User routes initialized.');

// // CREATE new user (Sign up)
// router.post('/', async (req, res) => {
//   console.log('POST request to create a new user received.');
//   try {
//     console.log('Request body:', req.body);

//     // Validate email and password
//     if (!req.body.email || !req.body.password || req.body.password.length < 8) {
//       return res.status(400).json({ message: 'Invalid email or password must be at least 8 characters.' });
//     }

//     const userData = await User.create(req.body);
//     console.log('New user created:', userData);

//     req.session.save(() => {
//       console.log('Session saved with user ID:', userData.id);
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json({ user: userData, message: 'Signup successful!' });
//       console.log('Response sent with new user data.');
//     });
//   } catch (err) {
//     console.error('Error creating new user:', err);
//     res.status(500).json({ message: 'Failed to create user. Please try again.' });
//   }
// });

// // LOGIN
// router.post('/login', async (req, res) => {
//   console.log('POST request to log in received.');
//   try {
//     console.log('Request body:', req.body);
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       console.log('No user found with this email:', req.body.email);
//       return res.status(400).json({ message: 'Incorrect email or password.' });
//     }

//     // Validate password
//     const validPassword = userData.checkPassword(req.body.password);
//     if (!validPassword) {
//       console.log('Invalid password for user ID:', userData.id);
//       return res.status(400).json({ message: 'Incorrect email or password.' });
//     }
//     console.log('Password validated for user ID:', userData.id);

//     req.session.save(() => {
//       console.log('Session saved for user ID:', userData.id);
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.json({ user: userData, message: 'You are now logged in!' });
//       console.log('Response sent for successful login.');
//     });
//   } catch (err) {
//     console.error('Error during login:', err);
//     res.status(500).json({ message: 'Login failed. Please try again.' });
//   }
// });

// // LOGOUT
// router.post('/logout', (req, res) => {
//   console.log('POST request to log out received.');
//   if (req.session.logged_in) {
//     console.log('User logged in. Destroying session.');
//     req.session.destroy(() => {
//       console.log('Session destroyed. Sending response.');
//       res.status(204).end();
//     });
//   } else {
//     console.log('No user logged in. Sending 404 response.');
//     res.status(404).json({ message: 'No active session to log out from.' });
//   }
// });

// module.exports = router;
// console.log('User routes exported.');





// =======================================this is a revised version of the code with bycrpt 



const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
console.log('User routes initialized.');

// CREATE new user (Sign up)
router.post('/', async (req, res) => {
  try {
    console.log('Request to create new user received:', req.body);

    // Validate email and password
    if (!req.body.email || !req.body.password || req.body.password.length < 8) {
      return res.status(400).json({ message: 'Invalid email or password must be at least 8 characters.' });
    }

    const userData = await User.create(req.body);
    console.log('New user created:', userData);

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
router.post('/login', async (req, res) => {
  try {
    console.log('Request to log in received:', req.body);

    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      return res.status(400).json({ message: 'Incorrect email or password.' });
    }

    // Validate password
    const validPassword = userData.checkPassword(req.body.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Incorrect email or password.' });
    }

    // Save session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
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

module.exports = router;
console.log('User routes exported.');



// ------------------------------------------------------------------------------------break











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

