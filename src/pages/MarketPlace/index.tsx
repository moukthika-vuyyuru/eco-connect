import Header from "../../components/Header";
import PricingEngine from "./PricingEngine";
import React from "react";

export default function PricingEnginePage() {
    return (
        <>
            <div className="flex w-full flex-col gap-[54px] bg-gray-50 sm:gap-[27px]">
                <Header />
                <div className="flex flex-col gap-10">
                    <PricingEngine />
                </div>
            </div>
        </>
    );
}