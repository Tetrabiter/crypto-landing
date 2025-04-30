import Logo from './assets/Logo.png'

const Header = () => {
    return ( 
        <header className="flex justify-between items-center">
            <img src={Logo} alt="" />

            <ul className="flex gap-4">
                <li><a href="">Home</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Career</a></li>
            </ul>

            <button>Launch App</button>
        </header>
    );
}
 
export default Header;