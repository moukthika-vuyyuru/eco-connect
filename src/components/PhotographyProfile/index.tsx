import { Heading, Img } from "./..";
import React from "react";

interface Props {
    className?: string;
    profileImage?: string;
    profileDescription?: React.ReactNode;
}

export default function PhotographyProfile({
                                               profileImage = "images/img_rectangle_58.png",
                                               profileDescription = "Photography House",
                                               ...props
                                           }: Props) {
    return (
        <div {...props} className={`${props.className} flex items-center self-stretch gap-3 md:mr-0 flex-1`}>
            <Img src={profileImage} alt="Photography" className="h-[48px] rounded-[10px] object-cover" />
            <Heading size="texts" as="p" className="mb-3 self-end text-[14px] font-medium !text-black-900">
                {profileDescription}
            </Heading>
        </div>
    );
}