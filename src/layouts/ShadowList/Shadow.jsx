import { useState, useEffect } from "react";
import chevron from "../../assets/chevron.svg";
import ShadowRange from "./ShadowRange";
import ShadowColorPicker from "./ShadowColorPicker";
import ShadowCheckBox from "./ShadowCheckBox";

export default function Shadow({ panelNumber, shadow }) {
  const [toggleShadow, setToggleShadow] = useState(false);
  useEffect(() => {
    if (panelNumber === 1) {
      setToggleShadow(true);
    }
  }, []);
  const shadowInputs = shadow.inputs.map((input, index) => {
    if (input.type === "range")
      return (
        <ShadowRange
          key={index}
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
        />
      );
    else if (input.type === "color")
      return (
        <ShadowColorPicker
          key={index}
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
        />
      );
  });
  return (
    <li className="bg-gray-50 border-b border-gray-300">
      <button
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100"
        onClick={() => setToggleShadow(!toggleShadow)}
      >
        <span> Shadow {panelNumber}</span>
        <img
          className="font-bold w-5"
          style={{
            transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`,
          }}
          src={chevron}
          alt=""
        />
      </button>
      {toggleShadow && (
        <>
          <div className="flex items-end px-6 pt-4">
            <ShadowCheckBox name={"active"} shadowID={shadow.id}/>
            <ShadowCheckBox name={"inset"} shadowID={shadow.id}/>
            <button className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
              Remove
            </button>
          </div>
          <div className="px-6 py-4">{shadowInputs}</div>
        </>
      )}
    </li>
  );
}
