import { Img } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface Props {
    className?: string;
    profilePictureUrl: string; // Add a new prop for the profile picture URL
}

export default function Sidebar1({ profilePictureUrl, ...props }: Props) {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleMenuItemClick = (path: string) => {
        navigate(path); // Navigate to the specified path
    };

    return (
        <Sidebar
            {...props}
            width="302px !important"
            collapsedWidth="80px !important"
            rootStyles={{ [`.${sidebarClasses.container}`]: { gap: "48px" } }}
            className={`${props.className} flex flex-col h-screen pt-6 gap-12 top-0 sm:pt-5 bg-gray-50_01 flex-1 !sticky overflow-auto`}
        >
            <Img src={profilePictureUrl} alt="Profile Picture" className="h-[40px] w-[40px] rounded-full object-cover" />
            <Menu
                menuItemStyles={{
                    button: {
                        padding: "20px 20px 20px 30px",
                        gap: "8px",
                        color: "#1D3016",
                        fontWeight: 600,
                        fontSize: "16px",
                        "&:hover, &.ps-active": { color: "#162c10" },
                    },
                }}
                rootStyles={{ ["&>ul"]: { gap: "45px" } }}
                className="mb-1 flex w-full flex-col self-stretch"
            >
                <div className="flex flex-col gap-[0.23px]">
                    <MenuItem
                        icon={<Img src="images/home.svg" alt="Home" className="h-[40px] w-[40px]" />}
                        onClick={() => handleMenuItemClick("/feedPage")} // Navigate to home
                    >
                        Home
                    </MenuItem>
                    <MenuItem
                        icon={<Img src="images/event.svg" alt="Events" className="h-[40px] w-[40px]" />}
                        onClick={() => handleMenuItemClick("/events")} // Navigate to events
                    >
                        Events
                    </MenuItem>
                    <MenuItem
                        icon={<Img src="images/marketplace.svg" alt="Marketplace" className="h-[40px] w-[40px]" />}
                        onClick={() => handleMenuItemClick("/marketplace")} // Navigate to marketplace
                    >
                        Marketplace
                    </MenuItem>
                    <MenuItem
                        icon={<Img src="images/forum.svg" alt="Forum" className="h-[40px] w-[40px]" />}
                        onClick={() => handleMenuItemClick("/forum")} // Navigate to forum
                    >
                        Forum
                    </MenuItem>
                    <MenuItem
                        icon={<Img src="images/profile.svg" alt="Profile" className="h-[40px] w-[40px]" />}
                        onClick={() => handleMenuItemClick("/profile")} // Navigate to profile
                    >
                        Profile
                    </MenuItem>
                </div>
            </Menu>
        </Sidebar>
    );
}