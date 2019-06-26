import React, { useState, useEffect } from "react";

function LeaderboardScreen() {
    const [times, updateTimes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await window.axios.get("/times");
            updateTimes(response.data);
        }

        fetchData();
    }, []);

    return (
        <div>
            {times.map((time, index) => (
                <div key={time.id}>
                    {index + 1}: {time.name} 
                    {time.minutes}:{time.seconds}:{time.milliseconds}
                </div>
            ))}
        </div>
    );
}

export default LeaderboardScreen;
