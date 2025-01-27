import { Post as PostType } from "../../types/types";
import more from "../../assets/images/more.svg";
import CommentList from "./CommentList";
import { getTImeAndData } from "../../utils/getTImeAndData";
import { useEffect, useState } from "react";
import publicPost from "../../assets/images/public.svg";
import comment from "../../assets/images/comment.svg";
import like from "../../assets/images/like.svg";
import share from "../../assets/images/share.svg";
import saved from "../../assets/images/saved.svg";

interface Props {
	post: PostType | null; // Allow post to be nullable
	onAddComment: (postId: string, content: string) => void;
	onReply: (postId: string, commentId: string, content: string) => void;
}

export default function Post({ post, onAddComment, onReply }: Props) {
	const [currentDateTime, setCurrentDateTime] = useState("");
	const [initialPosts, setInitialPosts] = useState<PostType[]>([]);



	useEffect(() => {
		async function fetchPreloadedPosts() {
			const response = await fetch("https://dummyjson.com/posts?limit=4");
			const data = await response.json();

			// Map the API response to the expected PostType structure
			const preloadedPosts = data.posts.map((post: any) => ({
				id: post.id.toString(),
				title: post.title,
				content: post.body,
				comments: [], // Initially, comments are empty
				hashtag: post.tags,
				reactions: {
					likes: post.reactions.likes || 0,
					comments: post.reactions.dislikes || 0,
					shares: post.views || 0,
				},
			}));

			setInitialPosts(preloadedPosts);
		}

		fetchPreloadedPosts();
	}, []);

	useEffect(() => {
		const now = new Date();
		const formattedDateTime = getTImeAndData(now);
		setCurrentDateTime(formattedDateTime);
	}, []);

	

	// Helper function to render individual posts
	const renderPost = (postData: PostType) => (
		<div key={postData.id} className="py-3 bg-white shadow rounded-xl mb-4 w-full">
			{/* Post content */}
			<div className="flex items-start w-full justify-between px-5">
				<div className="flex">
					<div className="w-11 h-11 mr-4">
						<img
							src="https://randomuser.me/api/portraits/men/34.jpg"
							alt="userImage"
							className="rounded-full"
						/>
					</div>
					<div>
						<p className="text-gray-800 font-bold">John Doe</p>
						<p className="text-gray-400 text-xs flex items-center">
							{currentDateTime}
							<span>
								<img src={publicPost} alt="post-type" className="w-3.5 ml-1.5" />
							</span>
						</p>
					</div>
				</div>
				<div>
					<img src={more} alt="options" className="w-5" />
				</div>
			</div>
			<div className="text-gray-700 mt-3 sm:mt-6 px-5">
				<p className="text-sm sm:text-base">{postData.content}</p>
				<p className="text-sm sm:text-base font-bold">
					{postData.hashtag?.map((tag: string) => `#${tag}`).join(" ")}
				</p>
			</div>
			<hr className="h-1 text-[#EDEDF0] mt-3 sm:mt-6" />
			<div className="flex items-center justify-around sm:justify-between px-2 sm:px-5 m-2">
				<div className="flex gap-1.5">
					<img src={like} alt="" className="w-4 sm:w-5 cursor-pointer" />
					<p className="text-xs sm:text-sm">
						<span className="pr-1.5">{postData.reactions?.likes || 0}</span>Likes
					</p>
				</div>
				<div className="flex gap-1.5">
					<img src={comment} alt="" className="w-4 sm:w-5 cursor-pointer" />
					<p className="text-xs sm:text-sm">
						<span className="pr-1.5">{postData.reactions?.comments || 0}</span>Comments
					</p>
				</div>
				<div className="flex gap-1.5">
					<img src={share} alt="" className="w-4 sm:w-5 cursor-pointer" />
					<p className="text-xs sm:text-sm">
						<span className="pr-1.5">{postData.reactions?.shares || 0}</span>Share
					</p>
				</div>
				<div className="flex gap-1.5">
					<img src={saved} alt="" className="w-4 sm:w-5 cursor-pointer" />
					<p className="text-xs sm:text-sm">
						<span className="pr-1.5">0</span>Saved
					</p>
				</div>
			</div>
			<hr className="h-1 text-[#EDEDF0] mt-3" />
			<CommentList
				comments={postData.comments}
				onReply={(commentId, content) => onReply(postData.id, commentId, content)}
			/>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const content = (e.target as any).elements.commentContent.value;
					onAddComment(postData.id, content);
					(e.target as any).reset();
				}}
				className="mt-4 px-5"
			>
				<div className="flex">
					<div className="w-7 h-7 sm:w-8 sm:h-8 mr-2">
						<img
							src="https://randomuser.me/api/portraits/men/34.jpg"
							alt="user"
							className="rounded-full"
						/>
					</div>
					<input
						type="text"
						name="commentContent"
						placeholder="Add a comment..."
						className="rounded-lg bg-[#ededf080] w-full px-4 py-1 sm:py-2 mb-2 placeholder:text-xs text-sm sm:text-base border border-gray-300  focus:outline-none focus:border-slate-500 font-normal"
						required
					/>
				</div>
				<button
					type="submit"
					className="bg-[#111518] text-white px-3 sm:px-4 py-1 rounded-lg h-9 text-xs font-semibold sm:text-sm flex place-self-end items-center mt-1"
				>
					Comment
				</button>
			</form>
		</div>
	);
	


	return (
		<>
			{/* Conditionally render the main post if it exists */}
			{post && renderPost(post)}
			{/* Always render initialPosts */}
			{initialPosts.map((initialPost) => renderPost(initialPost))}

			<div className="pb-32">
			</div>
		</>
	);
}
