import { Button, Heading, Img, Text } from "../../components";
import React from "react";
import Sidebar1 from "../../components/Sidebar1";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PricingengineColumn() {
    const items = [...Array(12)].map(() => ({
        name: "boAt Airdopes 131",
        cost: "$49.99",
        location: "San Francisco, CA",
        image: "images/logo.png",
    }));

    return (
        <>
            <NavBar />
            <div className="w-full py-[5px] md:py-5">
                <div className="container mx-auto md:px-5">
                    <div className="flex gap-[20px]">
                        {/* Sidebar (left) */}
                        <div className="w-[20%]">
                            <Sidebar1 profilePictureUrl="images/logo.png" />
                        </div>

                        {/* Content (middle) */}
                        <div className="flex flex-1 flex-col gap-[30px]">
                            <div className="flex flex-col gap-6 md:px-5">
                                <div className="flex py-2">
                                    <Heading size="headinglg" as="h1" className="text-[18px] font-semibold !text-blue_gray-900">
                                        Browse Local Deals
                                    </Heading>
                                </div>
                                <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
                                    {items.map((item, index) => (
                                        <div key={index} className="flex flex-col gap-2 rounded-lg bg-white-a700 p-6 shadow-sm sm:p-5">
                                            <Img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-[194px] rounded object-cover"
                                            />
                                            <div className="flex flex-col gap-2">
                                                <Heading size="headingmd" as="h2" className="text-[18px] font-medium capitalize">
                                                    {item.name}
                                                </Heading>
                                                <Text size="textlg" as="p" className="text-[16px] font-normal">
                                                    {item.cost}
                                                </Text>
                                                <Text size="textmd" as="p" className="text-[14px] font-normal text-gray-500">
                                                    {item.location}
                                                </Text>
                                                <Button shape="round" className="self-stretch rounded-md px-[34px] font-semibold sm:px-5 bg-[#1D3016] text-white" style={{ backgroundColor: "#1D3016" }}>
                                                    Chat
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
