const dotenv = require("dotenv");

dotenv.config();

module.exports.PORT = process.env.PORT;
module.exports.BASE_URL = process.env.BASE_URL;
module.exports.MONGO_URL = process.env.MONGO_URL;
module.exports.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
module.exports.GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
module.exports.COOKIE_KEY = process.env.COOKIE_KEY;
