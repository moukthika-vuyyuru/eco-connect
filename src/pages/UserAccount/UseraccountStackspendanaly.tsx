import { Heading, SelectBox, Img, Button } from "../../components";
import React from "react";

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function UseraccountStackspendanaly() {
    return (
        <div className="relative h-[376px] content-center md:h-auto">
            <div className="flex flex-1 items-start md:flex-col">
                <div className="flex w-full flex-col gap-6 self-center rounded-md border border-solid border-blue_gray-100 bg-white-a700 px-2.5 py-6 sm:py-5">
                    <div className="mx-2.5 flex flex-col items-start gap-3 md:mx-0">
                        <Heading as="h1" className="text-[16px] font-semibold">
                            Spend Analysis
                        </Heading>
                        <div className="flex self-stretch">
                            <Img src="images/img_arrow_growth_outline.svg" alt="Arrowgrowth" className="h-[16px]" />
                            <Heading size="texts" as="h2" className="text-[14px] font-normal !text-black-900_02">
                                <span className="text-green-600">88%</span>
                                <span className="text-black-900_02">&nbsp; Compared to last week</span>
                            </Heading>
                        </div>
                    </div>
                    <div className="mr-2.5 md:mr-0">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-center gap-0.5">
                                <div className="flex flex-col items-end justify-center gap-[22px]">
                                    <Heading size="texts" as="h3" className="text-[14px] font-normal">
                                        25k
                                    </Heading>
                                    <Heading size="texts" as="h4" className="text-[14px] font-normal">
                                        20k
                                    </Heading>
                                    <Heading size="texts" as="h5" className="text-[14px] font-normal">
                                        15k
                                    </Heading>
                                    <Heading size="texts" as="h6" className="text-[14px] font-normal">
                                        10k
                                    </Heading>
                                    <Heading size="texts" as="p" className="text-[14px] font-normal">
                                        5k
                                    </Heading>
                                    <div className="flex h-[200px] flex-1 items-start justify-center bg-[url(/public/images/img_group_20.png)] bg-cover bg-no-repeat p-[26px] md:h-auto sm:p-5">
                                        <Heading size="texts" as="p" className="text-[14px] font-normal">
                                            0k
                                        </Heading>
                                    </div>
                                    <Button
                                        color="black_900_01"
                                        size="4xl"
                                        shape="round"
                                        className="min-w-[100px] rounded-[5px] px-2 font-medium"
                                    >
                                        <>
                                            $2311.65
                                            <br />5 May
                                        </>
                                    </Button>
                                </div>
                            </div>
                            <Img src="images/img_arrow.svg" alt="Arrow" className="mr-[42px] h-[8px] md:mr-0" />
                            <div className="flex wrap justify-center gap-5">
                                <Heading size="texts" as="p" className="text-[14px] font-normal">
                                    Mon
                                </Heading>
                                <Heading size="texts" as="p" className="text-[14px] font-normal">
                                    Tue
                                </Heading>
                                <Heading size="texts" as="p" className="text-[14px] font-normal">
                                    Wed
                                </Heading>
                                <Heading size="texts" as="p" className="text-[14px] font-normal">
                                    Thu
                                </Heading>
                                <Heading size="texts" as="p" className="text-[14px] font-normal">
                                    Fri
                                </Heading>
                                <Heading size="texts" as="p" className="text-[14px] font-normal">
                                    Sat
                                </Heading>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[22px] flex w-full justify-center px-14 md:px-5">
                    <Img src="images/img_checkmark.svg" alt="Checkmark" className="relative z-[1] h-[20px]" />
                    <Heading as="h6" className="text-[16px] font-semibold !text-blue_gray-600">
                        This Week
                    </Heading>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 top-0 z-[2] my-auto flex h-max w-[46%] flex-col gap-[26px] rounded-lg border border-solid border-blue_gray-100 bg-white-a700 p-[22px] sm:p-5">
                <div className="flex justify-between gap-5">
                    <Heading as="h6" className="text-[16px] font-semibold">
                        Expense Tracking
                    </Heading>
                    <SelectBox
                        shape="square"
                        indicator={<Img src="images/img_checkmark.svg" alt="Checkmark" className="h-[20px] w-[20px]" />}
                        name="thismonth"
                        placeholder="This Month"
                        options={dropDownOptions}
                        className="w-[36%] font-semibold text-blue_gray-600"
                    />
                </div>
                <div className="flex flex-col gap-[26px]">
                    <div className="relative mx-[60px] h-[200px] rounded-[100px] bg-blue-900 md:mx-0 md:h-auto">
                        <Heading as="h6" className="ml-[34px] mt-[60px] text-[16px] font-semibold !text-white-a700 md:ml-0">
                            28%
                        </Heading>
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[200px] flex-1 rounded-[100px] bg-blue-800 md:h-auto">
                            <Heading as="h6" className="mr-[46px] mt-[42px] text-[16px] font-semibold !text-white-a700 md:mr-0">
                                24%
                            </Heading>
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[200px] flex-1 content-end rounded-[100px] bg-blue-a700_01 md:h-auto">
                                <Heading as="h6" className="mb-14 ml-auto mr-[42px] text-[16px] font-semibold !text-white-a700 md:mr-0">
                                    36%
                                </Heading>
                                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[200px] w-[200px] flex-col items-center justify-center rounded-[100px] bg-blue-a200_01 md:h-auto">
                                    <Heading as="h6" className="mt-[102px] text-[16px] font-semibold !text-white-a700">
                                        12%
                                    </Heading>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex">
                            <div className="flex w-full items-center gap-[9px]">
                                <div className="h-[8px] w-[20px] rounded-sm bg-blue-900" />
                                <Heading as="h6" className="text-[16px] font-semibold">
                                    Travel
                                </Heading>
                            </div>
                            <div className="flex w-full items-start justify-end gap-[9px]">
                                <div className="mt-1 h-[8px] w-[20px] rounded-sm bg-blue-800" />
                                <Heading as="h6" className="self-center text-[16px] font-semibold">
                                    Sports
                                </Heading>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-full items-start gap-[9px]">
                                <div className="mt-1 h-[8px] w-[20px] rounded-sm bg-blue-a700_01" />
                                <Heading as="h6" className="self-center text-[16px] font-semibold">
                                    Shopping
                                </Heading>
                            </div>
                            <div className="flex w-full items-center justify-end gap-[9px]">
                                <div className="mb-1 h-[8px] w-[20px] self-end rounded-sm bg-blue-a200_01" />
                                <Heading as="h6" className="text-[16px] font-semibold">
                                    Medicine
                                </Heading>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}