import yargs from 'yargs'
import {STRING_MISSING_ERROR} from './constants.js'

export const yargsIns = yargs(process.argv.slice(2))
    .usage("$0 [options] string")
    .check((argv) => {
        const string = argv._[0]

        if (!string)
            throw new Error(STRING_MISSING_ERROR)

        return true
    })

    .option('w')
    .alias('w', 'show-hidden')
    .boolean('w')
    .default('w', false)
    .describe('w', 'show non-enumerable')

    .option('c')
    .alias('c', 'color')
    .boolean('c')
    .default('c', true)
    .describe('c', 'colorized output')

    .option('d')
    .alias('d', 'depth')
    .number('d')
    .default('d', Infinity)
    .describe('d', 'set depth')

    .help()
    .alias('help', 'h')
    .alias('version', 'v')

export const argv = yargsIns.argv
