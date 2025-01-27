// import { useLocalStorage } from "../../hooks/useLocalStorage";
// import mockPosts from "../../mock/MockPosts";
// import { addComment, addPost, addReply } from "../../state/Posts";
// import { Post } from "../../types/types";
// import PostForm from "../Posts/PostForm";
// import PostList from "../Posts/PostList";

// export default function CreatePost() {
// 	const [posts, setPosts] = useLocalStorage<Post[]>("posts", mockPosts);

// 	const handleAddPost = (title: string, content: string) => {
// 		setPosts((prevPosts) => addPost(prevPosts, title, content));
// 	};

// 	const handleAddComment = (postId: string, content: string) => {
// 		setPosts((prevPosts) => addComment(prevPosts, postId, content));
// 	};

// 	const handleReply = (
// 		postId: string,
// 		commentId: string,
// 		content: string
// 	) => {
// 		setPosts((prevPosts) =>
// 			addReply(prevPosts, postId, commentId, content)
// 		);
// 	};


// 	return (
// 		<div className='container mx-auto px-2 sm:px-10 sm:py-4'>
// 			{/* <h1 className="text-3xl font-bold mb-4">Community Connect</h1> */}
// 			<PostForm onAddPost={handleAddPost} />
// 			<PostList
// 				posts={posts}
// 				onAddComment={handleAddComment}
// 				onReply={handleReply}
// 			/>
// 		</div>
// 	);
// }

import { useLocalStorage } from "../../hooks/useLocalStorage";
import mockPosts from "../../mock/MockPosts"; // Ensure mockPosts is imported properly
import { addComment, addPost, addReply } from "../../state/Posts";
import { Post } from "../../types/types";
import PostForm from "../Posts/PostForm";
import PostList from "../Posts/PostList";

export default function CreatePost() {
	const [posts, setPosts] = useLocalStorage<Post[]>("posts", mockPosts);

	// Handler to add a new post
	const handleAddPost = (title: string, content: string) => {
		setPosts((prevPosts) => addPost(prevPosts, title, content));
	};

	// Handler to add a new comment to a post
	const handleAddComment = (postId: string, content: string) => {
		setPosts((prevPosts) => addComment(prevPosts, postId, content));
	};

	// Handler to add a reply to a comment
	const handleReply = (postId: string, commentId: string, content: string) => {
		setPosts((prevPosts) => addReply(prevPosts, postId, commentId, content));
	};

	return (
		<div className="container mx-auto px-2 sm:px-10 sm:py-4">
			<PostForm onAddPost={handleAddPost} />
			<PostList posts={posts} onAddComment={handleAddComment} onReply={handleReply} />
		</div>
	);
}
