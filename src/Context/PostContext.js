import React, { createContext } from "react";

export const DataContext = createContext();

const PostContext = ({ children }) => {
  const user = { name: "Chinmoy" };

  const data = { user };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default PostContext;
