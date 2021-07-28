#!/usr/bin/env node

import {inspect} from 'util'
import {partialRight} from './utils.js'
import {argv} from './yargs.js'

const partialInspect = partialRight(inspect)(argv.showHidden, argv.depth, argv.color)

const string = argv._[0]
const js = JSON.parse(string)

console.log(partialInspect(js))
