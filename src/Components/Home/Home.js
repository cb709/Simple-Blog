import React, { useContext } from "react";
import { DataContext } from "../../Context/PostContext";
import Row from "react-bootstrap/Row";
import Post from "../Post/Post";

const Home = () => {
  const { posts } = useContext(DataContext);

  return (
    <div>
      <header></header>
      <h2 className="mb-4">All Posts Here</h2>
      <Row xs={1} md={3} className="g-4">
        {
            posts.slice(0,20).map(post => <Post key={post.id} post={post}></Post>)
        }
      </Row>
    </div>
  );
};

export default Home;
