"use client";

import { useEffect, useState } from "react";
import ChatBox from "../components/ChatBox";
import PersonalityCreator from "../components/PersonalityCreator";

export default function Home() {
  const [botPersonality, setBotPersonality] = useState();

  useEffect(() => {
    setBotPersonality(
      JSON.parse(window.localStorage.getItem("bot_personality"))
    );
  }, []);

  return (
    <div>
      <h1 className="mt-4 font-bold text-4xl text-center">
        Your Personalized Chatbot 🤗
      </h1>
      {botPersonality ? (
        <ChatBox customClass="mt-4" botPersonality={botPersonality} />
      ) : (
        <PersonalityCreator customClass="mt-4" />
      )}
    </div>
  );
}
