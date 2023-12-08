import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hamburgerMenu from "/hamburger-menu.svg";
import closeHamburger from "/closeHamburger.svg";

import NavItems from "./NavItems";

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = useCallback(function handleResize() {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
        if (newWidth > 800) setOpenMenu(false);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    return (
        <nav className="p-10 flex justify-between items-center bg-stone-900">
            {!openMenu && (
                <Link to={`/`}>
                    <i className="text-3xl font-bold cursor-pointer text-amber-100">
                        TaleTwist
                    </i>
                </Link>
            )}

            {openMenu && <NavItems width="w-full" />}

            {width < 800 && (
                <img
                    src={openMenu ? closeHamburger : hamburgerMenu}
                    alt="Hamburger Menu"
                    className="cursor-pointer w-8"
                    onClick={() => setOpenMenu((prev) => !prev)}
                />
            )}

            {width > 800 && <NavItems width="w-2/3" />}
        </nav>
    );
}

export default Navbar;
