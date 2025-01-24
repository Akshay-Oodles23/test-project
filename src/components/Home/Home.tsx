import CreatePost from "../CreatePost/CreatePost";
import Navbar from "../Navbar/Navbar";
import UserProfile from "../UserProfile/UserProfile";

const Home = () => {
    return (
        <div className="flex flex-col h-screen bg-[#F3F3F7]">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex flex-grow">
                {/* Left Sidebar */}
                <UserProfile />
                {/* Center Content */}
                <div className="w-3/6 ">
                    <CreatePost />
                </div>

                {/* Right Sidebar */}
                <div className="w-2/6 "></div>
            </div>
        </div>

    );
};

export default Home;
