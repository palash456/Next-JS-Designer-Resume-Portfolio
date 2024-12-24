"use client";

import { useState, useEffect } from "react";
import AppData from "@data/app.json";
import { usePathname } from 'next/navigation';
import Link from "next/link";

const MenuBarModule = () => {
    const [toggle, setToggle] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const asPath = usePathname();
    const [curLabel, setCurLabel] = useState(0);

    const isPathActive = (path) => {
        return (asPath.indexOf(path) !== -1) && asPath === path;
    };

    const handleSubMenuClick = (index, e) => {
        e.preventDefault();
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };
    
    useEffect(() => {
        // close mobile menu
        setToggle(false);
        if ( toggle ) {
            document.querySelector('.art-content').classList.remove('art-active');
        }

        AppData.header.menu.map((item) => menuLabels(item) );
    }, [asPath])

    const menuLabels = (item) => {
        isPathActive(item.link) ? setCurLabel(item) : 0;
    }

    const menuOpen = () => {
        setToggle(!toggle);
        if ( !toggle ) {
            document.querySelector('.art-content').classList.add('art-active');
        } else {
            document.querySelector('.art-content').classList.remove('art-active');
        }
    }

    return (
        <>


            {/* menu bar end */}
        </>
    );
};
export default MenuBarModule;