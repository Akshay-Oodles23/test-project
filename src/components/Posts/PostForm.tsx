import React, { useState } from "react";
import pen from "../../assets/images/pen.svg";
interface Props {
	onAddPost: (title: string, content: string) => void;
}

export default function PostForm({ onAddPost }: Props) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onAddPost(title, content);
		setTitle("");
		setContent("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='bg-white shadow rounded-xl mb-6 sm:mb-10 '
		>
			<h1 className='my-3 border border-b-[#EDEDF0] border-t-0 border-l-0 border-r-0 px-5 py-3 flex gap-2 items-center font-semibold text-base sm:text-lg'>
				<span className=''>
					<img
						src={pen}
						alt='create_post'
						className='w-4 sm:w-5'
					/>
				</span>
				Post something
			</h1>
			<div className='px-5 py-2 flex items-start'>
				<div className=' w-12 h-12 mr-3'>
					<img
						src='https://randomuser.me/api/portraits/men/34.jpg'
						alt=''
						className='rounded-full'
					/>
				</div>
				<div className='flex flex-col items-center w-full gap-1'>
					{/* <input
						type='text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder='Add a title here...'
						className='rounded-lg bg-[#ededf080] w-full px-4 py-2 mb-2 placeholder:text-xs border border-gray-300  focus:outline-none focus:border-slate-500 font-normal'
						required
					/> */}
					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
						placeholder="What's in your mind..."
						className='bg-[#ededf080] w-full h-20 px-4 py-2 mb-2 placeholder:text-xs resize-none border border-gray-300 rounded-lg  font-normal focus:outline-none focus:border-slate-500'
						required
					/>
					<button
						type='submit'
						className='bg-[#111518] cursor-pointer text-white px-3 sm:px-4 py-1 rounded-lg h-9 text-xs font-semibold sm:text-sm flex place-self-end items-center mt-1'
					>
						Tweet
					</button>
				</div>
			</div>
		</form>
	);
}
