/* global expect, module */
function compareJSON(json1, json2) {
  for (let item in json1) {
    if (typeof json1[item] === "object") {
      compareJSON(json1[item], json2[item]);
      continue;
    }
    expect(json1[item]).toEqual(json2[item]);
  }
}

module.exports = compareJSON;
