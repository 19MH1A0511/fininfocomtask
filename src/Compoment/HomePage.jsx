import React, { useState } from "react";
import { FaSlidersH } from "react-icons/fa";
import restaurantLists from "../../public/docs/restaurant.list.docs.json";
import DetailView from "./DetailView";

const HomePage = () => {
    const [listData] = useState(restaurantLists?.[0]?.restaurants || []);
    const [selected,setSelected] =useState();

    const handleDetails = (items) => {
        setSelected(items);
    };

    const handleCloseSelected = () => {
        setSelected()
    };

    return (
        <div className="bg-[#f5f3ef] min-h-screen flex flex-col items-center">

            {/* 🔹 HERO SECTION */}
            <div className="w-full max-w-4xl text-center pt-12 px-4">

                <h1 className="text-3xl md:text-4xl font-semibold">
                    Grafterr Food
                </h1>

                <p className="text-gray-600 mt-2">
                    Find your local restaurant
                </p>

                {/* 🔍 SEARCH BAR */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">

                    <input
                        type="text"
                        placeholder="Search town, postcode or restaurant name"
                        className="w-full sm:w-[60%] px-4 py-3 rounded-lg border border-gray-200 outline-none"
                    />

                    <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                        Search
                    </button>
                </div>

                {/* FILTER */}
                <div className="flex justify-end mt-2 text-sm text-orange-500 cursor-pointer items-center gap-1">
                    <FaSlidersH /> Filter
                </div>
            </div>

            {/* 🔹 RESULTS SECTION */}
            <div className="w-full max-w-4xl mt-8 px-4 space-y-4">

                {listData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl p-4 flex flex-col md:flex-row gap-4 shadow-sm"
                        onClick={() => handleDetails(item)}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full md:w-40 h-32 object-cover rounded-lg"
                        />

                        <div className="flex-1">
                            <h2 className="font-semibold text-lg">{item.name}</h2>

                            <p className="text-sm text-gray-500 mt-1">
                                {item.description}
                            </p>

                            <p className="text-xs text-gray-400 mt-2">
                                {item.address}
                            </p>

                            <div className="flex items-center gap-3 mt-3">
                                <span
                                    className={`px-2 py-1 rounded text-xs ${item.status === "open"
                                            ? "bg-green-100 text-green-600"
                                            : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {item.status}
                                </span>

                                <span className="text-xs text-gray-500">
                                    {item.time}
                                </span>
                            </div>

                            <div className="flex gap-3 mt-4">
                                <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded-lg">
                                    Contact us
                                </button>

                                <button className="bg-orange-500 text-white px-4 py-1 rounded-lg">
                                    Order now
                                </button>
                            </div>
                        </div>

                        <div className="self-start md:self-center">
                            <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full">
                                i
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                {selected && (<DetailView restaurant={selected} onClose={handleCloseSelected} />)}
        </div>
    );
};

export default HomePage;