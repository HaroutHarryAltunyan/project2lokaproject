// const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');

// router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);

// module.exports = router;



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


// // router.use('/blogs', blogRoutes);
// // console.log('Blog routes mounted at /blogs.');

// router.use('/project', projectRoutes);
// console.log('project routes mounted at /project.');

// ;

// module.exports = router;
// console.log('Router exported.');




// break




const router = require('express').Router();
console.log('Router initialized.');

const userRoutes = require('./userRoutes');
console.log('User routes module loaded.');

const projectRoutes = require('./projectRoutes'); // Correctly require the projectRoutes module
console.log('Project routes module loaded.');

router.use('/users', userRoutes);
console.log('User routes mounted at /users.');

router.use('/project', projectRoutes); // Now this will work
console.log('Project routes mounted at /project.');

module.exports = router;
console.log('Router exported.');