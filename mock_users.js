const axios = require('axios').default;
const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'users');
axios.defaults.headers.common.Authorization = 'mocksecrettokenadmin';

const mockUsers = () => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Unable to scan directory: ${err}`);
    }
    files.forEach((file) => {
      fs.readFile(`${directoryPath}/${file}`, (err, data) => {
        if (err) throw err;
        const user = JSON.parse(data);
        axios.post(`${process.env.BACKEND_HOST}/users`, user).then((response) => {
          console.log(response.statusText);
        }).catch((error) => {
          console.error('Error running user mocking');
          console.error(error.toJSON());
        });
      });
    });
  });
};

module.exports = mockUsers;
