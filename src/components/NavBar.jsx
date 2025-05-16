import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    // when the mobile menu is open, hide the navbar
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])

    return (
    // Sticky nav with semi-transparent dark background, blurred backdrop, and subtle white bottom border
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg"> 

         {/* Container for centering the content and limiting max width */}
        <div className = "max-w-5xl mx-auto px-4">  

             {/* Container for home icon, mobile menu, desktop menu and sections of navbar  */}
            <div className = "flex justify-between items-center h-16">

                <a href = "#home" className = "font-mono text-xl font-bold text-white"> 
                    paul <span className = "text-blue-500"> emmanuel </span> 
                </a>
                
                {/* when the mobile menu is clicked changed the value of menuOpen*/}
                <div className = "w-7 h-5 relative cursor-pointer z-40 md:hidden justify-right" onClick={() => setMenuOpen((prev => !prev))}> 
                    &#9776;
                </div>

                <div className = "hidden md:flex items-center space-x-8"> 

                    {/* Home section  */}
                    <a href = "#home" className = "text-gray-300 hover:text-white transition-colors">
                        Home
                    </a>

                    {/* About section  */}
                    <a href = "#about" className = "text-gray-300 hover:text-white transition-colors">
                        About
                    </a>

                    {/* Projects me section  */}
                    <a href = "#projects" className = "text-gray-300 hover:text-white transition-colors">
                        Projects
                    </a>

                    {/* Contact section  */}
                    <a href = "#contact" className = "text-gray-300 hover:text-white transition-colors">
                        Contact
                    </a>

                </div>

            </div>
        </div>
    </nav> 
    );
} 