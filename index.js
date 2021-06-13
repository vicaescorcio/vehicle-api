require('dotenv').config({path: '.env'})

const app = require("./src/controllers/app.js");
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
