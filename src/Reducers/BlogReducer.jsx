import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
};
const BlogReducer = createSlice({
  name: "addBlogs",
  initialState,
  reducers: {
    blogData(state, action) {
      const newBlog = action.payload;
      state.blogs.push(newBlog);
    },
    deleteData(state, action) {
      const checkPersonsName = state.addBlog.find(
        (person) => person.id === action.payload
      );

      state.addBlog = state.addBlog.filter((u) => u.id !== action.payload);
    },
    retainUserData(state, action) {
      const checkPersonsName = state.addBlog.find(
        (person) => person.id === action.payload
      );

      state.addBlog = state.addBlog.filter((u) => u.id === action.payload);
    },
  },
});
export const { deleteData, retainUserData, blogData } = BlogReducer.actions;
export default BlogReducer.reducer;
