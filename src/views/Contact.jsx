import React, { useState } from "react";
import { PopupButton } from "react-calendly";

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
                                    className="bg-da-black text-da-white p-2 m-2 max-h-10 hover:text-blue-200 self-center rounded"
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
                            <div>
                                {/* ideally use .map here too */}
                                <PopupButton
                                    url="https://calendly.com/designedaspirations/initial-consultation-project-discovery"
                                    /*
                                    * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                                    * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                                    */
                                    rootElement={document.getElementById("root")}
                                    text="Book Initial Consulatation"
                                    className="bg-da-black text-da-white p-2 m-2 max-h-10 hover:text-blue-200 self-center rounded"
                                    type="button"
                                />
                                <PopupButton
                                    url="https://calendly.com/designedaspirations/30min"
                                    /*
                                    * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                                    * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                                    */
                                    rootElement={document.getElementById("root")}
                                    text="30 Minute Meeting"
                                    className="bg-da-black text-da-white p-2 m-2 max-h-10 hover:text-blue-200 self-center rounded"
                                    type="button"
                                />
                                <PopupButton
                                    url="https://calendly.com/designedaspirations/60min?month=2023-04"
                                    /*
                                    * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                                    * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                                    */
                                    rootElement={document.getElementById("root")}
                                    text="60 Minute Meeting"
                                    className="bg-da-black text-da-white p-2 m-2 max-h-10 hover:text-blue-200 self-center rounded"
                                    type="button"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact