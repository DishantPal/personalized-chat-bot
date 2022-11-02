const ChatReply = ({ from, message }) => {
  if (from == "human")
    return (
      <div className="flex items-center mt-2">
        <div className="py-2 px-4 rounded-l border-2 border-green-300 bg-green-300 w-full">
          {message}
        </div>
        <div className="bg-green-500 text-white border-2 border-green-500 rounded-r py-2 px-4">
          You
        </div>
      </div>
    );
  if (from == "bot")
    return (
      <div className="flex items-center mt-2">
        <div className="bg-blue-500 text-white border-2 border-blue-500 rounded-l py-2 px-4">
          Bot
        </div>
        <div className="py-2 px-4 rounded-r border-2 border-blue-300 bg-blue-300 w-full">
          {message}
        </div>
      </div>
    );
};

const AskForm = ({}) => {
  return (
    <div className="flex items-center mt-2">
      <input
        className="w-full border-2 rounded-l border-green-500 py-2 px-4"
        type="text"
        name="bot_name"
        id="bot_name"
      />
      <button className="bg-green-500 text-white border-2 border-green-500 rounded-r py-2 px-4">
        Ask
      </button>
    </div>
  );
};

export default ({ customClass }) => {
  return (
    <div className={customClass}>
      <h3 className="mt-4 font-bold text-2xl text-center">
        Start hangingn out with your bot 👨‍👧
      </h3>
      <div className="border-2 rounded border-black max-w-xl mx-auto p-5 mt-2">
        <ChatReply from="human" message="Hi, How are you?" />
        <ChatReply from="bot" message="M f9, wbu?" />
        <ChatReply from="human" message="Me? okay i guess." />
        <AskForm />
      </div>
    </div>
  );
};
