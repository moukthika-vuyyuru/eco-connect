import { Input, Img, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import UserProfile from "../../components/UserProfile";
import React, { Suspense, useState } from "react";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

const data = [
    {
        profileImage: "images/logo.png",
        userName: "Rose J. Henry",
        mutualFriendsText: "24 Mutual friends",
    },
    {
        profileImage: "images/logo.png",
        userName: "Kai Caudle",
        mutualFriendsText: "12 Mutual friends",
    },
    {
        profileImage: "images/logo.png",
        userName: "Carmelo Rousseau",
        mutualFriendsText: "14 Mutual friends",
    },
    {
        profileImage: "images/logo.png",
        userName: "Ali Comer",
        mutualFriendsText: "10 Mutual friends",
    },
    {
        profileImage: "images/logo.png",
        userName: "Jacklyn Kovach",
        mutualFriendsText: "09 Mutual friends",
    },
    {
        profileImage: "images/logo.png",
        userName: "Landon Mosby",
        mutualFriendsText: "05 Mutual friends",
    },
    {
        profileImage: "images/logo.png",
        userName: "Man Marin",
        mutualFriendsText: "31 Mutual friends",
    },
    {
        profileImage: "images/logo.png",
        userName: "Benito Nickel",
        mutualFriendsText: "50 Mutual friends",
    },
    {
        profileImage: "images/logo.png",
        userName: "Angelyn Weiner",
        mutualFriendsText: "35 Mutual friends",
    },
];

export default function FriendlistColumn() {
    const [searchBarValue2, setSearchBarValue2] = useState("");

    return (
        <>
            <NavBar />
            <div className="min-h-screen flex flex-col">
                <div className="w-full py-5 md:py-8 flex-grow">
                    <div className="container mx-auto px-4 md:px-5">
                        <div className="flex flex-col gap-6">
                            {/* Main Content (Friendlist) */}
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col items-center gap-3">
                                            <Heading as="h1" className="text-lg font-semibold text-[#1D3016]">
                                                All Friends
                                            </Heading>
                                            <div className="h-[4px] w-full bg-[#1D3016]" />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Input
                                            shape="round"
                                            name="search"
                                            placeholder="Search Friends"
                                            value={searchBarValue2}
                                            onChange={(e) => setSearchBarValue2(e.target.value)}
                                            suffix={
                                                searchBarValue2?.length > 0 ? (
                                                    <CloseSVG
                                                        onClick={() => setSearchBarValue2("")}
                                                        fillColor="#4d90ffff"
                                                        className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
                                                    />
                                                ) : (
                                                    <Img
                                                        src="images/img_search_outline_20x20.svg"
                                                        alt="Search"
                                                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                                                    />
                                                )
                                            }
                                            className="relative w-full md:w-3/4 lg:w-2/3 rounded-md border-none px-4 py-2 pl-10 pr-10 font-medium text-blue_gray-200 bg-transparent"
                                        />
                                    </div>

                                    <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
                                        <Suspense fallback={<div>Loading friends...</div>}>
                                            {data.map((d, index) => (
                                                <UserProfile
                                                    key={index}
                                                    profileImage={d.profileImage}
                                                    userName={d.userName}
                                                    mutualFriendsText={d.mutualFriendsText}
                                                />
                                            ))}
                                        </Suspense>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
