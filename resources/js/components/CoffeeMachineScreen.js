import React, { useState } from "react";

function CoffeeMachineScreen({ updateDrink, onComplete }) {
    const [dispensing, updateDispensing] = useState(false);

    function chooseDrink(drink = "CAP") {
        updateDispensing(true);
        updateDrink(drink);
        setTimeout(onComplete, 3000);
    }

    return (
        <>
            <img className="mb-6 mx-auto w-32" src="/img/logo.png" />
            <div className="px-4">
                <div className="max-w-xl mx-auto">
                    <div className="bg-white py-6 px-4">
                    <h2 className="text-center text-sm mb-6">
                        CHOOSE YOUR BEVERAGE?
                    </h2>

                    <div className="flex">
                        <div className="w-1/2 pr-2">
                            <img
                                src={`/img/coffee-machine${
                                    dispensing ? "-anim" : ""
                                }.gif`}
                            />
                        </div>

                        <div className="pl-2 text-white text-xs w-1/2">
                            <button
                                className="bg-orange flex h-8 items-center justify-center mb-3 text-center text-shadow-dark-orange shadow-button-orange w-full focus:outline-none"
                                onClick={() => chooseDrink("COF")}
                            >
                                BLACK COFFEE
                            </button>
                            <button
                                className="bg-orange flex h-8 items-center justify-center mb-3 text-center text-shadow-dark-orange shadow-button-orange w-full focus:outline-none"
                                onClick={() => chooseDrink("TEA")}
                            >
                                BLACK TEA
                            </button>
                            <button
                                className="bg-orange flex h-8 items-center justify-center mb-3 text-center text-shadow-dark-orange shadow-button-orange w-full focus:outline-none"
                                onClick={() => chooseDrink("CAP")}
                            >
                                CAPPUCCINO
                            </button>
                            <button
                                className="bg-orange flex h-8 items-center justify-center mb-3 text-center text-shadow-dark-orange shadow-button-orange w-full focus:outline-none"
                                onClick={() => chooseDrink("LAT")}
                            >
                                CAFÉ LATTE
                            </button>
                            <button
                                className="bg-orange flex h-8 items-center justify-center mb-3 text-center text-shadow-dark-orange shadow-button-orange w-full focus:outline-none"
                                onClick={() => chooseDrink("ESP")}
                            >
                                ESPRESSO
                            </button>
                            <button
                                className="bg-orange flex h-8 items-center justify-center mb-3 text-center text-shadow-dark-orange shadow-button-orange w-full focus:outline-none"
                                onClick={() => chooseDrink("CHO")}
                            >
                                CHOCOLATE
                            </button>
                            <button
                                className="bg-orange flex h-8 items-center justify-center text-center text-shadow-dark-orange shadow-button-orange w-full focus:outline-none"
                                onClick={() => chooseDrink("MOC")}
                            >
                                MOCHA
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default CoffeeMachineScreen;
