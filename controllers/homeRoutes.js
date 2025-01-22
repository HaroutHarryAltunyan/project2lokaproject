const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
console.log('Router initialized.');

// Navbar items
const navbarItems = [
  { name: 'Home', href: '/' },
  { name: 'Documentation', href: '/documentation' },
  { name: 'Resources', href: '/resources' },
  { name: 'Petition', href: '/petition' },
  { name: 'Events', href: '/events' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Donate', href: '/donate' },
  { name: 'Contact', href: '/contact' },
  { name: 'Profile', href: '/profile' },
  { name: 'Login', href: '/login' },
  { name: 'Signup', href: '/signup' },
];
console.log('Navbar items initialized.');

// Home (All blogs)
router.get('/', async (req, res) => {
  console.log('GET request to / received.');
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User, attributes: ['name'] }],
      order: [['date_created', 'DESC']],
    });
    console.log('Blogs retrieved:', blogData);

    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log('Blogs mapped to plain objects:', blogs);

    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in || false,
      title: 'Home',
      mainTitle: 'Welcome to the LOKA Blog',
      subtitle: 'Discover the latest posts!',
      navbarItems,
    });
    console.log('Homepage rendered with blogs.');
  } catch (err) {
    console.error('Error retrieving blogs:', err);
    res.status(500).json(err);
  }
});

// Single blog page
router.get('/blog/:id', async (req, res) => {
  console.log(`GET request to /blog/${req.params.id} received.`);
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ['name'] },
        { model: Comment, include: [{ model: User, attributes: ['name'] }] },
      ],
    });
    console.log('Blog data retrieved:', blogData);

    if (!blogData) {
      console.log('No blog found with this ID.');
      return res.status(404).json({ message: 'No blog found with that ID!' });
    }

    const blog = blogData.get({ plain: true });
    console.log('Blog mapped to plain object:', blog);

    res.render('blog', {
      ...blog,
      logged_in: req.session.logged_in,
      title: blog.title,
      navbarItems,
    });
    console.log('Single blog page rendered.');
  } catch (err) {
    console.error('Error retrieving blog:', err);
    res.status(500).json(err);
  }
});

// Profile/Dashboard
router.get('/profile', withAuth, async (req, res) => {
  console.log('GET request to /profile received.');
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [Blog],
    });
    console.log('User data retrieved:', userData);

    const user = userData.get({ plain: true });
    console.log('User mapped to plain object:', user);

    res.render('profile', {
      ...user,
      logged_in: true,
      title: 'Profile',
      navbarItems,
    });
    console.log('Profile page rendered.');
  } catch (err) {
    console.error('Error retrieving profile:', err);
    res.status(500).json(err);
  }
});

// Login page
router.get('/login', (req, res) => {
  console.log('GET request to /login received.');
  if (req.session.logged_in) {
    console.log('User already logged in. Redirecting to /profile.');
    return res.redirect('/profile');
  }
  res.render('login', {
    title: 'Login',
    navbarItems,
  });
  console.log('Login page rendered.');
});

// Signup page
router.get('/signup', (req, res) => {
  console.log('GET request to /signup received.');
  if (req.session.logged_in) {
    console.log('User already logged in. Redirecting to /profile.');
    return res.redirect('/profile');
  }
  res.render('signup', {
    title: 'Signup',
    navbarItems,
  });
  console.log('Signup page rendered.');
});

// Other static pages
const pages = [
  { path: '/documentation', title: 'Documentation' },
  { path: '/resources', title: 'Resources' },
  { path: '/petition', title: 'Petition' },
  { path: '/events', title: 'Events' },
  { path: '/volunteer', title: 'Volunteer' },
  { path: '/donate', title: 'Donate' },
  { path: '/contact', title: 'Contact' },
];

pages.forEach((page) => {
  router.get(page.path, (req, res) => {
    console.log(`GET request to ${page.path} received.`);
    res.render(page.path.substring(1), {
      title: page.title,
      logged_in: req.session.logged_in,
      navbarItems,
    });
    console.log(`${page.title} page rendered.`);
  });
});

// Export the router
module.exports = router;
console.log('Router exported.');





















