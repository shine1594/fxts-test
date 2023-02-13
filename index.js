import { pipe, map, toArray } from "@fxts/core";

const res = pipe([1, 2, 3], map(a => a * 2), toArray);
console.log(res);
