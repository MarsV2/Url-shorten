// filepatch : /C:/Users/grays/url-shortner/models/url.js
const mongoose = require ('mongoose');

const UrlSchema = new mongoose.Schema({
       urlCode: String, 
       longUrl: String, 
       shortUrl: String,
       date: { type: String, default: Date.now }
});

module.exports = mongoose.model('Url', UrlSchema);
