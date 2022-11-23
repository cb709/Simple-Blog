import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const PostContext = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])


  const data = { posts };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default PostContext;
