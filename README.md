# BitCoin API
This is an API to get current Bitcoin rate, The highest & lowest Bitcoin rate in the last 30 days,in the requested currency.


## Features
* Get current Bitcoin rate
* Get highest & lowest Bitcoin rate in the last 30 days
* Get Bitcoin rate in the requested currency

## All available routes


GET:

- `/api/bitcoins/info` 
(bitcoin rate & lowest & highest rate last 30 days in USD)
- `/api/bitcoins/info?currency=BDT` 
(bitcoin rate & lowest & highest rate last 30 days in requested currency [BDT])

```json
// Will return
{
    "currency": "BDT",
    "current_rate": "3,650,702.0419",
    "highest": 3819373.8169,
    "lowest": 3184623.1647,
    "description": "The current Bitcoin rate, The highest & lowest Bitcoin rate in the last 30 days (2022-02-20 to 2022-03-22), in BDT"
}
```
----------------------------------------------------------------

# Installation

* Clone the repo by using ```git clone https://github.com/coderkhalide/bitcoin-api.git```
* or download the zip file from the repo and unzip it.
* Run ```npm install``` or ```yarn``` on the cloned directory.
* To run development mode run ```npm run dev``` or ```yarn dev```
* Enjoy 😎

```bash
    git clone https://github.com/coderkhalide/bitcoin-api.git
    cd bitcoin-api
    yarn install or npm install
    npm run dev or yarn dev
```
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environnement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).
----------------------------------------------------------------


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)