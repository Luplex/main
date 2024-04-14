import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Combobox } from "@headlessui/react";
import React from "react";

// const people = [
//     { id: 1, name: "Leslie Alexander" },
//     { id: 2, name: "Carine Alexander" },
//     // More users...
// ];

// function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
// }

// eslint-disable-next-line react/prop-types
export default function SearchBar({ placeholder, onSearch,width ="540px" }) {
    const [query, setQuery] = useState("");
    useEffect(() => {
        if (onSearch) {
            onSearch(query);
        }
    }, [query, onSearch]);
    const [selectedPerson, setSelectedPerson] = useState(null);

    // const filteredPeople =
    //     query === ""
    //         ? people
    //         : people.filter((person) => {
    //               return person.name.toLowerCase().includes(query.toLowerCase());
    //           });

    return (
        <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
            <div className="relative">
            <Combobox.Input
    className="bg-white border border-light-gray rounded-lg flex items-center justify-between© hover:bg-gray-50 focus:ring-0"
    style={{ width: width, height: "50px" }}
    onChange={(event) => setQuery(event.target.value)}
    placeholder={placeholder}
/>
                <MagnifyingGlassIcon className="w-5 h-5 absolute right-4 top-[50%] translate-y-[-50%]" />
            </div>

            {/* <CakeIcon className='w-5 h-5' /> */}
            {/* <div className="relative mt-2">
                {filteredPeople.length > 0 && (
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredPeople.map((person) => (
                            <Combobox.Option
                                key={person.id}
                                value={person}
                                className={({ active }) =>
                                    classNames(
                                        "relative cursor-default select-none py-2 pl-3 pr-9",
                                        active ? "bg-indigo-600 text-white" : "text-gray-900"
                                    )
                                }
                            >
                                {({ active, selected }) => (
                                    <>
                                        <span className={classNames("block truncate", selected && "font-semibold")}>
                                            {person.name}
                                        </span>

                                        {selected && (
                                            <span
                                                className={classNames(
                                                    "absolute inset-y-0 right-0 flex items-center pr-4",
                                                    active ? "text-white" : "text-indigo-600"
                                                )}
                                            ></span>
                                        )}
                                    </>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                )}
            </div> */}
        </Combobox>
    );
}
