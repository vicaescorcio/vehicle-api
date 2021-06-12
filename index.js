const express = require('express')

const app = express()

// .env
const port = 3000

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
