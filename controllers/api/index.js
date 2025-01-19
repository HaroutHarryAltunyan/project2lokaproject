const router = require('express').Router();
console.log('Router initialized.');

const userRoutes = require('./userRoutes');
console.log('User routes module loaded.');

const blogRoutes = require('./blogRoutes');
console.log('Blog routes module loaded.');

router.use('/users', userRoutes);
console.log('User routes mounted at /users.');

router.use('/blogs', blogRoutes);
console.log('Blog routes mounted at /blogs.');

module.exports = router;
console.log('Router exported.');

// const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const blogRoutes = require('./blogRoutes');

// router.use('/users', userRoutes);
// router.use('/blogs', blogRoutes);

// module.exports = router;