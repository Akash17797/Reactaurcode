// ye code basially humne ek reusable component banaya hai jise hum kahi bhi use kar skte hai taaki baar baar same syntax na likhna pde and hume ek hi jagah se sare styling components ko control kar sake.
// This is a good react practice to make reusable components and use them in the application.

import React from "react";

export default function Button({
    children, // children is a special prop that is passed to components automatically. It is used to render whatever you include between the opening and closing tags when invoking a component. basically text jo button ke andar hoga wo children prop mei store hoga
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props // yha pe humne props ka use kiya hai taaki hum button ke andar koi bhi prop pass kar ske jaise onClick, disabled, etc. and ye props humne spread operator (...) se pass kiya hai taaki wo spread ho jaaye and hume koi bhi prop pass karne mei koi dikkat na aaye
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}