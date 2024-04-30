var Color;
(function (Color) {
    Color["WHITE"] = "WHITE";
    Color["BLACK"] = "BLACK";
})(Color || (Color = {}));
const pattern = [
    Color.WHITE,
    Color.BLACK,
    Color.BLACK,
    Color.WHITE,
    Color.BLACK,
    Color.BLACK,
];
const mainArr = [];
for (let i = 0; mainArr.length < 777; i++) {
    mainArr.push(pattern[i % pattern.length]);
}
const counter = mainArr.reduce((prev, current, index) => {
    const _index = index + 1;
    if (!_index.toString().includes("7") || current === Color.WHITE)
        return prev;
    const numberOfSevensInIndex = _index.toString().split("").filter(number => number === "7").length;
    return prev + numberOfSevensInIndex;
}, 0);
console.log(counter);
