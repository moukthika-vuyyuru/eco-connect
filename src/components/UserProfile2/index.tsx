import { Button, Text, Heading, Img } from "./..";
import React from "react";

interface Props {
    className?: string;
    userImage?: string;
    userName?: React.ReactNode;
    mutualFriendsText?: React.ReactNode;
    addFriendButtonText?: string;
    removeButtonText?: string;
}

export default function UserProfile2({
                                         userImage = "images/img_rectangle_1339.png",
                                         userName = "Rose J. Henry",
                                         mutualFriendsText = "12 Mutual friends",
                                         addFriendButtonText = "Add Friend",
                                         removeButtonText = "Remove",
                                         ...props
                                     }: Props) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col w-full gap-4 border-blue_gray-50 border border-solid bg-white-a700 shadow-sm rounded-md`}
        >
            <Img
                src={userImage}
                alt="Rose Jhenry"
                className="h-[228px] w-full rounded-tl-md rounded-tr-md object-cover"
            />
            <div className="mx-4 mb-4 flex flex-col gap-2 self-stretch">
                <div className="flex flex-col items-start justify-center gap-1.5">
                    <Heading as="h6" className="text-[16px] font-semibold">
                        {userName}
                    </Heading>
                    <Text as="p" className="text-[12px] font-normal !text-blue_gray-400_01">
                        {mutualFriendsText}
                    </Text>
                </div>
                <Button shape="round" className="self-stretch rounded-md px-[34px] font-medium sm:px-5">
                    {addFriendButtonText}
                </Button>
                <Button color="blue_gray_100" shape="round" className="self-stretch rounded-md px-[34px] font-medium sm:px-5">
                    {removeButtonText}
                </Button>
            </div>
        </div>
    );
}