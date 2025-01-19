const router = require('express').Router();
console.log('Router initialized.');

const apiRoutes = require('./api');
console.log('API routes module loaded.');

const homeRoutes = require('./homeRoutes');
console.log('Home routes module loaded.');

router.use('/', homeRoutes);
console.log('Home routes mounted at /.');

router.use('/api', apiRoutes);
console.log('API routes mounted at /api.');

// 404 handler if no routes match
router.use((req, res) => {
  console.log(`404 error for URL: ${req.originalUrl}`);
  res.status(404).render('404', { layout: 'main', title: 'Not Found' });
  console.log('404 page rendered.');
});

module.exports = router;
console.log('Router exported.');


// const router = require('express').Router();
// const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes');

// router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

// // 404 handler if no routes match
// router.use((req, res) => {
//   res.status(404).render('404', { layout: 'main', title: 'Not Found' });
// });

// module.exports = router;