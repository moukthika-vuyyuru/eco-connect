import { Text, Img, Heading, Input, Button } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import Sidebar1 from "../../components/Sidebar1";
import UserProfileCard from "../../components/UserProfileCard";
import React, { useState } from "react";
import { Textarea } from "../../components/Textarea";
import NavBar from '../../components/Navbar';
import Footer from "../../components/Footer";

// Sample data for posts and "Who to Follow" suggestions
const data = [
    {
        userName: "Alice Green",
        userHandle: "@alicegreen",
        postContent: "Join us for a community clean-up this weekend! 🌍 #Sustainability #EcoFriendly",
        commentCount: "23",
        likeCount: "58",
        profileImage: "images/logo.png",
    },
    {
        userName: "Bob Brown",
        userHandle: "@bobbrown",
        postContent: "Just planted 10 trees in my backyard! 🌳 #GoGreen",
        commentCount: "10",
        likeCount: "30",
        profileImage: "images/logo.png",
    },
    {
        userName: "Charlie Smith",
        userHandle: "@charliesmith",
        postContent: "Check out these tips for reducing plastic waste! ♻️ #EcoTips",
        commentCount: "5",
        likeCount: "20",
        profileImage: "images/logo.png",
    },
];

// Sample data for "Who to Follow"
const whoToFollow = [
    { userName: "John Doe", userHandle: "@johndoe", bio: "Sustainability Advocate" },
    { userName: "Jane Smith", userHandle: "@janesmith", bio: "Eco-Entrepreneur" },
    { userName: "Sam Green", userHandle: "@samgreen", bio: "Tree Planter" },
];

export default function EcoConnectFeedPage() {
    const [searchBarValue2, setSearchBarValue2] = useState("");
    const [tweetContent, setTweetContent] = useState("");

    return (
        <>
            <NavBar />
            <div className="w-full py-[5px] md:py-5">
                <div className="container mx-auto md:px-5">
                    <div className="flex gap-[20px]">
                        {/* Sidebar (left) */}
                        <div className="w-[20%]">
                            <Sidebar1 profilePictureUrl="images/logo.png" />
                        </div>

                        {/* Feed (middle) */}
                        <div className="flex flex-1 flex-col gap-[30px]">
                            <div className="flex flex-col gap-2.5">
                                <div className="flex flex-col gap-2.5">
                                    <div className="flex items-center gap-[13px]"></div>
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col items-start">
                                            <Textarea
                                                placeholder="What's happening?"
                                                value={tweetContent}
                                                onChange={(e) => setTweetContent(e.target.value)}
                                                className="mt-2 w-full p-7 border border-[#1D3016] rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#1D3016]"
                                            />
                                            <Button
                                                onClick={() => alert('Tweet button clicked')}
                                                className="mt-2 bg-[#1D3016] text-white rounded-md py-2 !important" style={{ backgroundColor: "#1D3016", color: "white"}}
                                            >
                                                Tweet
                                            </Button>
                                            <div className="h-px w-full self-stretch bg-blue_gray-50 mt-4" />
                                        </div>
                                        <div className="mt-4 flex flex-col gap-4 self-stretch">
                                            {data.map((post, index) => (
                                                <div key={index} className="flex flex-col gap-4 p-4 border rounded-md bg-gray-50 shadow-md">
                                                    <div className="flex gap-3 items-start">
                                                        <UserProfileCard
                                                            userName={post.userName}
                                                            userHandle={post.userHandle}
                                                            postContent={post.postContent}
                                                            profileImage={post.profileImage}
                                                            commentCount={post.commentCount}
                                                            likeCount={post.likeCount}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <Heading
                                            as="h3"
                                            className="mb-3.5 ml-3.5 mt-[30px] text-[14px] font-medium !text-blue-500 md:ml-0"
                                        >
                                            Show more
                                        </Heading>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar (search & Who to Follow) */}
                        <div className="w-[20%] flex flex-col gap-6">
                            <div className="relative">
                                <Input
                                    color="blue_gray_50"
                                    size="xs"
                                    name="search"
                                    placeholder="Search for posts or events"
                                    value={searchBarValue2}
                                    onChange={(e) => setSearchBarValue2(e.target.value)}
                                    prefix={
                                        <Img
                                            src="images/search.svg"
                                            alt="Search"
                                            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-[18px] w-[18px] object-contain"
                                        />
                                    }
                                    suffix={
                                        searchBarValue2?.length > 0 ? (
                                            <CloseSVG
                                                onClick={() => setSearchBarValue2("")}
                                                height={18}
                                                width={18}
                                                fillColor="#5b7083ff"
                                            />
                                        ) : null
                                    }
                                    className="pl-10 gap-3.5 rounded-[20px] font-medium text-blue_gray-600 p-2.5"
                                />
                            </div>
                            <div className="flex flex-col gap-4 p-4 bg-gray-50 shadow-lg rounded-lg">
                                <Heading as="h6" className="text-[16px] font-bold text-gray-900_01">
                                    Who to Follow
                                </Heading>
                                <div className="h-px w-full self-stretch bg-blue_gray-50" />
                                {whoToFollow.map((user, index) => (
                                    <div key={index} className="flex flex-col gap-3 p-2 rounded-md hover:bg-blue_gray-100 transition-all">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <Text className="text-gray-800 font-semibold">{user.userName}</Text>
                                                <Text className="text-gray-500 text-sm">{user.userHandle}</Text>
                                            </div>
                                            <Button onClick={() => alert(`Follow ${user.userName}`)} size="sm" color="blue">
                                                Follow
                                            </Button>
                                        </div>
                                        <Text className="text-xs text-gray-500">{user.bio}</Text>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}