// this with slash too

module.exports = [{
  name: "play",
  aliases: ['p','add'],
  $if: 'v4',
  code: `$let[play;$playTrack[youtube;$message]]

$if[$checkCondition[$voiceID[$clientID]==]==true]
$joinVC[$voiceID;no;yes;yes;yes]
$endif`
}]