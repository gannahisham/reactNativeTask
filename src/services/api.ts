import { Post } from "../models/Post";
import { Comment } from "../models/Comment";

const BASE_URL = "https://gorest.co.in/public/v2";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return await response.json();
};
//returns a list of posts from the API

export const fetchComments = async (postId: number): Promise<Comment[]> => {
  const response = await fetch(
    `https://gorest.co.in/public/v2/comments?post_id=${postId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }
  return await response.json();
};
//now i can load comments from the API using the post's ID.
