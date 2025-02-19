import FriendListColumn from "./FriendListColumn";
import React from "react";

export default function FriendListPage() {
    return (
        <div className="flex w-full flex-col gap-[54px] bg-gray-50_01 sm:gap-[27px]">
            <FriendListColumn/>
        </div>
    );
}