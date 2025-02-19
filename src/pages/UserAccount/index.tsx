import { Helmet } from "react-helmet";
import { Img, Button, Heading } from "../../components";
import Sidebar1 from "../../components/Sidebar1";
import Sidebar11 from "../../components/Sidebar11";
import UseraccountRowincomevs from "./UseraccountRowincomevs";
import UseraccountStackspendanaly from "./UseraccountStackspendanaly";
import React from "react";

export default function UserAccountPage() {
    return (
        <>
            <Helmet>
                <title>Moukthika&#39;s Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex w-full bg-gray-50">
                <Sidebar1 profilePictureUrl={"images/logo.png"} />
                <div className="flex w-[58%] flex-col gap-[30px] px-[30px] py-8 sm:p-5">
                    <header>
                        <div className="flex items-center justify-between gap-5">
                            <Heading as="h6" className="text-[16px] font-semibold">
                                Dashboard
                            </Heading>
                            <div className="flex gap-6">
                                <a href="#">
                                    <Button
                                        color="white_A700"
                                        size="3xl"
                                        shape="circle"
                                        className="w-[56px] rounded-[28px] border border-solid border-blue_gray-100 px-3"
                                    >
                                        <Img src="images/img_bell_outline.svg" />
                                    </Button>
                                </a>
                                <Img
                                    src="images/img_play.png"
                                    alt="Play"
                                    className="h-[56px] w-[50%] object-contain"
                                />
                            </div>
                        </div>
                    </header>
                    <div className="mb-[94px] flex flex-col gap-10">
                        <UseraccountStackspendanaly />
                        <UseraccountRowincomevs />
                    </div>
                </div>
                <Sidebar11 />
            </div>
        </>
    );
}