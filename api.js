const truecallerjs = require('truecallerjs');
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  var searchData = {
      number: req.query.number,
      countryCode: req.query.countryCode,
      installationId: "a2i0D--dRe96MkPVPlOjYiyqxwMUVwyiA6nYyFxkAbBxu1QNr44o33yvS6fwA49f",
      output: "JSON"
  }

  var sn = truecallerjs.searchNumber(searchData);
  sn.then(function(response) {
    res.send(response);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
