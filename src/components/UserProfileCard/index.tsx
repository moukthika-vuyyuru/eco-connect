import { Text, Heading, Img, Button } from "./..";
import React from "react";

interface Props {
    className?: string;
    profileImage?: string;
    userName?: React.ReactNode;
    userHandle?: React.ReactNode;
    postContent?: React.ReactNode;
    commentCount?: React.ReactNode;
    likeCount?: React.ReactNode;
}

export default function UserProfileCard({
                                            profileImage = "public/images/logo.png",
                                            userName = "Rose J. Henry",
                                            userHandle = "@rosejhenry",
                                            postContent = "This is a sample post content.",
                                            commentCount = "0",
                                            likeCount = "0",
                                            ...props
                                        }: Props) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col p-4 border-blue_gray-50 border border-solid bg-white-a700 rounded-md w-[1000px]`} // Increased width
        >
            <div className="flex items-start gap-4">
                <Img src={profileImage} alt="Profile Image" className="h-[70px] w-[70px] rounded-full object-cover" />
                <div className="flex flex-col">
                    <Heading as="h6" className="text-[16px] font-semibold">
                        {userName} {userHandle}
                    </Heading>
                    <Text as="p" className="mt-2 text-[18px] font-normal !text-gray-800">
                        {postContent}
                    </Text>
                </div>
            </div>
            <div className="flex items-center justify-between mt-2">
                <Button variant="fill" color="gray_900_02" size="md" className="rounded-[14px] px-4 font-bold">
                    Comment
                </Button>
                <div className="flex items-center gap-2">
                    <Text as="p" className="text-[14px] font-normal !text-blue_gray-600">
                        {commentCount} Comments
                    </Text>
                    <Text as="p" className="text-[14px] font-normal !text-blue_gray-600">
                        {likeCount} Likes
                    </Text>
                </div>
            </div>
        </div>
    );
}