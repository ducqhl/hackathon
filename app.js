"use strict"

const str_flood_data = "1100000110000001100000001111000011000010100000011";

var flood_data = parseFloodData(str_flood_data);
flood_data = normalizeFloodData(flood_data);

console.log(flood_data);

var max_area_id = getBigestAreaFlood(flood_data);
console.log(max_area_id);

/**
 * Parse plaint string to struct data
 * @param {String} str_flood_data 
 */
function parseFloodData(str_flood_data) {
    const n_flood_point = Math.sqrt(str_flood_data.length);
    const flood_data = [];
    while (str_flood_data.length) {
        flood_data.push(str_flood_data.slice(0, n_flood_point).split(''));
        str_flood_data = str_flood_data.substring(n_flood_point);
    }
    return flood_data;
}

/**
 * get Big Area Flood
 * @param {Array[]} flood_data 
 */
function getBigestAreaFlood(flood_data) {
    var max_area_sum = flood_data[0].reduce((a, b) => parseInt(a) + parseInt(b), 0);
    var max_area_id = 0;
    flood_data.forEach((item, idx) => {
        let sum = item.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        if (sum > max_area_sum) {
            max_area_id = idx;
            max_area_sum = sum;
        }
    });

    return max_area_id;
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
