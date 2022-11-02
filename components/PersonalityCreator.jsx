import personalities from "./humanPersonalityList";

export default ({ customClass }) => {
  return (
    <div className={customClass}>
      <h3 className="mt-4 font-bold text-2xl text-center">
        Set up personality
      </h3>
      <form className="max-w-xl mx-auto">
        <div>
          <label className="block m-2" for="bot_name">Bot Name</label>
          <input className="w-full border-2 rounded border-black m-2 py-2 px-4" type="text" name="bot_name" id="bot_name" />
        </div>
        <div>
          <label className="block m-2" for="bot_gender">Bot Gender</label>
          <select className="w-full border-2 rounded border-black m-2 py-2 px-4" name="bot_gender" id="bot_gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block m-2" for="bot_personality">Bot Personality</label>
          <select className="w-full border-2 rounded border-black m-2 py-2 px-4" name="bot_personality" id="bot_personality" multiple>
            {personalities.map((itm) => (
              <option value={itm}>{itm}</option>
            ))}
          </select>
        </div>
        <div>
          <button className="bg-green-500 text-white rounded m-2 py-2 px-4">Save</button>
        </div>
      </form>
    </div>
  );
};
