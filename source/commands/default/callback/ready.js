module.exports = {
  type: 'ready',
  channel: "922014327085617204",
  code: `Genetic Index.js part 1 Started
  $log[$userTag[$clientID] is Ready!]
  $setVar[uptime;<t:$truncate[$divide[$dateStamp;1000]]:R> | <t:$truncate[$divide[$dateStamp;1000]]:d> <t:$truncate[$divide[$dateStamp;1000]]:t>]`
}