import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import InstagramsigninColumn from "./InstagramSigninColumn";
import React from "react";

export default function InstagramSigninPage() {
    return (
        <>
            <Helmet>
                <title>App</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex w-full flex-col gap-14 bg-gray-50_01 sm:gap-7">
                <Header />
                <  InstagramsigninColumn />
            </div>
        </>
    );
}