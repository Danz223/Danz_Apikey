/*
Tools Instagram Downloader
*/

const axios = require('axios');
const { baseUrl } = require('./config')

async function igdl(url) {
  try {
    const { data } = await axios.get(`${baseUrl}/tools/instagramdl?url=${url}`, {
      headers: {
        'accept': 'application/json',
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    return 'Internal Server Error!';
  }
}

module.exports = { igdl }