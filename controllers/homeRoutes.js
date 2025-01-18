const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Home (All blogs)
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        { model: User, attributes: ['name'] },
      ],
      order: [['date_created', 'DESC']],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in || false,
      title: 'Home',
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Single blog page
router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ['name'] },
        { 
          model: Comment,
          include: [{ model: User, attributes: ['name'] }]
        },
      ],
    });

    if (!blogData) {
      return res.status(404).json({ message: 'No blog found with that ID!' });
    }

    const blog = blogData.get({ plain: true });

    res.render('blog', {
      ...blog,
      logged_in: req.session.logged_in,
      title: blog.title,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Profile/Dashboard
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Get user data
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [Blog],
    });

    const user = userData.get({ plain: true });
    res.render('profile', {
      ...user,
      logged_in: true,
      title: 'Profile',
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    return res.redirect('/profile');
  }
  res.render('login', { title: 'Login' });
});

// Documentation page
router.get('/documentation', (req, res) => {
  res.render('documentation', {
    title: 'Documentation',
    logged_in: req.session.logged_in,
  });
});

// Resources page
router.get('/resources', (req, res) => {
  res.render('resources', {
    title: 'Resources',
    logged_in: req.session.logged_in,
  });
});

// Petition page
router.get('/petition', (req, res) => {
  res.render('petition', {
    title: 'Petition',
    logged_in: req.session.logged_in,
  });
});

// Events page
router.get('/events', (req, res) => {
  res.render('events', {
    title: 'Events',
    logged_in: req.session.logged_in,
  });
});

// Volunteer page
router.get('/volunteer', (req, res) => {
  res.render('volunteer', {
    title: 'Volunteer',
    logged_in: req.session.logged_in,
  });
});

// Donate page
router.get('/donate', (req, res) => {
  res.render('donate', {
    title: 'Donate',
    logged_in: req.session.logged_in,
  });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact',
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
