/* eslint-disable @typescript-eslint/no-explicit-any */
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
	post: PostType;
	onAddComment: (postId: string, content: string) => void;
	onReply: (postId: string, commentId: string, content: string) => void;
}

export default function Post({ post, onAddComment, onReply }: Props) {
	const [currentDateTime, setCurrentDateTime] = useState("");

	console.log(post)
	useEffect(() => {
		const now = new Date();
		const formattedDateTime = getTImeAndData(now);
		setCurrentDateTime(formattedDateTime);
	}, []);


	return (
		<>
			<div className='py-3 bg-white shadow rounded-xl mb-4 w-full'>
				<div className='flex items-start w-full justify-between px-5'>
					<div className='flex '>
						<div className='w-11 h-11 mr-4'>
							<img
								src='https://randomuser.me/api/portraits/men/34.jpg'
								alt='userImage'
								className='rounded-full'
							/>
						</div>
						<div>
							<p className='text-gray-800 font-bold'>John Doe</p>
							<p className='text-gray-400 text-xs flex items-center '>
								{currentDateTime}{" "}
								<span>
									<img
										src={publicPost}
										alt='post-type'
										className='w-3.5 ml-1.5'
									/>
								</span>
							</p>
						</div>
					</div>
					<div className=''>
						<img
							src={more}
							alt='options'
							className='w-5 cursor-pointer'
						/>
					</div>
				</div>
				<div className='text-gray-700 mt-3 sm:mt-6 px-5'>
					{/* <h2 className='font-bold'>{post.title}</h2> */}
					<p className="text-sm sm:text-base">{post.content}</p>
					<p className="text-sm sm:text-base font-bold">
						{post.hashtag?.map((tag: string) => `#${tag}`).join(" ")}
					</p>
				</div>

				<hr className='h-1 text-[#EDEDF0] mt-3 sm:mt-6' />

				<div className='flex items-center justify-around sm:justify-between px-2 sm:px-5 m-2'>
					<div className='flex gap-1.5'>
						<img
							src={like}
							alt=''
							className='w-4 sm:w-5 cursor-pointer'
						/>
						<p className='text-xs sm:text-sm '>
							<span className='pr-1.5'>{post.reactions?.likes}</span>Likes
						</p>
					</div>
					<div className='flex gap-1.5'>
						<img
							src={comment}
							alt=''
							className='w-4 sm:w-5 cursor-pointer'
						/>
						<p className='text-xs sm:text-sm'>
							<span className='pr-1.5'>{post.reactions?.comments}</span>Comments
						</p>
					</div>
					<div className='flex gap-1.5'>
						<img
							src={share}
							alt=''
							className='w-4 sm:w-5 cursor-pointer'
						/>
						<p className='text-xs sm:text-sm'>
							<span className='pr-1.5'>{post.reactions?.shares}</span>Share
						</p>
					</div>
					<div className='flex gap-1.5'>
						<img
							src={saved}
							alt=''
							className='w-4 sm:w-5 cursor-pointer'
						/>
						<p className='text-xs sm:text-sm'>
							<span className='pr-1.5'>0</span>Saved
						</p>
					</div>
				</div>

				<hr className='h-1 text-[#EDEDF0] mt-3' />

				<CommentList
					comments={post.comments}
					onReply={(commentId, content) =>
						onReply(post.id, commentId, content)
					}
				/>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						const content = (e.target as any).elements.commentContent
							.value;
						onAddComment(post.id, content);
						(e.target as any).reset();
					}}
					className='mt-4 px-5'
				>
					<div className="flex">
						<div className='w-7 h-7 sm:w-8 sm:h-8 mr-2'>
							<img
								src='https://randomuser.me/api/portraits/men/34.jpg'
								alt='user'
								className="rounded-full"
							/>
						</div>

						<input
							type='text'
							name='commentContent'
							placeholder='Add a comment...'
							className='rounded-lg bg-[#ededf080] w-full px-4 py-1 sm:py-2 mb-2 placeholder:text-xs text-sm sm:text-base border border-gray-300  focus:outline-none focus:border-slate-500 font-normal'
							required
						/>
					</div>

					<button
						type='submit'
						className='bg-[#111518] cursor-pointer text-white px-3 sm:px-4 py-1 rounded-lg h-9 text-xs font-semibold sm:text-sm flex place-self-end items-center mt-1'
					>
						Comment
					</button>
				</form>
			</div>

		</>

	);
}
