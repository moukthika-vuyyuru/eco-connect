import { Input, Img, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import UserProfileCard from "../../components/UserProfileCard";
import React, { Suspense, useState } from "react";

const data = [
    {
        profileImage: "images/img_profileimg_large_50x50.png",
        userName: "Rose J. Henry",
        userLocation: "New York",
        lastActiveTime: "20 min ago",
        followButtonText: "Follow",
    },
    {
        profileImage: "images/img_profileimg_large_1.png",
        userName: "Rose J. Henry",
        userLocation: "New York",
        lastActiveTime: "20 min ago",
        followButtonText: "Follow",
    },
    {
        profileImage: "images/img_profileimg_large_2.png",
        userName: "Rose J. Henry",
        userLocation: "New York",
        lastActiveTime: "20 min ago",
        followButtonText: "Follow",
    },
    {
        profileImage: "images/img_profileimg_large_3.png",
        userName: "Rose J. Henry",
        userLocation: "New York",
        lastActiveTime: "20 min ago",
        followButtonText: "Follow",
    },
    {
        profileImage: "images/img_profileimg_large_4.png",
        userName: "Rose J. Henry",
        userLocation: "New York",
        lastActiveTime: "20 min ago",
        followButtonText: "Follow",
    },
];

export default function FollowersColumn() {
    const [searchBarValue, setSearchBarValue] = useState("");

    return (
        <div className="mb-1 flex flex-col items-center">
            <div className="container-xs flex flex-col gap-[50px] md:px-5">
                <div className="flex items-center md:flex-col">
                    <div className="flex flex-1 items-center gap-6 md:self-stretch">
                        <Img src="images/img_arrow_left_24x24.svg" alt="Arrowleft" className="h-[24px]" />
                        <Heading as="h1" className="text-[16px] font-semibold"></Heading>
                    </div>
                    <Input
                        shape="round"
                        name="search"
                        placeholder="Search Friends"
                        value={searchBarValue}
                        onChange={(e) => setSearchBarValue(e.target.value)}
                        suffix={
                            searchBarValue.length > 0 ? (
                                <CloseSVG onClick={() => setSearchBarValue("")} fillColor="#4d90ffff" />
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
                <div className="grid grid-cols-3 justify-center gap-7 md:grid-cols-2 sm:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                            <UserProfileCard {...d} key={"followerslist" + index} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}