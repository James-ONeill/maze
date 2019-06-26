import React, { useRef } from "react";

function NewPlayerScreen({ createPlayer }) {
    const nameInput = useRef(null);
    const emailInput = useRef(null);

    return (
        <form
            className="max-w-xl mx-auto px-8 text-center"
            onSubmit={event => {
                event.preventDefault();
                createPlayer(nameInput.current.value);
            }}
        >
            <img className="mb-6 mx-auto w-32" src="/img/logo.png" />

            <img className="mb-6 mx-auto w-16" src="/img/coffee-cup.png" />

            <h1 className="mb-6 text-base text-center text-shadow-white">
                COFFEE TO GO<span className="text-orange">!</span><br/>
                <span className="text-xl text-orange">PATH TO PURCHASE</span>
            </h1>

            <input
                className="mb-4 w-full bg-gray-200 p-3 uppercase focus:outline-none"
                placeholder="ENTER NAME..."
                ref={nameInput}
                type="text"
            />

            <input
                className="mb-6 w-full bg-gray-200 p-3 uppercase focus:outline-none"
                placeholder="ENTER EMAIL..."
                ref={emailInput}
                type="text"
            />

            <p className="text-xs mb-6 text-center text-shadow-white">ENTER DETAILS TO PLAY</p>

            <div className="flex px-2 text-white">
                <div className="w-1/2 px-1">
                    <button className="bg-brown flex h-10 items-center justify-center text-center text-shadow-dark-brown text-xs w-full" type="button">
                        LEADERBOARD
                    </button>
                </div>

                <div className="w-1/2 px-1">
                    <button className="bg-orange flex h-10 items-center justify-center text-center text-shadow-dark-orange text-xl w-full" type="submit">
                        PLAY
                    </button>
                </div>
            </div>
        </form>
    );
}

export default NewPlayerScreen;
