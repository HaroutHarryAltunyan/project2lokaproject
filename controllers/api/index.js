const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;



//THIS IS FOR THE PROJECT !!!!!!!
// // ----------------------use this after you figure out what is happening in miniproject




// const router = require('express').Router();
// console.log('Router initialized.');

// const userRoutes = require('./userRoutes');
// console.log('User routes module loaded.');

// const blogRoutes = require('./projectRoutes');
// console.log('Blog routes module loaded.');

// router.use('/users', userRoutes);
// console.log('User routes mounted at /users.');

// router.use('/blogs', blogRoutes);
// console.log('Blog routes mounted at /blogs.');

// module.exports = router;
// console.log('Router exported.');




// break
