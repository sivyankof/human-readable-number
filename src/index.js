module.exports = function toReadable(number) {
    let n = number.toString();

    let nbr = {
        1: `one`,
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };
    // console.log(nbr[80]);
    // console.log(n.length, n);
    if (n == 0) {
        return `zero`;
    } else if (n.length == 1) {
        return nbr[n];
    } else if (n.length == 2 && n >= 10 && n <= 20) {
        return nbr[n];
    } else if (n.length == 2 && n > 20 && n <= 99 && n[1] != 0) {
        return nbr[n[0] + 0] + ` ` + nbr[n[1]];
    } else if (n.length == 2 && n > 20 && n <= 99 && n[1] == 0) {
        return nbr[n[0] + 0];
    } else if (n.length == 3 && n[1] == 0 && n[2] != 0) {
        return nbr[n[0]] + ` ` + `hundred` + ` ` + nbr[n[2]];
    } else if (n.length == 3 && n[1] == 0 && n[2] == 0) {
        return nbr[n[0]] + ` ` + `hundred`;
    } else if (n.length == 3 && n[1] == 1) {
        return nbr[n[0]] + ` ` + `hundred` + ` ` + nbr[n[1] + n[2]];
    } else if (n.length == 3 && n[1] > 1 && n[2] != 0) {
        return (
            nbr[n[0]] + ` ` + `hundred` + ` ` + nbr[n[1] + 0] + ` ` + nbr[n[2]]
        );
    } else return nbr[n[0]] + ` ` + `hundred` + ` ` + nbr[n[1] + 0];
};

