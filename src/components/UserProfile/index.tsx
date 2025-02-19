import { Img, Text, Heading } from "./..";
import React from "react";

interface Props {
    className?: string;
    profileImage?: string;
    userName?: React.ReactNode;
    mutualFriendsText?: React.ReactNode;
}

export default function UserProfile({
                                        profileImage = "images/img_profileimg_large_50x50.png",
                                        userName = "Rose J. Henry",
                                        mutualFriendsText = "24 Mutual friends",
                                        ...props
                                    }: Props) {
    return (
        <div
            {...props}
            className={`${props.className} flex sm:flex-col justify-center items-center w-full gap-4 p-2.5 border-blue_gray-50 border border-solid bg-white-a700 rounded-md`}
        >
            <Img src={profileImage} alt="Rose Jhenry" className="h-[50px] rounded-[24px] object-cover" />
            <div className="flex flex-1 items-center justify-center sm:self-stretch">
                <div className="flex flex-1 flex-col items-start gap-2">
                    <Heading as="h6" className="text-[16px] font-semibold">
                        {userName}
                    </Heading>
                    <Text as="p" className="text-[12px] font-normal !text-blue_gray-400_01">
                        {mutualFriendsText}
                    </Text>
                </div>
                {/*<Img src="images/img_ellipsis_h_outline.svg" alt="Ellipsis" className="h-[24px]" />*/}
            </div>
        </div>
    );
}