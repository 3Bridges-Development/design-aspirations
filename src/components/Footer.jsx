import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="flex justify-center space-x-5 flex-wrap flex-row bg-da-light-grey p-6 text-lg mt-auto">
                <div><a href="https://www.facebook.com/DesignedAspirationsLLC" className="hover:text-blue-600">Facebook</a></div>
                <div><a href="https://www.instagram.com/designedaspirations/" className="hover:text-blue-600">Instagram</a></div>
                {/* check with Donisa, this needs to be updated */}
                <div><a href="https://www.facebook.com/DesignedAspirationsLLC" className="hover:text-blue-600">Tik Tok</a></div>
            </footer>
        </>
    )
}