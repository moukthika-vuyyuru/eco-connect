import { Img, Heading } from "./..";
import React from "react";
import { Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
    className?: string;
}

export default function Sidebar11({ ...props }: Props) {
    return (
        <Sidebar
            {...props}
            width="302px !important"
            rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 32 } }}
            className={`${props.className} flex flex-col h-screen pt-6 gap-8 top-0 px-6 sm:pt-5 sm:px-5 bg-gray-50_01 shadow-md flex-1 !sticky overflow-auto`}
        >
            <div className="flex items-center justify-between gap-5 self-stretch">
                <Img src="images/img_arrow_left_24x24.svg" alt="Arrowleft" className="h-[24px]" />
                <Img src="images/logo.png" alt="Headerlogo" className="h-[20px] w-[76px] self-end object-contain" />
                <Img src="images/img_share_alt_outline.svg" alt="Sharealt" className="h-[24px]" />
            </div>
            <div className="mb-[592px] flex flex-col gap-8 self-stretch">
                <div className="flex justify-center px-14 md:px-5">
                    <div className="flex w-[76%] flex-col items-center justify-center gap-3.5">
                        <div className="self-stretch rounded-[50px] border-[1.79px] border-solid border-blue-a700 p-1.5">
                            <Img src="images/img_profileimg_large_border.png" alt="Profileimg" className="h-[84px] w-full rounded-[42px] object-cover" />
                        </div>
                        <Heading as="h6" className="text-[16px] font-semibold">
                            Michelle Rock
                        </Heading>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex justify-center">
                        <div className="flex flex-1 items-center gap-2">
                            <Img src="images/img_bell_outline_24x24.svg" alt="Belloutline" className="h-[24px]" />
                            <Heading as="h6" className="text-[16px] font-semibold">
                                Notifications
                            </Heading>
                        </div>
                        <Img src="images/img_arrow_right_3.svg" alt="Arrowright" className="h-[24px]" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-center">
                            <div className="flex flex-1 items-center gap-2">
                                <Img src="images/img_language_outline.svg" alt="Language" className="h-[24px]" />
                                <Heading as="h6" className="self-end text-[16px] font-semibold">
                                    Language
                                </Heading>
                            </div>
                            <Img src="images/img_arrow_right_3.svg" alt="Arrowright" className="h-[24px]" />
                        </div>
                        <div className="flex justify-center">
                            <div className="flex flex-1 items-center gap-2">
                                <Img src="images/img_moon_outline.svg" alt="Moonoutline" className="h-[24px]" />
                                <Heading as="h6" className="text-[16px] font-semibold">
                                    Dark mode
                                </Heading>
                            </div>
                            <Img src="images/img_arrow_right_3.svg" alt="Arrowright" className="h-[24px]" />
                        </div>
                        <div className="flex justify-center">
                            <div className="flex flex-1 items-center gap-2">
                                <Img src="images/img_setting_outline_24x24.svg" alt="Settingoutline" className="h-[24px]" />
                                <Heading as="h6" className="self-end text-[16px] font-semibold">
                                    General settings
                                </Heading>
                            </div>
                            <Img src="images/img_arrow_right_3.svg" alt="Arrowright" className="h-[24px]" />
                        </div>
                        <div className="flex justify-center">
                            <div className="flex flex-1 items-center gap-2">
                                <Img src="images/img_palette_outline.svg" alt="Paletteoutline" className="h-[24px]" />
                                <Heading as="h6" className="text-[16px] font-semibold">
                                    Theme
                                </Heading>
                            </div>
                            <Img src="images/img_arrow_right_3.svg" alt="Arrowright" className="h-[24px]" />
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}