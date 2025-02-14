import { Input, Img, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import UserProfile from "../../components/UserProfile";
import React, { Suspense, useState } from "react";

const data = [
    {
        profileImage: "images/img_profileimg_large_50x50.png",
        userName: "Rose J. Henry",
        mutualFriendsText: "24 Mutual friends",
    },
    {
        profileImage: "images/img_profileimg_large_1.png",
        userName: "Kai Caudle",
        mutualFriendsText: "12 Mutual friends",
    },
    {
        profileImage: "images/img_profileimg_large_2.png",
        userName: "Carmelo Rousseau",
        mutualFriendsText: "14 Mutual friends",
    },
    {
        profileImage: "images/img_profileimg_large_3.png",
        userName: "Ali Comer",
        mutualFriendsText: "10 Mutual friends",
    },
    {
        profileImage: "images/img_profileimg_large_4.png",
        userName: "Jacklyn Kovach",
        mutualFriendsText: "09 Mutual friends",
    },
    {
        profileImage: "images/img_profileimg_large_5.png",
        userName: "Landon Mosby",
        mutualFriendsText: "05 Mutual friends",
    },
    {
        profileImage: "images/img_profileimg_large_6.png",
        userName: "Man Marin",
        mutualFriendsText: "31 Mutual friends",
    },
    {
        profileImage: "images/img_profileimg_large_7.png",
        userName: "Benito Nickel",
        mutualFriendsText: "50 Mutual friends",
    },
    {
        profileImage: "images/img_profileimg_large_8.png",
        userName: "Angelyn Weiner",
        mutualFriendsText: "35 Mutual friends",
    },
];

export default function FriendlistColumn() {
    const [searchBarValue2, setSearchBarValue2] = useState("");

    return (
        <div className="mb-1 flex flex-col items-center">
            <div className="container-xs flex flex-col gap-6 md:px-5">
                <div className="flex items-center md:flex-col">
                    <div className="flex flex-1 items-start gap-4 md:self-stretch">
                        <div className="flex w-[12%] flex-col items-center gap-3 self-center">
                            <Heading size="texts" as="h1" className="mt-2.5 text-[14px] font-medium !text-blue-a700_01">
                                All Friends
                            </Heading>
                            <div className="h-[2px] w-full self-stretch bg-blue-a700_01" />
                        </div>
                        <div className="flex flex-1 px-[26px] py-2 sm:px-5">
                            <Heading size="texts" as="h2" className="self-end text-[14px] font-medium !text-blue_gray-400_01">
                                Recently Added
                            </Heading>
                        </div>
                    </div>
                    <Input
                        shape="round"
                        name="search"
                        placeholder="Search Friends"
                        value={searchBarValue2}
                        onChange={(e) => setSearchBarValue2(e.target.value)}
                        suffix={
                            searchBarValue2?.length > 0 ? (
                                <CloseSVG onClick={() => setSearchBarValue2("")} fillColor="#4d90ffff" />
                            ) : (
                                <Img
                                    src="images/img_search_outline_20x20.svg"
                                    alt="Search/outline"
                                    className="h-[20px] w-[20px] object-contain"
                                />
                            )
                        }
                        className="w-[38%] gap-[34px] rounded-md border border-solid border-blue_gray-300 px-3.5 font-medium text-blue_gray-200 md:w-full"
                    />
                </div>
                <div className="grid grid-cols-3 justify-center gap-4 md:grid-cols-2 sm:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
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
    );
}