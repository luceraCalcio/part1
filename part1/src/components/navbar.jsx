
import { Link } from "react-scroll";

const Navbar = () => {
    const content = <>;
    <div className="">
        <ul>
        <link to="Home">
                <li>Home</li>
            </link>
            <link to="About">
                <li>About</li>
            </link>
            <link to="Projects">
                <li>Projects</li>
            </link>
            <link to="Services">
                <li>Services</li>
            </link>
            <link to="Contact">
                <li>Contact</li>
            </link>
        </ul>
    </div>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex">
                 <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold">Logo</span>
                </div>
                <div className="lg:flex md-flex ld:flex-1 items center justify-end font-formal hidden">
                    <div>
                    <ul>
                    <link to="Home">
                <li>Home</li>
            </link>
            <link to="About">
                <li>About</li>
            </link>
            <link to="Projects">
                <li>Projects</li>
            </link>
            <link to="Services"> 
                <li>Services</li>
            </link>
            <link to="Contact">
                <li>Contact</li>
            </link>
                    </ul>
                    </div>
                </div>
            </div>
        </nav> 

      
        
     );
}
 
export default Navbar;