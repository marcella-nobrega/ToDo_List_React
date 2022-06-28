import React, { useState } from "react";

function InputArea(props) {

    const [inputText, setInputText] = useState("");


    function handleChange(event) {

        setInputText(event.target.value);

        var newValue = [event.target.value];

    }

    return (
        <div className="form">
            <input
                type="text"
                value={inputText}
                onChange={handleChange}
            />
            <button
                onClick={() => {
                    props.onAdd(inputText);
                    setInputText("");
                }}
                type="submit"
            >
                <span>Add</span>
            </button>
        </div>
    )

}

export default InputArea;