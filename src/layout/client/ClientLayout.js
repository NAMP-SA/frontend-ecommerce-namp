import { Outlet } from "react-router-dom";
import NavbarClient from "../../components/client/NavbarClient"
import CategoryMenuContainer from "../../containers/client/category/CategoryMenuContainer";
import { useState } from "react";
import { FooterClient } from "../../components/client/FooterClient";


const ClientLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return ( 
        <div className="h-screen bg-gray-100">
            <NavbarClient toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
            <CategoryMenuContainer isMenuOpen={isMenuOpen} />
            <div className="flex-grow bg-gray-100 overflow-auto">
                <Outlet />
            </div>
            <div className="bg-gray-100 ">
                <FooterClient/>
            </div>
            
        </div>
    );

    
}
 
export default ClientLayout;