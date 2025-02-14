import { Heading, Img } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import UserProfileActivity from "../../components/UserProfileActivity";
import React, { Suspense } from "react";

const data = [
    {
        profileImage: "images/img_profileimg_large_10.png",
        userPostText: 'Anton Posted a new video "Video Name". 5w',
        optionsIcon: "images/img_ellipsis_h_outline.svg",
    },
    {
        profileImage: "images/img_profileimg_large_11.png",
        userPostText: 'Anton Posted a new video "Video Name". 5w',
        optionsIcon: "images/img_ellipsis_h_outline.svg",
    },
    {
        profileImage: "images/img_profileimg_large_9.png",
        userPostText: 'Anton Posted a new video "Video Name". 5w',
        optionsIcon: "images/img_profileimg_large_12.png",
    },
    {
        profileImage: "images/img_profileimg_large_13.png",
        userPostText: 'Anton Posted a new video "Video Name". 5w',
        optionsIcon: "images/img_ellipsis_h_outline.svg",
    },
];

export default function ActivityfeedRow() {
    return (
        <div className="mb-1 flex justify-center">
            <div className="container-xs flex justify-center px-14 md:px-5">
                <div className="flex w-[52%] flex-col gap-[42px] bg-white-a700 p-6 shadow-sm md:w-full sm:p-5">
                    <div className="flex items-center justify-between gap-5">
                        <Img src="images/img_arrow_left_24x24.svg" alt="Arrowleft" className="h-[24px]" />
                        <Heading as="h1" className="mr-[222px] self-end text-[16px] font-semibold">
                            Activity Feed
                        </Heading>
                    </div>
                    <div className="flex flex-col gap-[42px]">
                        <div className="flex flex-col items-start justify-center gap-[22px]">
                            <Heading size="texts" as="h2" className="text-[14px] font-medium">
                                Today
                            </Heading>
                            <div className="flex flex-col gap-6 self-stretch">
                                <UserProfileActivity />
                                <UserProfileActivity profileImage="images/img_profileimg_large_9.png" />
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[22px]">
                            <Heading size="texts" as="h3" className="text-[14px] font-medium">
                                This Month
                            </Heading>
                            <div className="flex flex-col gap-6 self-stretch">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {data.map((d, index) => (
                                        <UserProfile1 {...d} key={"list" + index} />
                                    ))}
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}