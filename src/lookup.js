const _ = require('underscore');

const search = (data, query) => {
  const q = _.pairs(query);

  return data.filter(
    d =>
      q.filter(v => {
        const prop = d[v[0]];

        if (_.isArray(prop)) return prop.indexOf(v[1]) >= 0;

        return prop.toLowerCase() === v[1].toLowerCase();
      }).length === q.length
  );
};

const init = o => ({
  countries: search.bind(null, o.countries),
  currencies: search.bind(null, o.currencies),
  languages: search.bind(null, o.languages),
});

export default init;
