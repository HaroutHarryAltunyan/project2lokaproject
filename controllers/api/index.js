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