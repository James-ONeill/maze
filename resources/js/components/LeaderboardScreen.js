import React, { useState, useEffect, useContext } from "react";
import ordinal from "ordinal";
import { padStart } from "lodash";

import PlayerContext from "../context/PlayerContext";

function LeaderboardScreen() {
    const [times, updateTimes] = useState([]);
    const player = useContext(PlayerContext);

    useEffect(() => {
        async function fetchData() {
            const response = await window.axios.get("/times");

            updateTimes(response.data);
        }

        fetchData();
    }, []);

    function textColor(index) {
        const colors = ["gold", "silver", "bronze"];
        return `text-${colors[index] || "brown-dark"}`;
    }

    return (
        <>
            <img className="mb-6 mx-auto w-32" src="/img/logo.png" />

            <div className="px-8">
                <div className="bg-white max-w-xl mx-auto px-6 py-8 text-brown-dark uppercase">
                    <h2 className="mb-8 text-center">LEADERBOARD</h2>

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
                                    <td class="text-right">
                                        <div
                                            className={`${player.uuid === time.uuid ? "bg-orange text-white" : ""} inline-block my-1 px-1 py-2`}
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
            </div>
        </>
    );
}

export default LeaderboardScreen;
