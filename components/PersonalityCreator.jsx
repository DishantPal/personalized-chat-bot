import { useState } from "react";
import personalities from "./humanPersonalityList";


export default ({ customClass }) => {
  const [botPersonality, setBotPersonality] = useState({});
  const storeBotPersonality = () => {
    window.localStorage.setItem(
      "bot_personality",
      JSON.stringify(botPersonality)
    );
    window.location.reload();
  };

  return (
    <div className={customClass}>
      <h3 className="mt-4 font-bold text-2xl text-center">
        Set up personality
      </h3>
      <form className="max-w-xl mx-auto">
        <div>
          <label className="block m-2" htmlFor="bot_name">
            Bot Name
          </label>
          <input
            className="w-full border-2 rounded border-black m-2 py-2 px-4"
            type="text"
            name="bot_name"
            id="bot_name"
            value={botPersonality?.bot_name}
            onChange={(e) => {
              setBotPersonality({
                ...botPersonality,
                bot_name: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label className="block m-2" htmlFor="bot_gender">
            Bot Gender
          </label>
          <select
            className="w-full border-2 rounded border-black m-2 py-2 px-4"
            name="bot_gender"
            id="bot_gender"
            onChange={(e) => {
              setBotPersonality({
                ...botPersonality,
                bot_gender: e.target.value,
              });
            }}
          >
            <option selected={botPersonality?.bot_gender == "male"} value="male">Male</option>
            <option selected={botPersonality?.bot_gender == "female"} value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block m-2" htmlFor="bot_nature">
            Bot Nature
          </label>
          <select
            className="w-full border-2 rounded border-black m-2 py-2 px-4"
            name="bot_nature"
            id="bot_nature"
            multiple
            onChange={(e) => {
              setBotPersonality({
                ...botPersonality,
                bot_nature: [...e.target.selectedOptions].map(o => o.value),
              });
            }}
          >
            {personalities.map((itm) => (
              <option key={itm} selected={botPersonality?.bot_nature == itm} value={itm}>{itm}</option>
            ))}
          </select>
        </div>
        <div>
          <button
            type="button"
            onClick={storeBotPersonality}
            className="bg-green-500 text-white rounded m-2 py-2 px-4"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
