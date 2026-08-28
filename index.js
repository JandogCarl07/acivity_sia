//Package imports
const express = require('express');

//server setup
const server = express()
const port = 1069
const hostname = '192.168.2.39'
server.listen(port, hostname, () => {
    console.log(`Server is runnning: ${hostname}:${port}`)

})




