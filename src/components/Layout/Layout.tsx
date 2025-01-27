import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex flex-col min-h-screen'>
			{/* Navbar */}
			<Navbar />

			{/* Main Content */}
			<main className='flex-grow '>{children}</main>

			{/* Footer */}
		</div>
	);
};

export default Layout;
