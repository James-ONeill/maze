import React, { useState, useEffect } from "react";
import ordinal from "ordinal";
import { padStart } from "lodash";

function LeaderboardScreen() {
    const [times, updateTimes] = useState([]);

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

            <div className="bg-white max-w-xl mx-auto px-6 text-brown-dark uppercase">
                <h2 className="text-center">LEADERBOARD</h2>

                <table className="w-full">
                    <tbody>
                        {times.map((time, index) => (
                            <tr
                                className={`border-b-2 border-brown-dark ${textColor(
                                    index
                                )}`}
                                key={time.id}
                            >
                                <td className="pr-1">{ordinal(index + 1)}</td>
                                <td className="pr-1">{time.name}</td>
                                <td className="pr-1">CAP</td>
                                <td class="text-right">
                                    <div
                                        className={`${"bg-orange"} inline-block text-white px-1 py-2`}
                                    >
                                        {padStart(time.minutes, 2, "0")}:
                                        {padStart(time.seconds, 2, "0")}:
                                        {padStart(time.milliseconds, 3, "0")}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default LeaderboardScreen;
