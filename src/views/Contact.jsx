import React from "react"

function Contact() {
    return (
        <>
            <section>
                <h1 className="text-xl flex justify-center pb-4">CONTACT US</h1>
                <div className="bg-da-mauve p-10 flex flex-col items-center text-center">
                    <h2 className="text-xl pb-2">Ready to take your project to the next level?  Book your consultation today or contact us for more information.</h2>
                    <div className="flex flex-row flex-wrap justify-center">
                        <div className="flex flex-col p-8 md:w-2/5">
                            <label className="block text-gray-700 text-sm font-bold mb-2 self-start">
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"></input>
                            <label className="block text-gray-700 text-sm font-bold mb-2 self-start pt-4">
                                Phone
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="phone" placeholder="Phone"></input>
                            <label className="block text-gray-700 text-sm font-bold mb-2 self-start pt-4">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"></input>
                            <label className="block text-gray-700 text-sm font-bold mb-2 self-start pt-4">
                                Brief Description of Project (include expected completion data if known)
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="description" placeholder="Description"></textarea>
                        </div>
                        <div className="flex flex-col md:w-2/5 p-8">
                            <h2 className="text-lg font-bold">Why Us?</h2>
                            <br />
                            <h2 className="text-lg pb-10">Strong, top-quality content is only one-half of a successful session, training, or course. Having dynamic and engaging visual assets is the other; that is where we come in.</h2>
                            <button
                                className="bg-da-black text-da-white w-3/5 p-2 m-2 max-h-10 hover:text-blue-200 self-center"
                                type="button"
                                onClick={() => window.open("https://v1.tailwindcss.com/components/forms")}
                            >
                                BOOK CONSULTATION
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact