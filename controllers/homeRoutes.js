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
      mainTitle: 'Welcome to Our Blog',
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
























// const router = require('express').Router();
// const { Blog, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');
// console.log('Router initialized.');

// // Navbar items
// const navbarItems = [
//   { name: 'Home', href: '/' },
//   { name: 'Documentation', href: '/documentation' },
//   { name: 'Resources', href: '/resources' },
//   { name: 'Petition', href: '/petition' },
//   { name: 'Events', href: '/events' },
//   { name: 'Volunteer', href: '/volunteer' },
//   { name: 'Donate', href: '/donate' },
//   { name: 'Contact', href: '/contact' },
//   { name: 'Profile', href: '/profile' },
//   { name: 'Login', href: '/login' },
//   { name: 'Signup', href: '/signup' },
// ];
// console.log('Navbar items initialized.');

// // Home (All blogs)
// router.get('/', async (req, res) => {
//   console.log('GET request to / received.');
//   try {
//     const blogData = await Blog.findAll({
//       include: [{ model: User, attributes: ['name'] }],
//       order: [['date_created', 'DESC']],
//     });
//     console.log('Blogs retrieved:', blogData);

//     const blogs = blogData.map((blog) => blog.get({ plain: true }));
//     console.log('Blogs mapped to plain objects:', blogs);

//     res.render('homepage', {
//       blogs,
//       logged_in: req.session.logged_in || false,
//       title: 'Home',
//       mainTitle: 'Welcome to Our Blog',
//       subtitle: 'Discover the latest posts!',
//       navbarItems,
//     });
//     console.log('Homepage rendered with blogs.');
//   } catch (err) {
//     console.error('Error retrieving blogs:', err);
//     res.status(500).json(err);
//   }
// });

// // Single blog page
// router.get('/blog/:id', async (req, res) => {
//   console.log(`GET request to /blog/${req.params.id} received.`);
//   try {
//     const blogData = await Blog.findByPk(req.params.id, {
//       include: [
//         { model: User, attributes: ['name'] },
//         { model: Comment, include: [{ model: User, attributes: ['name'] }] },
//       ],
//     });
//     console.log('Blog data retrieved:', blogData);

//     if (!blogData) {
//       console.log('No blog found with this ID.');
//       return res.status(404).json({ message: 'No blog found with that ID!' });
//     }

//     const blog = blogData.get({ plain: true });
//     console.log('Blog mapped to plain object:', blog);

//     res.render('blog', {
//       ...blog,
//       logged_in: req.session.logged_in,
//       title: blog.title,
//       navbarItems,
//     });
//     console.log('Single blog page rendered.');
//   } catch (err) {
//     console.error('Error retrieving blog:', err);
//     res.status(500).json(err);
//   }
// });

// // Profile/Dashboard
// router.get('/profile', withAuth, async (req, res) => {
//   console.log('GET request to /profile received.');
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [Blog],
//     });
//     console.log('User data retrieved:', userData);

//     const user = userData.get({ plain: true });
//     console.log('User mapped to plain object:', user);

//     res.render('profile', {
//       ...user,
//       logged_in: true,
//       title: 'Profile',
//       navbarItems,
//     });
//     console.log('Profile page rendered.');
//   } catch (err) {
//     console.error('Error retrieving profile:', err);
//     res.status(500).json(err);
//   }
// });

// // Login page
// router.get('/login', (req, res) => {
//   console.log('GET request to /login received.');
//   if (req.session.logged_in) {
//     console.log('User already logged in. Redirecting to /profile.');
//     return res.redirect('/profile');
//   }
//   res.render('login', {
//     title: 'Login',
//     navbarItems,
//   });
//   console.log('Login page rendered.');
// });

// // Signup page
// router.get('/signup', (req, res) => {
//   console.log('GET request signup received.');
//   if (req.session.logged_in) {
//     console.log('User already logged in. Redirecting to /profile.');
//     return res.redirect('/profile');
//   }
//   res.render('signup', {
//     title: 'Signup',
//     navbarItems,
//   });
//   console.log('Signup page rendered.');
// });

// // Other pages
// const pages = [
//   { path: '/documentation', title: 'Documentation' },
//   { path: '/resources', title: 'Resources' },
//   { path: '/petition', title: 'Petition' },
//   { path: '/events', title: 'Events' },
//   { path: '/volunteer', title: 'Volunteer' },
//   { path: '/donate', title: 'Donate' },
//   { path: '/contact', title: 'Contact' },
// ];

// pages.forEach((page) => {
//   router.get(page.path, (req, res) => {
//     console.log(`GET request to ${page.path} received.`);
//     res.render(page.path.substring(1), {
//       title: page.title,
//       logged_in: req.session.logged_in,
//       navbarItems,
//     });
//     console.log(`${page.title} page rendered.`);
//   });
// });

// module.exports = router;
// console.log('Router exported.');


// res.render('homepage', {
//   blogs,
//   logged_in: req.session.logged_in || false,
//   title: 'Home',
//   mainTitle: 'Welcome to Our Blog',
//   subtitle: 'Discover the latest posts!',
//   navbarItems, // Ensure this is passed
// });



//------------------------------------------------------------------------------------------------this code works 


























// const router = require('express').Router();
// const { Blog, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// // Navbar items
// const navbarItems = [
//   { name: 'Home', href: '/' },
//   { name: 'Documentation', href: '/documentation' },
//   { name: 'Resources', href: '/resources' },
//   { name: 'Petition', href: '/petition' },
//   { name: 'Events', href: '/events' },
//   { name: 'Volunteer', href: '/volunteer' },
//   { name: 'Donate', href: '/donate' },
//   { name: 'Contact', href: '/contact' },
//   { name: 'Profile', href: '/profile' },
//   { name: 'Login', href: '/login' },
// ];

// // Home (All blogs)
// router.get('/', async (req, res) => {
//   try {
//     const blogData = await Blog.findAll({
//       include: [{ model: User, attributes: ['name'] }],
//       order: [['date_created', 'DESC']],
//     });

//     const blogs = blogData.map((blog) => blog.get({ plain: true }));

//     res.render('homepage', {
//       blogs, 
//       logged_in: req.session.logged_in || false, 
//       title: 'Home', 
//       mainTitle: 'Welcome to Our Blog',
//       subtitle: 'Discover the latest posts!',
//       navbarItems, // Navbar links
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Single blog page
// router.get('/blog/:id', async (req, res) => {
//   try {
//     const blogData = await Blog.findByPk(req.params.id, {
//       include: [
//         { model: User, attributes: ['name'] },
//         { model: Comment, include: [{ model: User, attributes: ['name'] }] },
//       ],
//     });

//     if (!blogData) {
//       return res.status(404).json({ message: 'No blog found with that ID!' });
//     }

//     const blog = blogData.get({ plain: true });

//     res.render('blog', {
//       ...blog,
//       logged_in: req.session.logged_in,
//       title: blog.title,
//       navbarItems, // Navbar links
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Profile/Dashboard
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [Blog],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true,
//       title: 'Profile',
//       navbarItems, // Navbar links
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Login page
// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     return res.redirect('/profile');
//   }
//   res.render('login', { 
//     title: 'Login',
//     navbarItems, // Navbar links
//   });
// });

// // Documentation page
// router.get('/documentation', (req, res) => {
//   res.render('documentation', {
//     title: 'Documentation',
//     logged_in: req.session.logged_in,
//     navbarItems, // Navbar links
//   });
// });

// // Resources page
// router.get('/resources', (req, res) => {
//   res.render('resources', {
//     title: 'Resources',
//     logged_in: req.session.logged_in,
//     navbarItems, // Navbar links
//   });
// });

// // Petition page
// router.get('/petition', (req, res) => {
//   res.render('petition', {
//     title: 'Petition',
//     logged_in: req.session.logged_in,
//     navbarItems, // Navbar links
//   });
// });

// // Events page
// router.get('/events', (req, res) => {
//   res.render('events', {
//     title: 'Events',
//     logged_in: req.session.logged_in,
//     navbarItems, // Navbar links
//   });
// });

// // Volunteer page
// router.get('/volunteer', (req, res) => {
//   res.render('volunteer', {
//     title: 'Volunteer',
//     logged_in: req.session.logged_in,
//     navbarItems, // Navbar links
//   });
// });

// // Donate page
// router.get('/donate', (req, res) => {
//   res.render('donate', {
//     title: 'Donate',
//     logged_in: req.session.logged_in,
//     navbarItems, // Navbar links
//   });
// });

// // Contact page
// router.get('/contact', (req, res) => {
//   res.render('contact', {
//     title: 'Contact',
//     logged_in: req.session.logged_in,
//     navbarItems, // Navbar links
//   });
// });

// module.exports = router;



// router.get('/', async (req, res) => {
//   try {
//     const blogData = await Blog.findAll({
//       include: [{ model: User, attributes: ['name'] }],
//       order: [['date_created', 'DESC']],
//     });

//     const blogs = blogData.map((blog) => blog.get({ plain: true }));

//     res.render('homepage', {
//       blogs,
//       title: 'Home',
//       logged_in: req.session.logged_in || false,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).render('error', {
//       status: 500,
//       message: 'Unable to retrieve blogs',
//     });
//   }
// });


// const router = require('express').Router();
// const { Blog, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// const navbarItems = [
//   { name: 'Home', href: '/' },
//   { name: 'Documentation', href: '/documentation' },
//   { name: 'Resources', href: '/resources' },
//   { name: 'Petition', href: '/petition' },
//   { name: 'Events', href: '/events' },
//   { name: 'Volunteer', href: '/volunteer' },
//   { name: 'Donate', href: '/donate' },
//   { name: 'Contact', href: '/contact' },
//   { name: 'Profile', href: '/profile' },
//   { name: 'Login', href: '/login' },
// ];

// router.get('/', async (req, res) => {
//   try {
//     const blogData = await Blog.findAll({
//       include: [{ model: User, attributes: ['name'] }],
//       order: [['date_created', 'DESC']],
//     });

//     const blogs = blogData.map((blog) => blog.get({ plain: true }));

//     res.render('homepage', {
//       blogs,
//       logged_in: req.session.logged_in || false,
//       title: 'Home',
//       navbarItems,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/blog/:id', async (req, res) => {
//   try {
//     const blogData = await Blog.findByPk(req.params.id, {
//       include: [
//         { model: User, attributes: ['name'] },
//         { model: Comment, include: [{ model: User, attributes: ['name'] }] },
//       ],
//     });

//     if (!blogData) {
//       return res.status(404).json({ message: 'No blog found with that ID!' });
//     }

//     const blog = blogData.get({ plain: true });

//     res.render('blog', {
//       ...blog,
//       logged_in: req.session.logged_in,
//       title: blog.title,
//       navbarItems,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [Blog],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true,
//       title: 'Profile',
//       navbarItems,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     return res.redirect('/profile');
//   }
//   res.render('login', { 
//     title: 'Login',
//     navbarItems,
//   });
// });

// router.get('/documentation', (req, res) => {
//   res.render('documentation', {
//     title: 'Documentation',
//     logged_in: req.session.logged_in,
//     navbarItems,
//   });
// });

// router.get('/resources', (req, res) => {
//   res.render('resources', {
//     title: 'Resources',
//     logged_in: req.session.logged_in,
//     navbarItems,
//   });
// });

// router.get('/petition', (req, res) => {
//   res.render('petition', {
//     title: 'Petition',
//     logged_in: req.session.logged_in,
//     navbarItems,
//   });
// });

// router.get('/events', (req, res) => {
//   res.render('events', {
//     title: 'Events',
//     logged_in: req.session.logged_in,
//     navbarItems,
//   });
// });

// router.get('/volunteer', (req, res) => {
//   res.render('volunteer', {
//     title: 'Volunteer',
//     logged_in: req.session.logged_in,
//     navbarItems,
//   });
// });

// router.get('/donate', (req, res) => {
//   res.render('donate', {
//     title: 'Donate',
//     logged_in: req.session.logged_in,
//     navbarItems,
//   });
// });

// router.get('/contact', (req, res) => {
//   res.render('contact', {
//     title: 'Contact',
//     logged_in: req.session.logged_in,
//     navbarItems,
//   });
// });

// module.exports = router;







// const router = require('express').Router();
// const { Blog, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// // Home (All blogs)
// router.get('/', async (req, res) => {
//   try {
//     const blogData = await Blog.findAll({
//       include: [
//         { model: User, attributes: ['name'] },
//       ],
//       order: [['date_created', 'DESC']],
//     });

//     const blogs = blogData.map((blog) => blog.get({ plain: true }));

//     res.render('homepage', {
//       blogs,
//       logged_in: req.session.logged_in || false,
//       title: 'Home',
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Single blog page
// router.get('/blog/:id', async (req, res) => {
//   try {
//     const blogData = await Blog.findByPk(req.params.id, {
//       include: [
//         { model: User, attributes: ['name'] },
//         { 
//           model: Comment,
//           include: [{ model: User, attributes: ['name'] }]
//         },
//       ],
//     });

//     if (!blogData) {
//       return res.status(404).json({ message: 'No blog found with that ID!' });
//     }

//     const blog = blogData.get({ plain: true });

//     res.render('blog', {
//       ...blog,
//       logged_in: req.session.logged_in,
//       title: blog.title,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Profile/Dashboard
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Get user data
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [Blog],
//     });

//     const user = userData.get({ plain: true });
//     res.render('profile', {
//       ...user,
//       logged_in: true,
//       title: 'Profile',
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Login page
// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     return res.redirect('/profile');
//   }
//   res.render('login', { title: 'Login' });
// });

// // Documentation page
// router.get('/documentation', (req, res) => {
//   res.render('documentation', {
//     title: 'Documentation',
//     logged_in: req.session.logged_in,
//   });
// });

// // Resources page
// router.get('/resources', (req, res) => {
//   res.render('resources', {
//     title: 'Resources',
//     logged_in: req.session.logged_in,
//   });
// });

// // Petition page
// router.get('/petition', (req, res) => {
//   res.render('petition', {
//     title: 'Petition',
//     logged_in: req.session.logged_in,
//   });
// });

// // Events page
// router.get('/events', (req, res) => {
//   res.render('events', {
//     title: 'Events',
//     logged_in: req.session.logged_in,
//   });
// });

// // Volunteer page
// router.get('/volunteer', (req, res) => {
//   res.render('volunteer', {
//     title: 'Volunteer',
//     logged_in: req.session.logged_in,
//   });
// });

// // Donate page
// router.get('/donate', (req, res) => {
//   res.render('donate', {
//     title: 'Donate',
//     logged_in: req.session.logged_in,
//   });
// });

// // Contact page
// router.get('/contact', (req, res) => {
//   res.render('contact', {
//     title: 'Contact',
//     logged_in: req.session.logged_in,
//   });
// });

// module.exports = router;
