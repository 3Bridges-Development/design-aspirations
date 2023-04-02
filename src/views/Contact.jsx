import React, { useState } from "react"

function Contact() {
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [isFormValid, setIsFormValid] = useState(true);

    const postData = () =>{ 
        if(name && phone && email && message) {
            setIsFormValid(true)
            fetch("/send",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    phone,
                    email,
                    message
                })
            }).then(res=>res.json())
            .catch(err=>{
                console.log(err)
            }).finally(
                setMessage(''),
                setName(''),
                setPhone(''),
                setEmail(''),
                clearForm()
            )
        } else{
            setIsFormValid(false)
        }
    }

    const clearForm = () => {
        const inputs = document.querySelectorAll(".leading-tight");
        inputs.forEach(item => item.value = "");
    }

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
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
                            <label className="block text-gray-700 text-sm font-bold mb-2 self-start pt-4">
                                Phone
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="phone" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}></input>
                            <label className="block text-gray-700 text-sm font-bold mb-2 self-start pt-4">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                            <label className="block text-gray-700 text-sm font-bold mb-2 self-start pt-4">
                                Brief Description of Project (include expected completion data if known)
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="description" placeholder="Description" onChange={(e) => setMessage(e.target.value)}></textarea>
                            <div className="pt-10">
                                {!isFormValid ? (<p className="decoration-rose-700">Name, Phone, Email, and Brief Description of project are required</p>) : null}
                                <button
                                    className="bg-da-black text-da-white p-2 m-2 max-h-10 hover:text-blue-200 self-center"
                                    type="button"
                                    onClick={() => postData()}
                                >
                                    CONTACT US
                                </button>
                            </div>
                        </div>
                        <div className="flex self-center flex-col md:w-2/5 p-8">
                            <h2 className="text-lg font-bold">Why Us?</h2>
                            <br />
                            <h2 className="text-lg pb-10">Strong, top-quality content is only one-half of a successful session, training, or course. Having dynamic and engaging visual assets is the other; that is where we come in.</h2>
                            <button
                                className="bg-da-black text-da-white p-2 m-2 max-h-10 hover:text-blue-200 self-center"
                                type="button"
                                onClick={() => window.open("https://calendly.com/designedaspirations/initial-consultation-project-discovery")}
                            >
                                Book Initial Consulatation - Project Discovery
                            </button>
                            <button
                                className="bg-da-black text-da-white p-2 m-2 max-h-10 hover:text-blue-200 self-center"
                                type="button"
                                onClick={() => window.open("https://calendly.com/designedaspirations/30min")}
                            >
                                30 Minute Meeting
                            </button>
                            <button
                                className="bg-da-black text-da-white p-2 m-2 max-h-10 hover:text-blue-200 self-center"
                                type="button"
                                onClick={() => window.open("https://calendly.com/designedaspirations/60min")}
                            >
                                60 Minute Meeting
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact