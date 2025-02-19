// import { Button, Heading, Img, Text } from "../../components";
// import React from "react";
// import Sidebar1 from "../../components/Sidebar1";
// import NavBar from "../../components/Navbar";
// import Footer from "../../components/Footer";
//
// export default function ProfilePage() {
//     // Sample user data
//     const user = {
//         profilePic: "images/logo.png",
//         name: "John Doe",
//         bio: "Sustainability advocate and eco-friendly lifestyle enthusiast. Passionate about reducing my carbon footprint and promoting green living.",
//         posts: 25,
//         replies: 100,
//         followers: 320,
//         following: 180,
//     };
//
//     return (
//         <>
//             <NavBar />
//             <div className="w-full py-5 md:py-10 bg-gray-50">
//                 <div className="container mx-auto md:px-10">
//                     <div className="flex gap-8">
//                         {/* Sidebar (left) */}
//                         <div className="w-[20%] hidden lg:block">
//                             <Sidebar1 profilePictureUrl={user.profilePic} />
//                         </div>
//
//                         {/* Content (middle) */}
//                         <div className="flex-1 flex flex-col gap-8">
//                             <div className="flex flex-col gap-8 px-5 md:px-10">
//                                 {/* Profile Header */}
//                                 <div className="flex items-center gap-8">
//                                     <Img src={user.profilePic} alt={user.name} className="h-24 w-24 rounded-full" />
//                                     <div className="flex flex-col">
//                                         <Heading size="headinglg" as="h1" className="text-3xl font-semibold text-blue-900">
//                                             {user.name}
//                                         </Heading>
//                                         <Text size="textmd" className="text-gray-700 mt-2">
//                                             {user.bio}
//                                         </Text>
//                                     </div>
//                                 </div>
//
//                                 {/* Analytics Section */}
//                                 <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
//                                     <Heading size="headingmd" as="h2" className="text-2xl font-semibold text-gray-900 mb-4">
//                                         User Analytics
//                                     </Heading>
//                                     <div className="grid grid-cols-2 gap-6">
//                                         <div className="flex flex-col items-center">
//                                             <Text size="textxl" className="font-semibold text-gray-900">{user.posts}</Text>
//                                             <Text size="textsm" className="text-gray-500">Posts</Text>
//                                         </div>
//                                         <div className="flex flex-col items-center">
//                                             <Text size="textxl" className="font-semibold text-gray-900">{user.replies}</Text>
//                                             <Text size="textsm" className="text-gray-500">Replies</Text>
//                                         </div>
//                                         <div className="flex flex-col items-center">
//                                             <Text size="textxl" className="font-semibold text-gray-900">{user.followers}</Text>
//                                             <Text size="textsm" className="text-gray-500">Followers</Text>
//                                         </div>
//                                         <div className="flex flex-col items-center">
//                                             <Text size="textxl" className="font-semibold text-gray-900">{user.following}</Text>
//                                             <Text size="textsm" className="text-gray-500">Following</Text>
//                                         </div>
//                                     </div>
//                                 </div>
//
//                                 {/* Action Buttons */}
//                                 <div className="flex gap-6 mt-6">
//                                     <Button
//                                         shape="round"
//                                         className="px-6 py-2 font-semibold text-white bg-[#1D3016] hover:bg-[#2A3C22] focus:ring-2 focus:ring-green-400 transition-all"
//                                     >
//                                         Edit Profile
//                                     </Button>
//                                     <Button
//                                         shape="round"
//                                         className="px-6 py-2 font-semibold text-white bg-gray-600 hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 transition-all"
//                                     >
//                                         View Activity
//                                     </Button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }

import { Button, Heading, Img, Text } from "../../components";
import React from "react";
import Sidebar1 from "../../components/Sidebar1";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ProfilePage() {
    // Sample user data
    const user = {
        profilePic: "images/logo.png",
        name: "John Doe",
        bio: "Sustainability advocate and eco-friendly lifestyle enthusiast. Passionate about reducing my carbon footprint and promoting green living.",
        posts: 25,
        replies: 100,
        followers: 320,
        following: 180,
    };

    return (
        <>
            <NavBar />
            <div className="w-full py-5 md:py-10 bg-gray-50">
                <div className="container mx-auto md:px-10">
                    <div className="flex gap-8">
                        {/* Sidebar (left) */}
                        <div className="w-[20%]">
                            <Sidebar1 profilePictureUrl={user.profilePic} />
                        </div>

                        {/* Content (middle) */}
                        <div className="flex-1 flex flex-col gap-8">
                            <div className="flex flex-col gap-8 px-5 md:px-10">
                                {/* Profile Header */}
                                <div className="flex items-center gap-8">
                                    <Img src={user.profilePic} alt={user.name} className="h-24 w-24 rounded-full" />
                                    <div className="flex flex-col">
                                        <Heading size="headinglg" as="h1" className="text-3xl font-semibold text-blue-900">
                                            {user.name}
                                        </Heading>
                                        <Text size="textmd" className="text-gray-700 mt-2">
                                            {user.bio}
                                        </Text>
                                    </div>
                                </div>

                                {/* Analytics Section */}
                                <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
                                    <Heading size="headingmd" as="h2" className="text-2xl font-semibold text-gray-900 mb-4">
                                        User Analytics
                                    </Heading>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="flex flex-col items-center">
                                            <Text size="textxl" className="font-semibold text-gray-900">{user.posts}</Text>
                                            <Text size="textsm" className="text-gray-500">Posts</Text>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Text size="textxl" className="font-semibold text-gray-900">{user.replies}</Text>
                                            <Text size="textsm" className="text-gray-500">Replies</Text>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Text size="textxl" className="font-semibold text-gray-900">{user.followers}</Text>
                                            <Text size="textsm" className="text-gray-500">Followers</Text>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Text size="textxl" className="font-semibold text-gray-900">{user.following}</Text>
                                            <Text size="textsm" className="text-gray-500">Following</Text>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-6 mt-6">
                                    <Button
                                        shape="round"
                                        className="px-6 py-2 font-semibold text-white bg-[#1D3016] hover:bg-[#2A3C22] focus:ring-2 focus:ring-green-400 transition-all"
                                    style={{backgroundColor: "#1D3016"}}
                                    >
                                        Edit Profile
                                    </Button>
                                    <Button
                                        shape="round"
                                        className="px-6 py-2 font-semibold text-white bg-[#1D3016] hover:bg-[#2A3C22] focus:ring-2 focus:ring-green-400 transition-all"
                                    style={{backgroundColor: "#1D3016"}}
                                    >
                                        View Activity
                                    </Button>
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
