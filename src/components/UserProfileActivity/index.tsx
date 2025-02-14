import { Img, Heading, Button } from "./..";
import React from "react";

interface Props {
    className?: string;
    profileImage?: string;
    activityText?: React.ReactNode;
}

export default function UserProfileActivity({
                                                profileImage = "images/img_profileimg_large_72x72.png",
                                                activityText,
                                                ...props
                                            }: Props) {
    return (
        <div {...props} className={`${props.className} flex sm:flex-col items-center self-stretch flex-1`}>
            <div className="flex flex-1 items-center gap-4 sm:self-stretch">
                <div className="w-[14%]">
                    <div className="flex flex-col items-end">
                        <Img src={profileImage} alt="Image" className="h-[72px] w-full rounded-[36px] object-cover" />
                        <Button
                            color="red_400"
                            size="xs"
                            shape="circle"
                            className="relative mt-[-24px] w-[24px] rounded-[12px] px-1"
                        >
                            <Img src="images/img_favorite.svg" />
                        </Button>
                    </div>
                </div>
                <Heading size="textlg" as="p" className="w-[60%] !font-gilroy text-[18px] font-medium leading-[29px]">
                    <span className="font-semibold text-blue_gray-900">Rose</span>
                    <span className="text-blue_gray-900">&nbsp;</span>
                    <span className="text-blue_gray-900">liked a photo</span>
                    <span className="text-blue_gray-900">&nbsp;</span>
                    <span className="font-semibold text-blue_gray-900">Carmelo's</span>
                    <span className="text-blue_gray-900">&nbsp;</span>
                    <span className="text-blue_gray-900">post.</span>
                    <span className="text-blue_gray-400_01">&nbsp;20 min ago.</span>
                </Heading>
            </div>
            <Img src="images/img_profileimg_large_72x52.png" alt="Image" className="h-[72px] w-[10%] object-contain" />
        </div>
    );
}