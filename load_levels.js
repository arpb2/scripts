const axios = require('axios').default;
const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'levels');
axios.defaults.headers.common.Authorization = 'mocksecrettokenadmin';

const loadLevels = () => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Unable to scan directory: ${err}`);
    }
    files.forEach((file) => {
      fs.readFile(`${directoryPath}/${file}`, (err, data) => {
        if (err) throw err;
        const level = JSON.parse(data);
        axios.put(`${process.env.BACKEND_HOST}/levels/${path.parse(file).name}`, level).then((response) => {
          console.log(response.statusText);
        }).catch((error) => {
          console.error('Error running level loading');
          console.error(error.toJSON());
        });
      });
    });
  });
};

module.exports = loadLevels;
