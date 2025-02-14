import { Img, Heading, Button } from "./..";
import React from "react";

interface Props {
    className?: string;
    profileImage?: string;
    userPostText?: React.ReactNode;
    optionsIcon?: string;
}

export default function UserProfile1({
                                         profileImage = "images/img_profileimg_large_10.png",
                                         userPostText,
                                         optionsIcon = "images/img_ellipsis_h_outline.svg",
                                         ...props
                                     }: Props) {
    return (
        <div
            {...props}
            className={`${props.className} flex sm:flex-col justify-center items-center self-stretch`}
        >
            <div className="flex flex-1 items-center gap-4 sm:self-stretch">
                <div className="w-[14%]">
                    <div className="flex flex-col items-end">
                        <Img
                            src={profileImage}
                            alt="Image"
                            className="h-[72px] w-full rounded-[36px] object-cover"
                        />
                        <Button
                            color="blue_A200"
                            size="xs"
                            shape="circle"
                            className="relative mt-[-24px] w-[24px] rounded-[12px] px-1 flex-1"
                        >
                            <Img src="images/img_upload.svg" />
                        </Button>
                    </div>
                </div>
                <Heading
                    size="textlg"
                    as="p"
                    className="w-[56%] !font-gilroy text-[18px] font-medium leading-[29px]"
                >
                    <span className="font-semibold text-blue_gray-900">Anton</span>
                    <span className="text-blue_gray-900">&nbsp;Posted a new video&nbsp;</span>
                    <span className="font-semibold text-blue_gray-900">"Video Name"</span>
                    <span className="text-blue_gray-900">. &nbsp;</span>
                    <span className="text-blue_gray-400_01">5w</span>
                </Heading>
            </div>
            <Img src={optionsIcon} alt="Image" className="h-[24px]" />
        </div>
    );
}