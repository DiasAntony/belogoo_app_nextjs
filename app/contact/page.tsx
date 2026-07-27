"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { AiOutlineBug } from "react-icons/ai";
import { BiSolidDonateHeart } from "react-icons/bi";
import { PiSpinnerGapThin } from "react-icons/pi";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean | string>(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  const router = useRouter();

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
      },
      body: formData,
    });

    setLoading(false);

    if (res.status == 200) {
      setLoading(false);
      formData.set("email", "");
      formData.set("subject", "");
      formData.set("message", "");
      await setIsModalOpen("Pass");
      openModal();
      return router.refresh();
    } else {
      setLoading(false);
      await setIsModalOpen("Fail");
      openModal();
      //   setError(result.error);
      console.error("erroe");
    }
  };

  // Optional: Close modal on pressing the Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }
    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  return (
    <section className="mt-10 mb-20 animate-fade-in-up">
      <div className="py-8 lg:py-16 px-4 sm:px-8 mx-auto max-w-screen-md card-animated p-8 lg:p-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-12 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form onSubmit={submitForm} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-all duration-300 hover:border-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm"
              placeholder="name@belogoo.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-all duration-300 hover:border-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="flex justify-start">
            <button
              type="submit"
              className="btn-animated text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-8 py-3 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 w-full sm:w-auto shadow-md"
            >
              {loading ? (
                <PiSpinnerGapThin className="inline text-center animate-spin" size={20} />
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal} // Close modal when clicking outside the content
        >
          {/* Modal Content */}
          <div
            className="relative bg-white rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 dark:bg-gray-800 w-full max-w-2xl mx-4 modal-animated"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 px-8 border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Submition Result
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-4 text-center h-80 overflow-y-auto flex flex-col items-center justify-center text-gray-700 dark:text-gray-200">
              {isModalOpen && isModalOpen == "fail" ? (
                <div className="flex flex-col items-center gap-4 animate-scale-in">
                  <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-full text-red-500 dark:text-red-400">
                    <AiOutlineBug size={64} />
                  </div>
                  <h1 className="text-2xl font-bold">Your Request Not sent. Try Later.</h1>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4 animate-scale-in">
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full text-green-500 dark:text-green-400">
                    <BiSolidDonateHeart size={64} />
                  </div>
                  <h1 className="text-2xl font-bold">Request Sent Successfully!</h1>
                  <p className="text-gray-500 dark:text-gray-400">Our team will consider it shortly.</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-4 px-8 border-t dark:border-gray-700">
              <button
                onClick={() => {
                  closeModal();
                  window.location.reload();
                }}
                className="btn-animated py-2.5 px-6 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none dark:bg-cyan-600 dark:hover:bg-cyan-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
