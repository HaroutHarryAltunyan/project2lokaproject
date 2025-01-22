const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;









// add this back later










// module.exports = (req, res, next) => {
//   console.log('Authentication middleware triggered.');
  
//   if (!req.session.logged_in) {
//     console.log('User not logged in. Redirecting to /login.');
//     return res.redirect('/login');
//   }
  
//   console.log('User is logged in. Proceeding to next middleware.');
//   next();
// };



// module.exports = (req, res, next) => {
//   if (!req.session.logged_in) {
//     return res.redirect('/login');
//   }
//   next();
// };







