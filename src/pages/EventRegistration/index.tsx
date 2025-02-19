import React from 'react';
import { Button, Text, Heading, Img, Input } from "../../components";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar1 from "../../components/Sidebar1";
import { useState } from "react";

const eventsData = [
    {
        title: "Tech Conference 2025",
        date: "March 10, 2025 at 10:00 AM",
        location: "New York City, NY",
        description: "Join us for the largest tech conference of the year.",
        participationGuidelines: "This event is open to all tech enthusiasts.",
        numParticipants: 120,
        tags: ["Tech", "Innovation"]
    },
    {
        title: "Green Earth Summit",
        date: "April 12, 2025 at 9:00 AM",
        location: "San Francisco, CA",
        description: "A summit focused on sustainability and climate action.",
        participationGuidelines: "Please bring your own reusable materials.",
        numParticipants: 75,
        tags: ["Sustainability", "Environment"]
    },
    {
        title: "AI Innovation Expo",
        date: "May 22, 2025 at 11:00 AM",
        location: "Los Angeles, CA",
        description: "Explore the latest advancements in AI and machine learning.",
        participationGuidelines: "Register early for guaranteed access to workshops.",
        numParticipants: 150,
        tags: ["AI", "Tech"]
    },
];

const registeredEventsData = [
    {
        title: "Tech Conference 2025",
        date: "March 10, 2025 at 10:00 AM",
        location: "New York City, NY",
        description: "You've successfully registered for the Tech Conference 2025.",
        tags: ["Tech", "Innovation"]
    },
    {
        title: "Green Earth Summit",
        date: "April 12, 2025 at 9:00 AM",
        location: "San Francisco, CA",
        description: "You've successfully registered for the Green Earth Summit.",
        tags: ["Sustainability", "Environment"]
    },
];

export default function EventRegistrationPage() {
    const [searchBarValue, setSearchBarValue] = useState("");
    const [activeTab, setActiveTab] = useState("explore");

    return (
        <>
            <NavBar />
            <div className="min-h-screen flex flex-col bg-gray-50">
                <div className="flex flex-grow">
                    <Sidebar1 profilePictureUrl={"images/logo.png"} />
                    <div className="w-full py-10 md:py-12 flex-grow">
                        <div className="container mx-auto px-6 md:px-8">
                            {/* Tabs */}
                            <div className="flex justify-start gap-10 mb-6 border-[#1d3016]">
                                <Button
                                    onClick={() => setActiveTab("explore")}
                                    className={`${
                                        activeTab === "explore"
                                            ? "text-white border-b-4 border-[#1d3016] px-6 py-3 text-xl font-bold transition-all duration-300"
                                            : "text-[#1d3016] bg-white hover:bg-[#f0f0f0] border-b-4 border-transparent px-6 py-3 text-xl font-bold transition-all duration-300"
                                    } rounded-md`}
                                >
                                    Explore Events
                                </Button>
                                <Button
                                    onClick={() => setActiveTab("yourEvents")}
                                    className={`${
                                        activeTab === "yourEvents"
                                            ? "text-white border-b-4 border-[#1d3016] px-6 py-3 text-xl font-bold transition-all duration-300"
                                            : "text-[#1d3016] bg-white hover:bg-[#f0f0f0] border-b-4 border-transparent px-6 py-3 text-xl font-bold transition-all duration-300"
                                    } rounded-md`}
                                >
                                    Your Events
                                </Button>
                            </div>

                            {/* Content Based on Active Tab */}
                            <div className="mt-6">
                                {activeTab === "explore" && (
                                    <div className="flex flex-row gap-20">
                                        {eventsData.map((event, index) => (
                                            <div
                                                key={index}
                                                className="bg-white shadow-lg rounded-xl border-2 border-[#1d3016] p-6 hover:shadow-xl transition-all duration-300"
                                            >
                                                <Heading as="h3" className="text-3xl font-bold text-[#1d3016] mb-4">
                                                    {event.title}
                                                </Heading>

                                                <div className="flex items-center gap-2 text-gray-600 text-xl mb-2">
                                                    <Img src="images/calendar.svg" alt="Date" className="w-5 h-5" />
                                                    <Text>{event.date}</Text>
                                                </div>

                                                <div className="flex items-center gap-2 text-gray-600 text-xl mb-2">
                                                    <Img src="images/location.svg" alt="Location" className="w-5 h-5" />
                                                    <Text>{event.location}</Text>
                                                </div>

                                                <div className="flex items-center gap-2 text-gray-600 text-xl mb-4">
                                                    <Img src="images/people.svg" alt="Participants" className="w-5 h-5" />
                                                    <Text>{event.numParticipants} participants</Text>
                                                </div>

                                                <Text as="p" className="text-gray-700 text-sm mb-4">
                                                    {event.description}
                                                </Text>

                                                <Text as="p" className="text-2xl text-gray-500 mb-4">
                                                    <span className="font-semibold">Guidelines:</span> {event.participationGuidelines}
                                                </Text>

                                                <Button
                                                    style={{ backgroundColor: "#1d3016", color: "white" }}
                                                    className="w-full rounded-md px-5 py-3 hover:bg-[#162c10] transition-all"
                                                >
                                                    Register
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === "yourEvents" && (
                                    <div className="flex flex-row gap-20">
                                        {registeredEventsData.slice(0, 2).map((event, index) => (
                                            <div
                                                key={index}
                                                className="bg-white shadow-lg rounded-xl border-2 border-[#1d3016] p-6 hover:shadow-xl transition-all duration-300"
                                            >
                                                <Heading as="h3" className="text-3xl font-bold text-gray-800 mb-4">
                                                    {event.title}
                                                </Heading>

                                                <div className="flex items-center gap-2 text-gray-600 text-xl mb-2">
                                                    <Img src="images/calendar.svg" alt="Date" className="w-5 h-5" />
                                                    <Text>{event.date}</Text>
                                                </div>

                                                <div className="flex items-center gap-2 text-gray-600 text-xl mb-2">
                                                    <Img src="images/location.svg" alt="Location" className="w-5 h-5" />
                                                    <Text>{event.location}</Text>
                                                </div>

                                                <Text as="p" className="text-gray-700 text-sm mb-4">
                                                    {event.description}
                                                </Text>
                                                {/* Display Tags */}
                                                <div className="flex gap-2 mt-4">
                                                    {event.tags && event.tags.map((tag, tagIndex) => (
                                                        <span key={tagIndex} className="bg-[#d3d3d3] text-[#1d3016] py-1 px-3 rounded-full text-sm">
                                {tag}
                            </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}