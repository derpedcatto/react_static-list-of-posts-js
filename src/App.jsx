import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getPostCommentsById(postId) {
  return commentsFromServer.filter(comment => {
    return comment.postId === postId;
  });
}

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getPostCommentsById(post.id),
}));

export const App = () => {
  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={posts} />
    </section>
  );
};
