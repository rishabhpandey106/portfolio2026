import React from "react";

export default function Browser() {
    return React.createElement(
        "svg",
        {
            viewBox: "0 0 192 192",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
        },
        React.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
        React.createElement("g", {
            id: "SVGRepo_tracerCarrier",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        }),
        React.createElement(
            "g",
            { id: "SVGRepo_iconCarrier" },
            React.createElement("circle", {
                cx: 96,
                cy: 96,
                r: 74,
                stroke: "#000000",
                strokeWidth: 12,
            }),
            React.createElement("ellipse", {
                cx: 96,
                cy: 96,
                stroke: "#000000",
                strokeWidth: 12,
                rx: 30,
                ry: 74,
            }),
            React.createElement("path", {
                stroke: "#000000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 12,
                d: "M28 72h136M28 120h136",
            })
        )
    );
}

