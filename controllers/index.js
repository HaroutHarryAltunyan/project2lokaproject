const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// 404 handler if no routes match
router.use((req, res) => {
  res.status(404).render('404', { layout: 'main', title: 'Not Found' });
});

module.exports = router;