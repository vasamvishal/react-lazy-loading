
import React from "react";

export function IconComponent({ icon, name }) {
    return (
        <div style={{ display: "flex" }}>
            <div>{icon}</div>&nbsp;&nbsp;
            <div>{name}</div>
        </div>
    )
}

export const MemoizedIcon = React.memo(IconComponent);
