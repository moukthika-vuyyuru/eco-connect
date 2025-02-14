import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import FriendListColumn from "./FriendListColumn";
import React from "react";

export default function FriendListPage() {
    return (
        <>
            <Helmet>
                <title>Moukthika&#39;s Application</title>
                <meta name="description" content="web site created using create-react-app" />
            </Helmet>
            <div className="flex w-full flex-col gap-[54px] bg-gray-50_01 sm:gap-[27px]">
                <Header />
                <FriendListColumn />
            </div>
        </>
    );
}