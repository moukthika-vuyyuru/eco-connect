import { Heading, Text, Img, SelectBox } from "../../components";
import React from "react";

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function UseraccountRowincomevs() {
    return (
        <div className="flex flex-col gap-5 rounded-lg border border-solid border-blue_gray-100 bg-white-a700 px-2.5 py-6 sm:py-5">
            <div className="mx-3 flex justify-between gap-5 md:mx-0">
                <Heading as="h6" className="text-[16px] font-semibold">
                    Income vs Spending Report
                </Heading>
                <SelectBox
                    shape="square"
                    indicator={<Img src="images/img_checkmark.svg" alt="Checkmark" className="h-[20px] w-[20px]" />}
                    name="yearly"
                    placeholder="Yearly"
                    options={dropDownOptions}
                    className="w-[10%] font-semibold text-blue_gray-600"
                />
            </div>
            <div className="ml-3 flex flex-col gap-[18px] md:ml-0">
                <div className="flex items-center justify-center gap-4 md:flex-col">
                    <div className="flex flex-col items-end gap-6">
                        <Text as="p" className="text-[12px] font-normal">30K</Text>
                        <Text as="p" className="text-[12px] font-normal">25K</Text>
                        <Text as="p" className="text-[12px] font-normal">20K</Text>
                        <Text as="p" className="text-[12px] font-normal">15K</Text>
                        <Text as="p" className="text-[12px] font-normal">10K</Text>
                        <Text as="p" className="text-[12px] font-normal">5K</Text>
                        <Text as="p" className="mb-[22px] text-[12px] font-normal">0K</Text>
                    </div>
                    <div className="flex flex-1 items-center justify-center gap-2 md:self-stretch sm:flex-col">
                        <div className="flex flex-col items-start gap-2.5">
                            <Img src="images/img_table.svg" alt="Table" className="h-[258px] w-[82%] object-contain" />
                            <Text as="p" className="text-[12px] font-normal">Jan</Text>
                        </div>
                        <div className="flex flex-1 flex-col items-end gap-2.5 px-1.5 sm:self-stretch">
                            <Img src="images/img_table.svg" alt="Table" className="h-[258px] w-[76%] object-contain" />
                            <Text as="p" className="text-[12px] font-normal">Feb</Text>
                        </div>
                        <div className="flex flex-1 flex-col items-end gap-2.5 px-1.5 sm:self-stretch">
                            <Img src="images/img_table.svg" alt="Table" className="h-[258px] w-[76%] object-contain" />
                            <Text as="p" className="text-[12px] font-normal">Mar</Text>
                        </div>
                        <div className="flex flex-1 flex-col items-end gap-2.5 px-1.5 sm:self-stretch">
                            <Img src="images/img_table.svg" alt="Table" className="h-[258px] w-[76%] object-contain" />
                            <Text as="p" className="mr-1 text-[12px] font-normal md:mr-0">Apr</Text>
                        </div>
                        <div className="flex flex-1 flex-col items-end gap-2.5 px-1.5 sm:self-stretch">
                            <Img src="images/img_table.svg" alt="Table" className="h-[258px] w-[76%] object-contain" />
                            <Text as="p" className="text-[12px] font-normal">May</Text>
                        </div>
                        <div className="flex flex-1 flex-col items-end gap-2.5 px-1.5 sm:self-stretch">
                            <Img src="images/img_table.svg" alt="Table Eleven" className="h-[258px] w-[76%] object-contain" />
                            <Text as="p" className="text-[12px] font-normal">Jun</Text>
                        </div>
                        <div className="flex flex-1 flex-col items-end gap-2.5 px-1.5 sm:self-stretch">
                            <Img src="images/img_table.svg" alt="Table Thirteen" className="mt-[94px] h-[162px] w-[76%] object-contain" />
                            <Text as="p" className="mr-1.5 text-[12px] font-normal md:mr-0">Jul</Text>
                        </div>
                        <div className="flex flex-1 flex-col items-end gap-2.5 px-1.5 sm:self-stretch">
                            <Img src="images/img_table.svg" alt="Table Fifteen" className="h-[258px] w-[76%] object-contain" />
                            <Text as="p" className="text-[12px] font-normal">Aug</Text>
                        </div>
                        <div className="flex flex-1 flex-col items-end gap-2.5 px-1.5 sm:self-stretch">
                            <Img src="images/img_table.svg" alt="Tableteen" className="h-[258px] w-[76%] object-contain" />
                            <Text as="p" className="text-[12px] font-normal">Sep</Text>
                        </div>
                        <div className="flex flex-1 flex-col items-end gap-2.5 px-1.5 sm:self-stretch">
                            <Img src="images/img_table.svg" alt="Tableteen" className="mt-[104px] h-[154px] w-[76%] object-contain" />
                            <Text as="p" className="text-[12px] font-normal">Oct</Text>
                        </div>
                        <div className="flex flex-1 flex-col items-end gap-2.5 sm:self-stretch">
                            <Img src="images/img_table.svg" alt="Table Twentyone" className="mt-[38px] h-[218px] w-[66%] object-contain" />
                            <Text as="p" className="text-[12px] font-normal">Nov</Text>
                        </div>
                        <div className="flex w-[8%] flex-col items-end gap-2 sm:w-full">
                            <div className="flex items-center self-stretch">
                                <div className="h-[254px] w-[26px] rounded-[5px] bg-blue-a700_01" />
                                <div className="h-[160px] w-[26px] self-end rounded-[5px] bg-blue-200" />
                                <Heading as="h6" className="mr-2.5 text-[16px] font-semibold md:mr-0">Dec</Heading>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="flex w-[12%] items-center justify-center gap-2">
                        <div className="h-[8px] w-[20px] rounded-sm bg-blue-a700_01" />
                        <Heading as="h6" className="text-[16px] font-semibold">Income</Heading>
                    </div>
                    <div className="flex flex-1 items-start gap-[9px] px-3">
                        <div className="mt-1 h-[8px] w-[20px] rounded-sm bg-blue-200" />
                        <Heading as="h6" className="self-center text-[16px] font-semibold">Spending</Heading>
                    </div>
                </div>
            </div>
        </div>
    );
}