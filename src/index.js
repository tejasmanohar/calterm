
/**
 * Module dependencies
 */

import fs from 'fs'
import Table from 'cli-table'

/**
 * Runner
 */

(args => {
  const data = require(args[0] ? `../{args[0]}` : '../calendar.json')
  const table = new Table()
  table.push(
    ['Date', 'Occasion', '# of Invitees', 'Cancelled'],
    ...format(data.events)
  )
  console.log(table.toString())
})(process.argv.slice(2))

/**
 * Format events into readable format
 * @param {Object[]} events array of objects
 */
function format(events) {
  return events.map(e => [
    `${e.month}/${e.day}/${e.year}`,
    e.occasion,
    e.invited_count,
    e.cancelled ? 'Yes' : 'No'
  ])
}
