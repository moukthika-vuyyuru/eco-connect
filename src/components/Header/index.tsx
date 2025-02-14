import MegaMenu1 from "../MegaMenu1";
import { Img } from '../Img';
import { Button, Heading } from "..";
import React from "react";

interface Props {
    className?: string;
}

export default function Header({ ...props }: Props) {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [menuOpen1, setMenuOpen1] = React.useState(false);

    return (
        <header
            {...props}
            className={`${props.className} flex justify-center items-center py-[22px] sm:py-5 bg-white-a700 shadow-sm relative`}
        >
            <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:px-5">
                <Img src="images/img_header_logo_34x164.png" alt="Headerlogo" className="h-[34px] w-[164px] object-contain" />
                <ul className="flex items-center gap-[34px] sm:flex-col">
                    <li
                        onMouseLeave={() => setMenuOpen(false)}
                        onMouseEnter={() => setMenuOpen(true)}
                    >
                        <div className="flex cursor-pointer items-center gap-3">
                            <Heading size="texts" as="p" className="text-[14px] font-medium !text-gray-900">
                                Products
                            </Heading>
                            <Img src="images/img_arrow_down.svg" alt="Arrowdown" className="h-[24px] w-[24px]" />
                        </div>
                        {menuOpen ? <MegaMenu1 /> : null}
                    </li>
                    <li
                        onMouseLeave={() => setMenuOpen1(false)}
                        onMouseEnter={() => setMenuOpen1(true)}
                    >
                        <div className="flex cursor-pointer items-center gap-2.5">
                            <Heading size="texts" as="p" className="text-[14px] font-medium !text-gray-900">
                                Resources
                            </Heading>
                            <Img src="images/img_arrow_down.svg" alt="Arrowdown" className="h-[24px] w-[24px]" />
                        </div>
                        {menuOpen1 ? <MegaMenu1 /> : null}
                    </li>
                    <li>
                        <a href="#">
                            <Heading size="texts" as="p" className="text-[14px] font-medium !text-gray-900">
                                Request a demo
                            </Heading>
                        </a>
                    </li>
                </ul>
                <div className="flex w-[10%] justify-center gap-6 md:w-full">
                    <a href="#">
                        <Button
                            color="white_A700"
                            size="3xl"
                            shape="circle"
                            className="w-[56px] rounded-[28px] border border-solid border-blue_gray-100 px-3"
                        >
                            <Img src="images/img_bell_outline.svg" />
                        </Button>
                    </a>
                    <div className="flex-1">
                        <Img
                            src="images/img_profileimg_large.png"
                            alt="Profileimg"
                            className="h-[56px] w-full rounded-[28px] object-cover md:h-auto"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
