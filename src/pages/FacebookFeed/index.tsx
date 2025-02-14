import { Helmet } from "react-helmet";
import { Img, Heading, Button, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import PhotographyProfile from "../../components/PhotographyProfile";
import React, { Suspense } from "react";

const data = [
    { profileImage: "images/img_rectangle_58.png", profileDescription: "Photography House" },
    { profileImage: "images/img_rectangle_55.png", profileDescription: "Pizza Hood" },
    { profileImage: "images/img_rectangle_56.png", profileDescription: "8 Ball Pool" },
    { profileImage: "images/img_rectangle_57.png", profileDescription: "Cloud 9 Pent" },
    { profileImage: "images/img_rectangle_58_48x48.png", profileDescription: "+46 Restaurant" },
];

const data1 = [
    { userImage: "images/img_play_48x48.png", userName: "Rose J. Henry" },
    { userImage: "images/img_profileimg_large_18.png", userName: "Kai Caudle" },
    { userImage: "images/img_profileimg_large_20.png", userName: "Carmelo Rousseau" },
    { userImage: "images/img_profileimg_large_21.png", userName: "Ali Comer" },
    { userImage: "images/img_profileimg_large_22.png", userName: "Jacklyn Kovach" },
    { userImage: "images/img_profileimg_large_23.png", userName: "Landon Mosby" },
    { userImage: "images/img_profileimg_large_24.png", userName: "Man Marin" },
    { userImage: "images/img_profileimg_large_25.png", userName: "Benito Nickel" },
    { userImage: "images/img_profileimg_large_26.png", userName: "Angelyn Weiner" },
    { userImage: "images/img_profileimg_large_19.png", userName: "Anton Ligon" },
    { userImage: "images/img_profileimg_large_27.png", userName: "Danial Sams" },
];

export default function FacebookFeedPage() {
    const [searchBarValue1, setSearchBarValue1] = React.useState("");

    return (
        <>
            <Helmet>
                <title>ni&#39;s Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex w-full flex-col gap-[54px] bg-gray-50_01 sm:gap-[27px]">
                <header className="flex items-center justify-center bg-white-a700 py-6 shadow-sm sm:py-5">
                    <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:px-5">
                        <div className="flex w-[28%] items-center justify-center gap-4 md:w-full">
                            <Img src="images/img_header_logo.svg" alt="Header Logo" className="h-[48px] w-[48px] object-contain" />
                            <Input
                                color="blue_gray_50"
                                size="xs"
                                name="search"
                                placeholder="Search Facebook"
                                value={searchBarValue1}
                                onChange={(e) => setSearchBarValue1(e.target.value)}
                                prefix={
                                    <div className="flex h-[20px] w-[20px] items-center justify-center">
                                        <Img src="images/img_search.svg" alt="Search" className="h-[20px] w-[20px] object-contain" />
                                    </div>
                                }
                                suffix={searchBarValue1.length > 0 ? <CloseSVG onClick={() => setSearchBarValue1("")} /> : null}
                                className="flex-grow gap-7 self-end rounded-[22px] font-semibold text-blue_gray-400_01"
                            />
                        </div>
                        <div className="flex w-[36%] justify-center md:w-full">
                            <div className="flex w-full items-center justify-between gap-5 sm:flex-col">
                                {/* Add valid links or buttons as needed */}
                                {/* Example of using a button when href isn't valid */}
                                <div className="flex w-[16%] flex-col items-center gap-3 sm:w-full">
                                    <button>
                                        <Img src="images/img_home.svg" alt="Home" className="h-[30px]" />
                                    </button>
                                    <div className="h-[3px] w-full self-stretch bg-blue-a700_01" />
                                </div>
                                {/* If using anchor tags, provide valid hrefs */}
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button>
                                <Button color="blue_gray_50" size="2xl" className="w-[50px] rounded-[24px] px-3">
                                    <Img src="images/img_user_50x50.svg" alt="User" />
                                </Button>
                            </button>
                        </div>
                    </div>
                </header>
                <div className="flex justify-center">
                    <div className="container-xs mb-10 flex justify-center md:px-5">
                        <div className="flex w-full items-start gap-[30px] md:flex-col">
                            <div className="flex w-[18%] flex-col items-start gap-[30px] md:w-full">
                                <div className="flex flex-col gap-[30px] self-stretch">
                                    <Suspense fallback={<div>Loading feed...</div>}>
                                        {data.map((d, index) => (
                                            <PhotographyProfile {...d} key={"yourshortcuts" + index} className="mr-14" />
                                        ))}
                                    </Suspense>
                                </div>
                            </div>
                            {/* Remainder of components */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
