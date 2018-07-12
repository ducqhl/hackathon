"use strict"

const str_flood_data = "1100000110000001100000001111000011000010100000011";

var flood_data = parseFloodData(str_flood_data);
flood_data = normalizeFloodData(flood_data);

console.log(flood_data);

var maxAreaID = getBigestAreaFlood(flood_data);
console.log(maxAreaID);

/**
 * Parse plaint string to struct data
 * @param {String} str_flood_data 
 */
function parseFloodData(str_flood_data) {
    const len = str_flood_data.length;
    const n_flood_point = Math.sqrt(len);
    const floodData = [];
    while (str_flood_data.length) {
        floodData.push(str_flood_data.slice(0, n_flood_point).split(''));
        str_flood_data = str_flood_data.substring(n_flood_point);
    }
    return floodData;
}

/**
 * get Big Area Flood
 * @param {Array[]} flood_data 
 */
function getBigestAreaFlood(flood_data) {
    var maxAreaSum = flood_data[0].reduce((a, b) => parseInt(a) + parseInt(b), 0);
    var maxAreaID = 0;
    flood_data.forEach((item, idx) => {
        let sum = item.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        if (sum > maxAreaSum) {
            maxAreaID = idx;
            maxAreaSum = sum;
        }
    });

    return maxAreaID;
}

/**
 * normalize Flood Data
 * @param {Array[]} flood_data 
 */
function normalizeFloodData(flood_data) {
    var len = flood_data.length;
    for (var i = 0; i < len; ++i) {
        var _len = flood_data[i].length;
        for (var j = 0; j < _len; ++j) {
            if (flood_data[i][j] === String(1)) {
                flood_data[j][i] = String(1);
            }
        }
    }

    return flood_data;
}
