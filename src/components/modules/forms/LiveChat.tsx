import { user } from "assets/images";
import { ZuSend } from "components/icons";
import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function handleSendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  }

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="w-full h-[50vh] flex flex-col gap-2 overflow-y-auto snap-end">
        {messages.map((message) => (
          <li key={message} className=" w-4/5 flex gap-2">
            <span>
              <img src={user} className="h-8 w-18" />
            </span>
            <span className="rounded-r-md rounded-bl-md text-lg bg-gray-50 p-2">{message}</span>
          </li>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="w-full flex items-center gap-2 pt-4">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Send Message..."
          className="bg-white p-2 w-full border-2 border-gray-100 rounded-md"
        />
        <button type="submit" className="bg-green p-3 rounded-full text-white">
          <img />
        </button>
        <button type="submit" className="bg-green p-3 rounded-full text-white">
          <ZuSend />
        </button>
      </form>
    </div>
  );
};

export default Chat;
