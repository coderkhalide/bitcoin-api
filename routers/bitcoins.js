const express = require('express')
const Router = express.Router()
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

/**
 * Task: Get Bitcoin info
 *  The user will set the currency code (USD, EUR, BDT) as a parameter in the
    request body or query (ex: /info?currency=bdt). And your task is to return the
    following information in response:
        TODO: The current Bitcoin rate, in the requested currency.
        TODO: The lowest Bitcoin rate in the last 30 days, in the requested currency.
        TODO: The highest Bitcoin rate in the last 30 days, in the requested currency.

    APIS
    Your task is to create 1 Rest API using the following APIs:
    https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-
    05&currency=eur
    https://api.coindesk.com/v1/bpi/currentprice/eur.json

    Error message: If the currency code provided is not supported by the API, a message should
    inform the user.
 */
Router.get('/info', async (req, res) => {

    const currency = req.query?.currency || 'USD'

    try {
        // Get the current Bitcoin rate, in the requested currency.
        const currentBTC = await fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`).then(res => res.json())

        // Get the highest & lowest Bitcoin rate in the last 30 days, in the requested currency.
        const start = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        const end = new Date().toISOString().split('T')[0]
        const last30days = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}&currency=${currency}`).then(res => res.json())

        // Get all the values from the last 30 days bpi
        const values = Object.values(last30days.bpi)

        // Get the highest of the rate
        const highest = Math.max(...values)

        // Get the lowest of the rate
        const lowest = Math.min(...values)

        const data = {
            currency,
            current_rate: currentBTC?.bpi[currency?.toUpperCase()]?.rate,
            highest,
            lowest,
            description: `The current Bitcoin rate, The highest & lowest Bitcoin rate in the last 30 days (${start} to ${end}), in ${currency}`
        }

        res.send(data);

    } catch (error) {
        return res.status(400).send({ message: `Provided '${currency}' currency is not supported :(` })
    }
})

module.exports = Router