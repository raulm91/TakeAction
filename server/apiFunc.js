const axios = require('axios');
const API_KEY = require('../config.js');

const apiFunc = {

  getRepresentatives: (req, res) => {

    const paramObj = {
      params: {
        key: API_KEY
      }
    }
    const apiURL = (`https://www.googleapis.com/civicinfo/v2/representatives?address=${req.query.address}&includesOffices=true&levels=locality&levels=administrativeArea2`)
    axios.get(apiURL, paramObj)
    .then((response) => {
        res.status(200).send(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

};

module.exports = apiFunc;


