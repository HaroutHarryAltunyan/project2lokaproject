const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


// // ----------------------use this after you figure out what is happening in miniproject

// ------------------------------------------THIS IS FOR THE PROJECT !!!!!!!!!!



// // Import Dependencies
// const router = require('express').Router();
// const { Blog, Comment } = require('../../models');
// const withAuth = require('../../utils/auth');
// // //1.	require('express').Router(): Imports the Router module from Express to create modular route handlers.
// // //2.	{ Blog, Comment } = require('../../models'): Destructures Blog and Comment models from the models directory for database interaction.
// // //3.	withAuth = require('../../utils/auth'): Imports a custom middleware function withAuth to protect routes (ensure the user is authenticated).

// console.log('Blog and Comment routes initialized.');
// // //•	Logs a message to indicate that the route handlers for blogs and comments are initialized.

// // //CREATE new Blog
// router.post('/', withAuth, async (req, res) => {
//   console.log('POST request to create a new blog received.');
//   try {
//     console.log('Request body:', req.body);
//     console.log('User ID from session:', req.session.user_id);
    
//     const newBlog = await Blog.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });
    
//     console.log('New blog created:', newBlog);
//     res.status(200).json(newBlog);
//   } catch (err) {
//     console.error('Error creating new blog:', err);
//     res.status(400).json(err);
//   }
// });
// // //1.	router.post('/', withAuth, async (req, res): Handles a POST request to create a new blog. Protected by the withAuth middleware to ensure the user is logged in.
// // //2.	Logs a message when a POST request is received.
// // //3.	Logs the request body and user ID from the session for debugging.
// // //4.	Blog.create(): Creates a new blog record in the database:
// // //•	...req.body: Spreads the request body to populate the blog fields.
// // //•	user_id: req.session.user_id: Links the blog to the logged-in user’s ID from the session.
// // //5.	Logs the newly created blog.
// // //6.	Sends a 200 status response with the newly created blog as JSON.
// // //7.	catch: If an error occurs:
// // //•	Logs the error.
// // //•	Sends a 400 status response with the error details.

// // //CREATE new Comment
// router.post('/comment/:id', withAuth, async (req, res) => {
//   console.log(`POST request to create a new comment for blog ID ${req.params.id}.`);
//   try {
//     console.log('Request body:', req.body);
//     console.log('User ID from session:', req.session.user_id);
    
//     const newComment = await Comment.create({
//       content: req.body.content,
//       user_id: req.session.user_id,
//       blog_id: req.params.id,
//     });
    
//     console.log('New comment created:', newComment);
//     res.status(200).json(newComment);
//   } catch (err) {
//     console.error('Error creating new comment:', err);
//     res.status(400).json(err);
//   }
// });
// // //1.	router.post('/comment/:id', withAuth, async (req, res): Handles a POST request to add a comment to a specific blog. The :id parameter refers to the blog’s ID. Protected by the withAuth middleware.
// // //2.	Logs the blog ID, request body, and user ID from the session for debugging.
// // //3.	Comment.create(): Creates a new comment record in the database:
// // /•	content: req.body.content: Sets the comment content.
// // //•	user_id: req.session.user_id: Links the comment to the logged-in user.
// // //•	blog_id: req.params.id: Links the comment to the blog ID from the URL.
// // //4.	Logs the newly created comment.
// // //5.	Sends a 200 status response with the new comment as JSON.
// // //6.	catch: If an error occurs:
// // //•	Logs the error.
// // //•	Sends a 400 status response with the error details.

// // //DELETE a Blog
// router.delete('/:id', withAuth, async (req, res) => {
//   console.log(`DELETE request to delete blog with ID ${req.params.id}.`);
//   try {
//     console.log('User ID from session:', req.session.user_id);
    
//     const blogData = await Blog.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id, // only allow owners to delete
//       },
//     });

//     if (!blogData) {
//       console.log('No blog found with this ID and user ownership.');
//       return res.status(404).json({ message: 'No blog found with this id!' });
//     }

//     console.log('Blog deleted:', blogData);
//     res.status(200).json(blogData);
//   } catch (err) {
//     console.error('Error deleting blog:', err);
//     res.status(500).json(err);
//   }
// });
// // //1.	router.delete('/:id', withAuth, async (req, res): Handles a DELETE request to remove a blog by its ID. The :id parameter represents the blog’s ID. Protected by the withAuth middleware.
// // //2.	Logs the blog ID and user ID from the session for debugging.
// // //3.	Blog.destroy(): Deletes the blog record from the database if:
// // //•	id: req.params.id: Matches the blog ID in the request URL.
// // //•	user_id: req.session.user_id: Matches the logged-in user’s ID (ensures only the blog’s owner can delete it).
// // //4.	if (!blogData):
// // //•	If no matching blog is found, logs a message and returns a 404 status with an error message.
// // //5.	Logs the deleted blog data and sends a 200 status response with it.
// // //6.	catch: If an error occurs:
// // //•	Logs the error.
// // //•	Sends a 500 status response with the error details.

// // //Export the Router
// module.exports = router;
// console.log('Blog and Comment routes exported.');
// // //1.	module.exports = router: Exports the router instance so other parts of the app can use these routes.
// // //2.	Logs a message confirming the routes have been exported.

// // //Summary
// // 	//•	Purpose: This code defines three routes to:
// // 	//1.	Create a new blog.
// // 	//2.	Create a new comment for a specific blog.
// // 	//3.	Delete a blog (if the user is its owner).
// // 	//•	Authentication: The withAuth middleware ensures only logged-in users can access these routes.
// // 	//•	Debugging Logs: Includes console logs to aid in debugging during development.














