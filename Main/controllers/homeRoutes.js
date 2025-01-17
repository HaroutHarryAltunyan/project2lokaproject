const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all blogs and JOIN with user data
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

        // Debugging: Log the serialized blogs data
        console.log('Blogs:', blogs);

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      blogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          include: [User]
        },
      ],
    });

    const blog = blogData.get({ plain: true });
console.log(blog)
    res.render('blog', {
      ...blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});








// Documentation Page Route
router.get('/documentation', async (req, res) => {
  try {
    // Render the 'documentation' template
    res.render('documentation', {
      title: 'Documentation', // Dynamic page title
      logged_in: req.session.logged_in, // Pass the login status
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Resources Route
router.get('/resources', async (req, res) => {
  try {
    res.render('resources', {
      title: 'Resources',
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Petition Route
router.get('/petition', async (req, res) => {
  try {
    res.render('petition', {
      title: 'Petition',
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Events Route
router.get('/events', async (req, res) => {
  try {
    res.render('events', {
      title: 'Events',
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Volunteer Route
router.get('/volunteer', async (req, res) => {
  try {
    res.render('volunteer', {
      title: 'Volunteer',
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Donate Route
router.get('/donate', async (req, res) => {
  try {
    res.render('donate', {
      title: 'Donate',
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Contact Route
router.get('/contact', async (req, res) => {
  try {
    res.render('contact', {
      title: 'Contact',
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});






module.exports = router;
