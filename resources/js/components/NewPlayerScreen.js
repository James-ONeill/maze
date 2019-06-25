import React, { useRef } from "react";

function NewPlayerScreen({ createPlayer }) {
    const nameInput = useRef(null);

    return (
        <form
            className="max-w-xl mx-auto text-center"
            onSubmit={event => {
                event.preventDefault();
                createPlayer(nameInput.current.value);
            }}
        >
            <h2>NEW PLAYER</h2>
            <input
                className="w-full bg-gray-200 p-3 focus:outline-none"
                ref={nameInput}
                type="text"
            />

            <button className="bg-blue-400 text-blue-900 p-3" type="submit">
                START
            </button>
        </form>
    );
}

export default NewPlayerScreen;
