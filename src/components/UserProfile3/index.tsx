import { Button, Text, Heading, Img } from "./..";
import React from "react";

interface Props {
    className?: string;
    userName?: React.ReactNode;
    userHandle?: React.ReactNode;
    followButtonText?: string;
}

export default function UserProfile3({
                                         userName = "Jenny Wilson",
                                         userHandle = "@gabrielcantarin",
                                         followButtonText = "Follow",
                                         ...props
                                     }: Props) {
    return (
        <div {...props} className={`${props.className} flex justify-center items-center self-stretch flex-1`}>
            <div className="flex flex-1 items-center">
                <Img src="images/img_avatar_medium.svg" alt="Jenny Wilson" className="h-[48px] w-[20%] rounded-[50%]" />
                <div className="flex flex-1 flex-col items-start justify-center px-2.5">
                    <Heading size="headings" as="p" className="text-[14px] font-bold !text-gray-900_01">
                        {userName}
                    </Heading>
                    <Text as="p" className="text-[12px] font-normal !text-blue_gray-600">
                        {userHandle}
                    </Text>
                    <Button color="gray_900_02" size="md" className="min-w-[80px] rounded-[14px] px-4 font-bold">
                        {followButtonText}
                    </Button>
                </div>
            </div>
        </div>
    );
}