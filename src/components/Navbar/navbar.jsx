import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center pt-[35px] pb-[48px]'>
            {/* Logo */}
            <div>
                <img src="/Header_Logo.png" alt="" />
            </div>
            {/* Navigation Links */}
            <div>
                <ul className='flex items-center gap-6'>
                    <li className='text-[#F5F5F6] text-base font-medium font-satoshi cursor-pointer'>Home</li>
                    <li className='text-[#F5F5F6] text-base font-normal font-satoshi cursor-pointer'>Courses</li>
                    <li className='text-[#F5F5F6] text-base font-normal font-satoshi cursor-pointer'>Creators</li>
                </ul>
            </div>
            {/* Actions */}
            <div className='flex gap-4 items-center'>
                <Link to="/login" className='text-[#F5F5F6] hover:text-brand-green transition-colors cursor-pointer'>Sign In</Link>
                <Link to="/register" className='text-[#F5F5F6] hover:text-brand-green transition-colors cursor-pointer'>Join Us</Link>
                <Link to="/cart">
                    <img src="/shopping-bag.png" alt="" />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar