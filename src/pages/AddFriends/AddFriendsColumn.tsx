import { Input, Img, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import UserProfile2 from "../../components/UserProfile2";
import React, { Suspense, useState } from "react";

const data = [
    {
        userImage: "images/img_rectangle_1339.png",
        userName: "Rose J. Henry",
        mutualFriendsText: "12 Mutual friends",
        addFriendButtonText: "Add Friend",
        removeButtonText: "Remove",
    },
    {
        userImage: "images/img_rectangle_1339_228x228.png",
        userName: "Kai Caudle",
        mutualFriendsText: "12 Mutual friends",
        addFriendButtonText: "Add Friend",
        removeButtonText: "Remove",
    },
    {
        userImage: "images/img_rectangle_1339_1.png",
        userName: "Jane Cooper",
        mutualFriendsText: "12 Mutual friends",
        addFriendButtonText: "Add Friend",
        removeButtonText: "Remove",
    },
    {
        userImage: "images/img_rectangle_1339_2.png",
        userName: "Wade Warren",
        mutualFriendsText: "12 Mutual friends",
        addFriendButtonText: "Add Friend",
        removeButtonText: "Remove",
    },
    {
        userImage: "images/img_rectangle_1339_3.png",
        userName: "Leslie Alexander",
        mutualFriendsText: "12 Mutual friends",
        addFriendButtonText: "Add Friend",
        removeButtonText: "Remove",
    },
    {
        userImage: "images/img_rectangle_1339_4.png",
        userName: "Jenny Wilson",
        mutualFriendsText: "12 Mutual friends",
        addFriendButtonText: "Add Friend",
        removeButtonText: "Remove",
    },
    {
        userImage: "images/img_rectangle_1339_5.png",
        userName: "Robert Fox",
        mutualFriendsText: "12 Mutual friends",
        addFriendButtonText: "Add Friend",
        removeButtonText: "Remove",
    },
    {
        userImage: "images/img_rectangle_1339_6.png",
        userName: "Jacob Jones",
        mutualFriendsText: "12 Mutual friends",
        addFriendButtonText: "Add Friend",
        removeButtonText: "Remove",
    },
    {
        userImage: "images/img_rectangle_1339_7.png",
        userName: "Floyd Miles",
        mutualFriendsText: "12 Mutual friends",
        addFriendButtonText: "Add Friend",
        removeButtonText: "Remove",
    },
    {
        userImage: "images/img_rectangle_1339_8.png",
        userName: "Devon Lane",
        mutualFriendsText: "12 Mutual friends",
        addFriendButtonText: "Add Friend",
        removeButtonText: "Remove",
    },
];

export default function AddFriendsColumn() {
    const [searchBarValue, setSearchBarValue] = useState("");

    return (
        <div className="mb-1 flex flex-col items-center">
            <div className="container-xs flex flex-col gap-10 md:px-5">
                <div className="flex items-center justify-between gap-5 md:flex-col">
                    <Heading as="h1" className="mb-3.5 self-end text-[16px] font-semibold !text-black-900_02">
                        People you may know
                    </Heading>
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
                <div className="grid grid-cols-5 justify-center gap-8 md:grid-cols-3 sm:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                            <UserProfile2 {...d} key={"list" + index} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}