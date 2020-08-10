"use strict";
import {fromPairs} from "lodash";

export default {
    "getWindow": function () {
        return window;
    },
    "changeLocation": function (url) {
        window.location = url;
    },
}