import React from "react";

export default function TextArea({ label, placeholder, defaultValue }) {
    return (
        <div>
            <label htmlFor="comment" className="mb-2 text-lg font-medium 'text-dark-grey" style={{ height: "28px" }}>
                {label}
            </label>
            <div className="mt-2">
                <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    className="block w-full rounded-md border-gray-300 shadow-sm text-black"
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                />
            </div>
        </div>
    );
}
