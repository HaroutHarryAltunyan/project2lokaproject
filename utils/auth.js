module.exports = (req, res, next) => {
  console.log('Authentication middleware triggered.');
  
  if (!req.session.logged_in) {
    console.log('User not logged in. Redirecting to /login.');
    return res.redirect('/login');
  }
  
  console.log('User is logged in. Proceeding to next middleware.');
  next();
};







