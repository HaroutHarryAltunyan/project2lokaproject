const newFormHandler = async (event) => {
  event.preventDefault();
  const blogId = event.target.getAttribute('value');
  const content = document.querySelector('#comment-content').value.trim();

  if (blogId && content) {
    const response = await fetch(`/api/blogs/comment/${blogId}`, {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add comment');
    }
  }
};

document
  .querySelector('#commenter')
  ?.addEventListener('click', newFormHandler);