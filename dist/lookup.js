"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var search = function search(data, query) {
  var q = Object.entries(query);
  return data.filter(function (d) {
    return q.filter(function (v) {
      var prop = d[v[0]];
      if (Array.isArray(prop)) return prop.indexOf(v[1]) >= 0;
      return prop.toLowerCase() === v[1].toLowerCase();
    }).length === q.length;
  });
};
var init = function init(o) {
  return {
    countries: search.bind(null, o.countries),
    currencies: search.bind(null, o.currencies),
    languages: search.bind(null, o.languages)
  };
};
var _default = exports["default"] = init;