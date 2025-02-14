import { Img, Text, Heading } from "./..";
import React from "react";

interface Props {
    className?: string;
}

export default function TwitterFeedDisplayNews({ ...props }: Props) {
    return (
        <div {...props} className={`${props.className} flex items-start self-stretch gap-5 p-2 flex-1`}>
            <div className="flex flex-1 flex-col gap-1 self-center">
                <div className="flex flex-wrap">
                    <Heading as="p" className="text-[14px] font-medium !text-blue_gray-600">
                        US news
                    </Heading>
                    <Heading as="p" className="text-[14px] font-normal !text-blue_gray-600">
                        4h ago
                    </Heading>
                </div>
                <Heading size="headings" as="p" className="text-[14px] font-bold leading-4 !text-gray-900_01">
                    Parler may go offline following suspensions by Amazon, Apple and Google
                </Heading>
                <div className="flex flex-wrap">
                    <Text as="p" className="text-[12px] font-normal !text-blue_gray-600">
                        Trending with
                    </Text>
                    <Text as="p" className="text-[12px] font-normal !text-blue-500">
                        #trump
                    </Text>
                </div>
            </div>
            <Img src="images/img_placeholder.png" alt="Us News" className="h-[68px] w-[22%] rounded-[12px] object-contain" />
        </div>
    );
}