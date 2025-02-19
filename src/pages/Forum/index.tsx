import { Button, Heading, Img, Text } from "../../components";
import React from "react";
import Sidebar1 from "../../components/Sidebar1";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ForumThreads() {
    const threads = [
        {
            profilePic: "images/logo.png",
            name: "John Doe",
            time: "2 hours ago",
            title: "How to start with sustainable living?",
            content: "I want to reduce my carbon footprint. Any suggestions on where to start?",
            replies: 10
        },
        {
            profilePic: "images/logo.png",
            name: "Jane Smith",
            time: "5 hours ago",
            title: "Best places to buy eco-friendly products?",
            content: "Looking for affordable and sustainable products. Any recommendations?",
            replies: 5
        }
    ];

    return (
        <>
            <NavBar />
            <div className="w-full py-5 md:py-10 bg-gray-50">
                <div className="container mx-auto md:px-10">
                    <div className="flex gap-8">
                        {/* Sidebar (left) */}
                        <div className="w-[20%]">
                            <Sidebar1 profilePictureUrl="images/logo.png" />
                        </div>

                        {/* Content (middle) */}
                        <div className="flex-1 flex flex-col gap-8">
                            <div className="flex flex-col gap-8 px-5 md:px-10">
                                <Heading size="headinglg" as="h1" className="text-2xl font-semibold text-[#1d3016] mb-4">
                                    Community Forum
                                </Heading>

                                <div className="flex flex-col gap-8">
                                    {threads.map((thread, index) => (
                                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                                            <div className="flex items-center gap-4 mb-4">
                                                <Img src={thread.profilePic} alt={thread.name} className="h-12 w-12 rounded-full" />
                                                <div className="flex flex-col">
                                                    <Text size="textmd" className="font-semibold text-gray-900">{thread.name}</Text>
                                                    <Text size="textsm" className="text-gray-500">{thread.time}</Text>
                                                </div>
                                            </div>

                                            <Heading size="headingmd" as="h2" className="text-xl font-semibold text-gray-900 mb-3">
                                                {thread.title}
                                            </Heading>

                                            <Text size="textmd" className="text-base text-gray-700 mb-4">
                                                {thread.content}
                                            </Text>

                                            <div className="flex items-center gap-6">
                                                <Button
                                                    shape="round"
                                                    className="rounded-lg px-6 py-2 font-semibold text-white bg-[#1D3016] hover:bg-[#2A3C22] focus:ring-2 focus:ring-green-400 transition-all"
                                                style={{backgroundColor: "#1D3016", color: "white"}}>
                                                    Reply
                                                </Button>

                                                <Text size="textsm" className="text-gray-500">
                                                    {thread.replies} Replies
                                                </Text>
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
