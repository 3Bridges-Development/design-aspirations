import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { PopupButton } from "react-calendly";

function Contact() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [isFormValid, setIsFormValid] = useState(true);

  const data = useOutletContext();

  const postData = () => {
    if (name && phone && email && message) {
      setIsFormValid(true);
      fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_pxs0ds4",
          template_id: "contact_form",
          user_id: "25p18eauqLESolOKD",
          template_params: {
            name,
            phone,
            email,
            message,
          },
        }),
      })
        .then((res) => res.json())
        .catch((err) => {
          console.log(err);
        })
        .finally(
          setMessage(""),
          setName(""),
          setPhone(""),
          setEmail(""),
          clearForm()
        );
    } else {
      setIsFormValid(false);
    }
  };

  const clearForm = () => {
    const inputs = document.querySelectorAll(".leading-tight");
    inputs.forEach((item) => (item.value = ""));
  };

  return (
    <>
      <section>
        <h1 className="text-xl flex justify-center pb-4">
          {data.contactPage.contactHeadline}
        </h1>
        <div className="bg-da-mauve p-10 flex flex-col items-center text-center min-h-[85vh]">
          <h2 className="text-xl pb-2">
            {data.contactPage.contactSubheadline}
          </h2>
          <div className="flex flex-row flex-wrap justify-center">
            <div className="flex flex-col p-8 md:w-2/5">
              {/* Name */}
              <label
                htmlFor="name"
                className="block text-da-black text-md font-bold mb-2 self-start"
              >
                {data.contactPage.formName}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-da-black leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder={data.contactPage.formName}
                onChange={(e) => setName(e.target.value)}
              ></input>

              {/* Phone */}
              <label
                htmlFor="phone"
                className="block text-da-black text-md font-bold mb-2 self-start pt-4"
              >
                {data.contactPage.formPhone}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-da-black leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder={data.contactPage.formPhone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>

              {/* Email */}
              <label
                htmlFor="email"
                className="block text-da-black text-md font-bold mb-2 self-start pt-4"
              >
                {data.contactPage.formEmail}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-da-black leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder={data.contactPage.formEmail}
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              {/* Description */}
              <label
                htmlFor="description"
                className="block text-da-black text-md font-bold mb-2 self-start pt-4"
              >
                {data.contactPage.formDescription}
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-da-black leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder={data.contactPage.formDescription}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              {/* Button */}
              <div className="pt-10">
                {!isFormValid ? (
                  <p className="decoration-rose-700">
                    Name, Phone, Email, and Brief Description of project are
                    required
                  </p>
                ) : null}
                <button
                  className="bg-da-black text-da-white p-2 m-2 max-h-10 hover:text-blue-200 self-center rounded"
                  type="button"
                  onClick={() => postData()}
                >
                  {data.contactPage.formButtonText}
                </button>
              </div>
            </div>
            <div className="flex self-center flex-col md:w-2/5 p-8">
              <h2 className="text-3xl font-bold">
                {data.contactPage.meetingHeadline}
              </h2>
              <br />
              <h2 className="text-xl pb-10">
                {data.contactPage.meetingSubheadline}
              </h2>
              <div>
                {data
                  ? data.meetingButtonCollection.items.map((item) => (
                      <PopupButton
                        url={item.buttonUrl}
                        /*
                         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                         */
                        rootElement={document.getElementById("root")}
                        text={item.buttonText}
                        className="bg-da-black text-da-white p-2 m-2 max-h-10 hover:text-blue-200 self-center rounded"
                        type="button"
                      />
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
