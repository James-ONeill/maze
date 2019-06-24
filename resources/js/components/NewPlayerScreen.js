import React, { useRef } from "react";

function NewPlayerScreen() {
    const nameInput = useRef(null);

    function createPlayer(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={createPlayer}>
            <input ref={nameInput} type="text" />

            <button type="submit">
                START
            </button>
        </form>
    )
}

export default NewPlayerScreen;