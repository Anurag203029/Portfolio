

import React from 'react';
import { FaPhoneAlt,FaEnvelope  } from 'react-icons/fa';


const page = () => {
    return (
        <div className="container mx-auto p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                <div className="md:w-1/2">
                    <p className="text-green-400 mb-2">Contact Me</p>
                    <h1 className="text-4xl font-bold mb-4">Get In Touch With Me</h1>
                    <p className="text-gray-400 mb-8">
                        The technological revolution is changing aspect of our lives, and the fabric of society itself. It’s also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There’s no imperative to be an expert Factual knowledge is less prized when everything you ever need to know can be found at doing everything.
                    </p>

                    <div className='flex gap-10 '>
                        <div className="flex items-center mb-4 ">
                            <div className="bg-gray-800 p-4 rounded-full mr-4">
                                <FaPhoneAlt className="text-green-400 text-2xl" />
                            </div>
                            <div>
                                <h2 className="font-bold">Phone</h2>
                                <p>123 456 758 88</p>
                                <p>568 123 478 88</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-gray-800 p-4 rounded-full mr-4">
                                <FaEnvelope  className="text-green-400 text-2xl" />
                            </div>
                            <div >
                                <h2 className="font-bold">Email</h2>
                                <p>example@email.com</p>
                                <p>example@email.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <form className="space-y-4">
                        <div className="flex space-x-4">
                            <input type="text" placeholder="Full Name" className="w-1/2 p-4 bg-gray-800 border border-green-400 rounded-md text-white" />
                            <input type="email" placeholder="Email" className="w-1/2 p-4 bg-gray-800 border border-green-400 rounded-md text-white" />
                        </div>
                        <textarea placeholder="Message" className="w-full p-4 bg-gray-800 border border-green-400 rounded-md text-white h-32"></textarea>
                        <button type="submit" className="bg-yellow-500 text-black px-6 py-2 rounded-md shadow-md hover:bg-yellow-600">
                            Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;