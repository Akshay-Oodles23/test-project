import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import notification from "../../assets/images/notification.svg";
import message from "../../assets/images/message.svg";
import request from "../../assets/images/request.svg";
import logout from "../../assets/images/logout.svg";

const Navbar = () => {
	return (
		<nav className='w-full flex justify-between items-center py-2 px-8 md:px-20 bg-white border-b border-[#EDEDF0] shadow-sm fixed top-0 left-0 z-50'>
			{/* Logo */}
			<div className="max-sm:w-10 ">
				<img
					src={logo}
					alt='Logo'
				/>
			</div>

			{/* Search Bar */}
			<div className='hidden md:block md:relative'>
				<input
					type='text'
					placeholder='Search posts, friends'
					className='block md:w-72  lg:w-96 px-3 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-slate-500 pl-10'
				/>
				<img
					src={search}
					alt='Search'
					className='absolute top-3.5 left-3 w-4 '
				/>
			</div>

			{/* Icons */}
			<div className='flex items-center space-x-10'>
				{/* Message Icon */}
				<div className='relative cursor-pointer'>
					<img
						src={message}
						alt='Message'
						className='w-4 sm:w-5'
					/>
					<span className='px-1 rounded-full bg-red-500 text-white text-[9px] sm:text-[10px] absolute -right-1.5 -top-1.5 font-medium'>
						3
					</span>
				</div>

				{/* Friend Request Icon */}
				<div className='relative cursor-pointer'>
					<img
						src={request}
						alt='Request'
						className='w-4 sm:w-5'
					/>
					<span className='px-1 rounded-full bg-red-500 text-white text-[9px] sm:text-[10px] absolute -right-1.5 -top-1.5 font-medium'>
						7
					</span>
				</div>

				{/* Notification Icon */}
				<div className='relative cursor-pointer'>
					<img
						src={notification}
						alt='Notification'
						className='w-4 sm:w-5'
					/>
					<span className='px-1 rounded-full bg-red-500 text-white text-[9px] sm:text-[10px] absolute -right-1.5 -top-1.5 font-medium'>
						22
					</span>
				</div>

				{/* Logout Icon */}
				<img
					src={logout}
					alt='Logout'
					className='w-6 cursor-pointer'
				/>
			</div>
		</nav>
	);
};

export default Navbar;
