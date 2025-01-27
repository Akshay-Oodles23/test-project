import CreatePost from "../CreatePost/CreatePost";
import News from "../News/News";
import UserProfile from "../UserProfile/UserProfile";

const Home = () => {
	return (
		<div className='pt-16 flex h-screen'>
			{/* Left Sidebar */}
			<div className='hidden md:w-1/6 lg:w-[10%] p-4 fixed h-screen'>
				<UserProfile />
			</div>

			{/* Center Content */}
			<div className='w-full md:w-[80%] lg:w-[70%] xl:w-1/2  mx-auto bg-[#FAFAFA] min-h-screen overflow-y-auto relative'>
				<CreatePost />
			</div>

			{/* Right Sidebar */}
			<div className='hidden md:w-1/6  lg:w-[10%]  p-4 fixed right-0 h-screen'>
				<News />
			</div>
		</div>
	);
};

export default Home;
