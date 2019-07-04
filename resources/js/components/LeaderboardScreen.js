import React, { useState, useEffect, useContext } from "react";
import ordinal from "ordinal";
import { padStart } from "lodash";

import PlayerContext from "../context/PlayerContext";

function LeaderboardScreen({ latestTime, exit }) {
    const [times, updateTimes] = useState([]);
    const player = useContext(PlayerContext);

    useEffect(() => {
        async function fetchData() {
            const response = await window.axios.get("/times");

            updateTimes(response.data);
        }

        fetchData();
    }, [latestTime]);

    function textColor(index) {
        const colors = ["gold", "silver", "bronze"];
        return `text-${colors[index] || "brown-dark"}`;
    }

    return (
        <>
            <img className="mb-6 mx-auto w-24" src="/img/logo.png" />

            <div className="px-8">
                <div
                    className="bg-white max-w-xl mb-6 mx-auto overflow-scroll px-6 py-8 text-brown-dark uppercase"
                    style={{ height: "22rem" }}
                >
                    {latestTime && (
                        <div className="mb-6">
                            <h2 className="mb-4 text-center text-orange">
                                YOUR TIME!
                            </h2>

                            <div className="flex justify-between text-xs">
                                <div>{ordinal(latestTime.position)}</div>
                                <div>{latestTime.name}</div>
                                <div>{latestTime.drink}</div>
                                <div>
                                    {latestTime.minutes}:
                                    {padStart(latestTime.seconds, 2, "0")}:
                                    {padStart(latestTime.milliseconds, 3, "0")}
                                </div>
                            </div>
                        </div>
                    )}

                    <h2 className="mb-4 text-center">LEADERBOARD</h2>

                    <table className="text-xs w-full">
                        <tbody>
                            {times.map((time, index) => (
                                <tr
                                    className={`border-b-2 border-brown-dark ${textColor(
                                        index
                                    )}`}
                                    key={time.id}
                                >
                                    <td className="pr-1">
                                        {ordinal(index + 1)}
                                    </td>
                                    <td className="pr-1">{time.name}</td>
                                    <td className="pr-1">{time.drink}</td>
                                    <td className="text-right">
                                        <div
                                            className={`${
                                                player.uuid === time.uuid
                                                    ? "bg-orange text-white"
                                                    : ""
                                            } inline-block my-1 px-1 py-2`}
                                        >
                                            {time.minutes}:
                                            {padStart(time.seconds, 2, "0")}:
                                            {padStart(
                                                time.milliseconds,
                                                3,
                                                "0"
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="max-w-xl mx-auto">
                    <div className="flex justify-center px-2 text-white">
                        <div className="w-full px-2">
                            <button
                                className="bg-orange flex h-12 items-center justify-center text-center text-shadow-dark-orange shadow-button-orange text-xl w-full focus:outline-none"
                                type="button"
                                onClick={exit}
                            >
                                {latestTime ? "PLAY AGAIN" : "EXIT"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeaderboardScreen;
