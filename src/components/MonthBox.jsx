import { createElement } from "react";

export function MonthBox({ onClick, value }) {

    const _handleClick = (e) => {
        console.log("In Handle Click")
        onClick && onClick(e)
    }

    return (
        <div className="box" onClick={_handleClick}>
            <label>{value}</label>
        </div>
    )

}

