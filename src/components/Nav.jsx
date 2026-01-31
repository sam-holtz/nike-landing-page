import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
    return (
        <header className='padding-x py-6 absolute z-10 w-full backdrop-blur-md bg-white/70 border-b border-slate-100/50'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/" className="transition-transform duration-200 hover:scale-105">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-12 max-lg:hidden'>
                    {
                        navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className='font-montserrat leading-normal text-[15px] text-slate-gray hover:text-coral-red transition-colors duration-200 font-medium'
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <button type="button" className="hidden max-lg:block p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Menu">
                    <img src={hamburger} alt="Hamburger" width={25} height={25} />
                </button>
            </nav>
        </header>
    )
}

export default Nav;