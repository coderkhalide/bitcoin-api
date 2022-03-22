
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
require('dotenv').config()
require('./startup/routes')(app)

app.get('/', async (req, res) => {
    res.send(`
        <center>
            <h1>Welcome to BitCoin API</h1>
            <p>This is an API to get current Bitcoin rate, The highest & lowest Bitcoin rate in the last 30 days,in the requested currency.</p>
            <p>To get the current Bitcoin rate, use the following URL: <a href="/api/bitcoins/info?currency=EUR">/api/bitcoins/info?currency=EUR</a></p>
            <br />
            <a href="https://github.com/coderkhalide/bitcoin-api" target="_blank">Github</a>
            
            <br />
            <p>Made with ❤️ by <a href="https://www.khaliddev.com/" target="_blank"> Khalid Saifullah</a> </p>
        </center>
    `)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running. Available on http://localhost:${PORT}`))
