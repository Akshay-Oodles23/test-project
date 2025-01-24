import logo from '../../assets/images/logo.svg'
import search from '../../assets/images/search.svg'
const Navbar = () => {
    return (
        <nav className="w-full flex justify-between items-center text-white py-4 px-6">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='relative'>
                <input type="text" placeholder='Search posts, friends' className='block w-full px-3 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' />
                <img src={search} alt="" className='absolute' />
            </div>
        </nav>
    )
}

export default Navbar   