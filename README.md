# URL Shortener

A simple URL shortener application built with Node.js, Express, and MongoDB.

## Features
- Shorten long URLs
- Redirect to original URLs using short codes

## Requirements
- Node.js
- MongoDB

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   MONGO_URL=your_mongodb_connection_string
   BASE_URL=http://localhost:5000
   ```

4. Start the server:
   ```sh
   node server.js
   ```

## Usage
- To shorten a URL, send a POST request to `/api/url/shorten` with a JSON body containing the [longUrl](http://_vscodecontentref_/0).
- To redirect to the original URL, access the short URL in your browser.

## License
This project is licensed under the MIT License.
