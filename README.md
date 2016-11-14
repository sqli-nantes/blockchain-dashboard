# Block-Dash

[![Build Status](https://travis-ci.org/sqli-nantes/blockchain-dashboard.svg?branch=master)](https://travis-ci.org/sqli-nantes/blockchain-dashboard) [![dependencies Status](https://david-dm.org/sqli-nantes/blockchain-dashboard/status.svg)](https://david-dm.org/sqli-nantes/blockchain-dashboard)

DashBoard for the Blockchain's transactions.

**Note: This app have been initialized with [preboot/angular2-webpack](https://github.com/preboot/angular2-webpack).**

## Quick start


```bash
# clone our repo
$ git clone https://github.com/sqli-nantes/blockchain-dashboard block-dash

# change directory to your app
$ cd block-dash

# install the global dependency with webpack
$ npm install -g webpack

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm)).
* Ensure you're running Node (`v4.x.x`+) and NPM (`3.x.x`+).

### Librairies used

* `Lodash` (`v4.16.x`) // JS librairie for array and collection.
* `gsap` (`v1.19.x`) // JS Animations.
* `karma` (`v0.13.x`) // Test JS.
* `web3` (`v0.17.0-alpha`) // Connection to the smart-contracts.
* `rxjs` (`v5.0.0-beta.12`) // Observables.
* `Google Charts` // Evolutions Charts.

## Installing

* `fork` // this repo.
* `clone` // your fork.
* `npm install` // to install all dependencies.

## Developing

After you have installed all dependencies you can now start developing with:

* `npm start`

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The application can be checked at `http://localhost:8080`.

And you are all set! You can now modify your components on the fly without having to reload the entire page.

## Config

For the **name** configuration, go to `block-dash/src/public/res/json/name.json`.

For **IP** of the configuration, go to `block-dash/src/public/res/json/ipRPI.json`.

# Modes

## BlockChain Mode

For the BlockChain mode check at `http://localhost:8080`. Ensure you have change the BlockChain's IP configuration (see Config).

## Demo Mode

For the Demo mode check at `http://localhost:8080/demo`. A logo in the bottom right will appear.

# Progress

## DONE

* Initialisation.
* Demo mode.
* Connection to the private BlockChain.
* Graphics.
* Animated list.
* Continuous integration with Travis-ci.
* Cut the internet access

## IN PROGRESS

* Documentation
* Docker image

## TODO

* More unit tests
