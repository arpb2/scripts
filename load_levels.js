const axios = require('axios').default;

module.exports = loadLevels = () => {
    console.log('load');
    axios.post(`${process.env.BACKEND_HOST}/levels`, {
        body: 'body'
    }).then(response => {
        
    }).catch(error => {
        console.error('Error running level loading');
        console.error(error);
    })
};