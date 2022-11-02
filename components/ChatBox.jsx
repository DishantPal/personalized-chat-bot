import { useEffect, useState } from "react";

const ChatReply = ({ from, message }) => {
  if (from == "human")
    return (
      <div className="flex mt-2">
        <div className="py-2 px-4 rounded-l border-2 border-green-300 bg-green-300 w-full text-right">
          {message}
        </div>
        <div className="flex items-center bg-green-500 text-white border-2 border-green-500 rounded-r py-2 px-4">
          You
        </div>
      </div>
    );
  if (from == "bot")
    return (
      <div className="flex mt-2">
        <div className="flex items-center bg-blue-500 text-white border-2 border-blue-500 rounded-l py-2 px-4">
          Bot
        </div>
        <div className="py-2 px-4 rounded-r border-2 border-blue-300 bg-blue-300 w-full text-left">
          {message}
        </div>
      </div>
    );
};

export default ({ customClass, botPersonality }) => {
  const [chats, setChats] = useState([]);
  const [query, setQuery] = useState("");

  const askBotQuestion = async (botPersonality, query) => {
    const currTime = new Date();
    const currentChats = [
      ...chats,
      { from: "human", message: query, time: currTime }]
    const botReply = {
      from: "bot",
      message: "...",
      time: currTime.setSeconds(currTime.getSeconds + 3),
    }
    setChats([...currentChats,botReply]);
    setQuery("");

    const botQuestion = { botPersonality, query };
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(botQuestion),
    });
    const data = await response.json();

    botReply.message = data.result.replace(/\n/g, "");
    setChats([...currentChats,botReply]);
  };

  const forgetBot = () => {
    window.localStorage.removeItem("bot_personality");
    window.location.reload();
  };

  useEffect(() => {
    const botGreetings = `Hi, I'm ${botPersonality?.bot_name} ${
      botPersonality?.bot_gender == "male" ? "👨" : "👩"
    }. Your personalized bot. I'm ${
      botPersonality.bot_nature.slice(0, -1).join(", ") +
      " and " +
      botPersonality.bot_nature.slice(-1)
    } in nature`;
    setChats([{ from: "bot", message: botGreetings, time: new Date() }]);
  }, []);

  return (
    <div className={customClass}>
      <div className="border-2 rounded border-black p-5 mt-2 max-w-xl mx-auto">
        {chats.map((chat, idx) => (
          <ChatReply key={idx} from={chat.from} message={chat.message} />
        ))}

        <div className="flex items-center mt-2">
          <input
            className="w-full border-2 rounded-l border-green-500 py-2 px-4"
            type="text"
            name="query"
            id="query"
            value={query}
            onKeyDown={(e) => {
              e.nativeEvent.keyCode === 13 &&
                askBotQuestion(botPersonality, query);
            }}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button
            onClick={(e) => askBotQuestion(botPersonality, query)}
            className="bg-green-500 text-white border-2 border-green-500 rounded-r py-2 px-4"
          >
            Ask
          </button>
        </div>

        <button
          className="bg-red-200 text-red rounded py-2 px-4 mt-2"
          onClick={forgetBot}
        >
          Say Bye to {botPersonality?.bot_name} 👋
        </button>
      </div>
    </div>
  );
};
