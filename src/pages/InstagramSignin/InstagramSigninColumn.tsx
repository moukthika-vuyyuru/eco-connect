import { Button, Img, Heading, Input } from "../../components";
import React from "react";

export default function InstagramsigninColumn() {
    return (
        <div className="mb-1 flex flex-col items-center">
            <div className="mx-auto flex w-full max-w-[1274px] flex-col items-center gap-5 px-14 md:px-5">
                <Heading size="headinglg" as="h1" className="text-[24px] font-semibold md:text-[22px]">
                    Sign in to Recharge Direct
                </Heading>
                <div className="flex w-[44%] flex-col gap-3.5 md:w-full">
                    <div className="flex flex-col gap-1">
                        <div className="flex">
                            <Heading size="textlg" as="h2" className="mb-1 text-[18px] font-medium">
                                Email
                            </Heading>
                        </div>
                        <Input
                            shape="round"
                            type="email"
                            name="email"
                            placeholder={'jane@gmail.com'}
                            className="rounded-lg border border-solid border-blue_gray-100 pl-2.5 pr-[34px] font-medium text-blue_gray-300 sm:pr-5"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex">
                            <Heading size="textlg" as="h3" className="mb-1 text-[18px] font-medium">
                                Password
                            </Heading>
                        </div>
                        <div className="flex flex-col items-end gap-2.5">
                            <Input
                                shape="round"
                                type="password"
                                name="password"
                                placeholder={'••••••••'}
                                suffix={
                                    <Img
                                        src="images/img_eye_outline.svg"
                                        alt="Eye/outline"
                                        className="h-[20px] w-[20px] object-contain"
                                    />
                                }
                                className="gap-[34px] self-stretch rounded-lg border border-solid border-blue_gray-100 px-2.5 font-medium text-blue_gray-300"
                            />
                            <a href="#">
                                <Heading
                                    size="textlg"
                                    as="h4"
                                    className="text-[18px] font-medium !text-blue-a700_01"
                                >
                                    Forgot Password?
                                </Heading>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3.5">
                        <Button size="lg" shape="round" className="self-stretch rounded-md px-[34px] font-medium sm:px-5">
                            Log in
                        </Button>
                        <div className="flex items-end justify-center gap-3.5 sm:flex-col">
                            <div className="mb-2 h-px flex-1 bg-blue_gray-200 sm:self-stretch" />
                            <a href="#" className="self-center">
                                <Heading size="textmd" as="h5" className="text-[16px] font-normal !text-blue_gray-200">
                                    Or continue with
                                </Heading>
                            </a>
                            <div className="mb-2 h-px flex-1 bg-blue_gray-200 sm:self-stretch" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Button
                            size="xl"
                            variant="outline"
                            shape="round"
                            leftIcon={
                                <Img
                                    src="images/img_instagram_1.png"
                                    alt="Instagram 1"
                                    className="h-[24px] w-[24px] object-contain"
                                />
                            }
                            className="w-full gap-2 rounded-md !border px-[33px] font-medium sm:px-5"
                        >
                            Instagram
                        </Button>
                        <Button
                            size="xl"
                            variant="outline"
                            shape="round"
                            leftIcon={
                                <Img
                                    src="images/img_facebook.svg"
                                    alt="Facebook"
                                    className="h-[24px] w-[24px] object-contain"
                                />
                            }
                            className="w-full gap-2 rounded-md !border px-[33px] font-medium sm:px-5"
                        >
                            Facebook
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}