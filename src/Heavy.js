import React from "react";
import moment from "moment";
import _ from "lodash";

//Medium React Performance
export default function Heavy() {
    const now = moment().format('YYYY-MM-DD');
    const textArray = ['The', 'datae', 'is'];
    const text = _.join(textArray, " ");
    console.log("render() method");
    return (
        <>
            {text} - {now}
        </>
    );
}