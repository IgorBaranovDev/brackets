module.exports = function check(str, bracketsConfig) {
    let pairArray = [];
    let strLength = str.length;
    for (let i = 0; i < bracketsConfig.length; i++) {
        pairArray.push(bracketsConfig[i].join(""));
    }
    for (let j = 0; j < strLength; j++) {
        for (let k = 0; k < pairArray.length; k++) {
            if (str.includes(pairArray[k])) {
                str = str.replace(pairArray[k], "");
            }
        }
    }
    return str.length == 0 ? true : false;
};
