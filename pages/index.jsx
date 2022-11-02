import ChatBox from "../components/ChatBox";
import PersonalityCreator from "../components/PersonalityCreator";

export default function Home() {
  return (
    <div>
      <h1 className="mt-4 font-bold text-4xl text-center">Your Personalized Chatbot 🤗</h1>
      <PersonalityCreator customClass="mt-4" />
      <ChatBox customClass="mt-4" />
    </div>
  )
}
