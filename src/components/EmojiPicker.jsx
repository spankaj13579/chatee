import { Smiley } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

function EmojiPicker() {
  const [pickerOpen, setPickerOpen] = useState(false);
  const pickerRef = useRef(null);
  const buttonRef = useRef(null);
  const colorMode = JSON.parse(window.localStorage.getItem("color-theme"));

  useEffect(()=>{
    const handleClickOutside = (event) => {
        if (event && event.target && 
            pickerRef.current && 
            !pickerRef.current.contains(event.target) && 
            buttonRef.current && 
            !buttonRef.current.contains(event.target)) {
            setPickerOpen(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  },[])
 
  const handleTrigger = (e) => {
    e.preventDefault();
    setPickerOpen((prev) => !prev);
  };
  return (
    <div className="relative flex ">
      <button
        ref={buttonRef}
        className="text-[#98a6ad hover:text-body "
        onClick={handleTrigger}
      >
        <Smiley size={20} className="text-body " ref={pickerRef} />
      </button>
      {pickerOpen && (
        <div className="absolute z-40 -top-115 right-0 ">
          <Picker data={data} theme={colorMode} />
        </div>
      )}
    </div>
  );
}

export default EmojiPicker;
