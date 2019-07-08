import React from "react"

function CheckoutScreen({ drink, onPaid }) {
    function pay() {
        onPaid();
    }

    const graphics = {
        'COF': '/img/payhere-black-coffee.png',
        'TEA': '/img/payhere-black-tea.png',
        'CAP': '/img/payhere-cappuccino.png',
        'LAT': '/img/payhere-cafe-latte.png',
        'ESP': '/img/payhere-espresso.png',
        'CHO': '/img/payhere-chocolate.png',
        'MOC': '/img/payhere-mocha.png',
    };

    return (
        <>
            <img className="mb-6 mx-auto w-24" src="/img/logo.png" />
            <div className="px-4">
                <div className="max-w-xl mx-auto">
                    <div className="bg-white py-6 px-4">
                    <h2 className="text-center text-sm mb-6">
                        HOW ARE YOU PAYING?
                    </h2>

                    <div className="flex">
                        <div className="w-1/2 pr-2">
                            <img src={graphics[drink]} />
                        </div>

                        <div className="pl-2 text-white text-xs w-1/2">
                            <button
                                className="bg-orange flex h-8 items-center justify-center mb-3 text-center text-shadow-dark-orange shadow-button-orange w-full focus:outline-none"
                                onClick={pay}
                            >
                                CASH
                            </button>
                            <button
                                className="bg-orange flex h-8 items-center justify-center mb-3 text-center text-shadow-dark-orange shadow-button-orange w-full focus:outline-none"
                                onClick={pay}
                            >
                                CONTACTLESS
                            </button>
                            <button
                                className="bg-orange flex h-8 items-center justify-center mb-3 text-center text-shadow-dark-orange shadow-button-orange w-full focus:outline-none"
                                onClick={pay}
                            >
                                CHIP & PIN
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default CheckoutScreen;