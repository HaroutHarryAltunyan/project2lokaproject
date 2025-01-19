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



// THIS IS FOR THE PROJECT !!!!!!!!!!




// const router = require('express').Router();
// const { Blog, Comment } = require('../../models');
// const withAuth = require('../../utils/auth');

// console.log('Blog and Comment routes initialized.');

// // CREATE new Blog
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

// // CREATE new Comment
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

// // DELETE a Blog
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

// module.exports = router;
// console.log('Blog and Comment routes exported.');
















// const router = require('express').Router();
// const { Blog, Comment } = require('../../models');
// const withAuth = require('../../utils/auth');

// // CREATE new Blog
// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newBlog = await Blog.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });
//     res.status(200).json(newBlog);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // CREATE new Comment
// router.post('/comment/:id', withAuth, async (req, res) => {
//   try {
//     const newComment = await Comment.create({
//       content: req.body.content,
//       user_id: req.session.user_id,
//       blog_id: req.params.id,
//     });
//     res.status(200).json(newComment);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // DELETE a Blog
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const blogData = await Blog.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id, // only allow owners to delete
//       },
//     });

//     if (!blogData) {
//       return res.status(404).json({ message: 'No blog found with this id!' });
//     }

//     res.status(200).json(blogData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
