// const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');

// router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);

// module.exports = router;



//THIS IS FOR THE PROJECT !!!!!!!




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




// break





// const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const blogRoutes = require('./blogRoutes');

// router.use('/users', userRoutes);
// router.use('/blogs', blogRoutes);

// module.exports = router;