const search = (data, query) => {
  const q = Object.entries(query);

  return data.filter(
    (d) =>
      q.filter((v) => {
        const prop = d[v[0]];

        if (Array.isArray(prop)) return prop.indexOf(v[1]) >= 0;
        // If the property is undefined or null, we return false to avoid errors
        if (prop === undefined || prop === null) return false;

        return prop.toLowerCase() === v[1].toLowerCase();
      }).length === q.length
  );
};

const init = (o) => ({
  countries: search.bind(null, o.countries),
  currencies: search.bind(null, o.currencies),
  languages: search.bind(null, o.languages),
});

export default init;
