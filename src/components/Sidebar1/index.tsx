import { Img } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
    className?: string;
}

export default function Sidebar1({ ...props }: Props) {
    const [collapsed, setCollapsed] = React.useState(false);

    // Use this function to collapse/expand the sidebar
    const collapseSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Sidebar
            {...props}
            width="302px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            rootStyles={{ [`.${sidebarClasses.container}`]: { gap: "48px" } }}
            className={`${props.className} flex flex-col h-screen pt-6 gap-12 top-0 sm:pt-5 bg-gray-50_01 flex-1 !sticky overflow-auto`}
        >
            <Img src="images/img_sidebar_logo.png" alt="Sidebarlogo" className="h-[40px] w-[170px] object-contain" />
            <Menu
                menuItemStyles={{
                    button: {
                        padding: "20px 20px 20px 30px",
                        gap: "8px",
                        color: "#424c5d",
                        fontWeight: 600,
                        fontSize: "16px",
                        "&:hover, &.ps-active": { color: "#0061ff" },
                    },
                }}
                rootStyles={{ ["&>ul"]: { gap: "45px" } }}
                className="mb-1 flex w-full flex-col self-stretch"
            >
                <div className="flex flex-col gap-[0.23px]">
                    <MenuItem icon={<Img src="images/img_dashboard_outline.svg" alt="Dashboard" className="h-[24px] w-[24px]" />}>
                        Dashboard
                    </MenuItem>
                    <MenuItem icon={<Img src="images/img_dollar_alt_solid.svg" alt="Dollaralt" className="h-[24px] w-[24px]" />}>
                        Payments
                    </MenuItem>
                    <MenuItem icon={<Img src="images/img_wallet_outline.svg" alt="Walletoutline" className="h-[24px] w-[24px]" />}>
                        Wallet & Cards
                    </MenuItem>
                    <MenuItem icon={<Img src="images/img_user_arrows_outline.svg" alt="Userarrows" className="h-[24px] w-[24px]" />}>
                        Transactions
                    </MenuItem>
                    <MenuItem icon={<Img src="images/img_analysis_outline.svg" alt="Analysis" className="h-[24px] w-[24px]" />}>
                        Analytics
                    </MenuItem>
                    <MenuItem icon={<Img src="images/img_comment_message_outline.svg" alt="Commentmessage" className="h-[24px] w-[24px]" />}>
                        Messages
                    </MenuItem>
                    <MenuItem icon={<Img src="images/img_setting_outline.svg" alt="Settingoutline" className="h-[24px] w-[24px]" />}>
                        Settings
                    </MenuItem>
                </div>
                <div>
                    <MenuItem icon={<Img src="images/img_question_circle_outline.svg" alt="Image" className="h-[24px] w-[24px]" />}>
                        Help
                    </MenuItem>
                </div>
            </Menu>
        </Sidebar>
    );
}