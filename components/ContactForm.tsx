"use client"

import { useState } from 'react';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <div className="border-4 border-[#CCCCCC] p-8 tab:p-10 laptop:px-20 laptop:py-16 bg-gradient-to-br from-[#130428] via-[#38126D] to-[#261045] rounded-xl">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="fullName" className="text-lg font-semibold mb-1 text-white">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="border rounded p-2 mb-4"
        />

        <label htmlFor="email" className="text-lg font-semibold mb-1 text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded p-2 mb-4"
        />

        <label htmlFor="subject" className="text-lg font-semibold mb-1 text-white">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border rounded p-2 mb-4"
        />

        <label htmlFor="message" className="text-lg font-semibold mb-1 text-white">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border rounded p-2 mb-4"
        />

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm