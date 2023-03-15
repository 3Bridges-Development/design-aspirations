import React from "react";

export default function WelcomeBanner({ showContent }) {
    return (
        <>
            {showContent ? (
                <div className="flex justify-center flex-wrap bg-da-black text-da-white p-2">WELCOME TO DESIGNED ASPIRATIONS</div>
            ) : 
            (
                null
            )}
        </>
    )
}