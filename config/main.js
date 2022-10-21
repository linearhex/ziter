const env = process.env.NODE_ENV;
require('dotenv').config();

const client = {
  token: process.env.token,
  id: "927743280098205746",
  mention: {
    one: "<@!927743280098205746>",
    two: "<@927743280098205746>"
  },
  prefix: {
    default: "-",
    recommended: "#"
  }
};

module.exports = client;
