import { Button, Text, Heading, Img } from "./..";
import React from "react";

interface Props {
    className?: string;
    profileImage?: string;
    userName?: React.ReactNode;
    userLocation?: React.ReactNode;
    lastActiveTime?: React.ReactNode;
    followButtonText?: string;
}

export default function UserProfileCard({
                                            profileImage = "images/img_profileimg_large_50x50.png",
                                            userName = "Rose J. Henry",
                                            userLocation = "New York",
                                            lastActiveTime = "20 min ago",
                                            followButtonText = "Follow",
                                            ...props
                                        }: Props) {
    return (
        <div
            {...props}
            className={`${props.className} flex sm:flex-col justify-center items-center w-full p-2.5 border-blue_gray-50 border border-solid bg-white-a700 rounded-md`}
        >
            <div className="flex flex-1 items-center justify-center gap-4 sm:self-stretch">
                <Img src={profileImage} alt="Rose Jhenry" className="h-[50px] rounded-[24px] object-cover" />
                <div className="flex flex-1 flex-col items-start justify-center">
                    <Heading as="h6" className="text-[16px] font-semibold">
                        {userName}
                    </Heading>
                    <div className="flex items-center self-stretch">
                        <Text as="p" className="text-[12px] font-normal !text-blue_gray-400_01">
                            {userLocation}
                        </Text>
                        <div className="ml-2 h-[4px] w-[4px] rounded-sm bg-blue_gray-400_01" />
                        <Text as="p" className="ml-2 text-[12px] font-normal !text-blue_gray-400_01">
                            {lastActiveTime}
                        </Text>
                    </div>
                </div>
            </div>
            <Button size="lg" shape="round" className="min-w-[78px] rounded-md px-[18px] font-medium">
                {followButtonText}
            </Button>
        </div>
    );
}