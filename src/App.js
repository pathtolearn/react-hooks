import React, { useState, useReducer, useEffect } from "react";

import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import UserBar from "./user/UserBar";

const defaultPosts = [
  {
    title: "React Hooks",
    content: "The greatest thing since sliced bread!",
    author: "Daniel Bugl"
  },
  {
    title: "Using React Fragments",
    content: "Keeping the DOM tree clean!",
    author: "Daniel Bugl"
  }
];

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      throw new Error();
  }
}

function postsReducer(state, action) {
  switch (action.type) {
    case "CREATE_POST":
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author
      };
      return [newPost, ...state];
  }
}

function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    posts: postsReducer(state.posts, action)
  };
}

export default function App() {
  // const [user, dispatchUser] = useReducer(userReducer, "");
  // const [posts, dispatchPosts] = useReducer(postsReducer, defaultPosts);

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: defaultPosts
  });

  const { user, posts } = state;

  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = `${user} - React Hooks Blog`;
  }, [title, user]);

  setTimeout(() => {
    setTitle("Dummy");
  }, 2000);

  return (
    <div style={{ padding: 8 }}>
      <UserBar user={user} dispatch={dispatch} />
      <br />
      {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}
