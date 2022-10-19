const env = process.env.NODE_ENV;
require('dotenv').config();

const client = {
  token: process.env.token,
  id: "927743280098205746",
  mention: {
    one: "<@!927743280098205746>",
    two: "<@927743280098205746>"
  },
  prefix: {
    default: "-",
    recommended: "#"
  },
  db: {
    type: "default",
    path: "./db/",
    tables: "index",
    promisify: false
  },
  lavalink: {
    url: process.env.lavalink_url,
    password: process.env.lavalink_password,
    usernames: process.env.lavalink_names,
    ssl: true,
    commands: {
      trackStartCode: `$useChannel[$channelID]
$color[1;2f3136]
 $author[1;Now Playing:;$authorAvatar]

 $title[1;<a:diskrotate:916975799888932885> $lavalinkExecute[songInfo;title;$get[position]];$lavalinkExecute[songInfo;url;$get[position]]]

$addButton[1;# Duration: $get[durations];secondary;durationss;no;<a:diskrotate:916975799888932885>]

$addButton[1;# Position: $replaceText[$replaceText[$checkCondition[$sub[$lavalinkExecute[queuetotal];1]!=0];false;Current];true;$ordinal[$sub[$lavalinkExecute[queuetotal];1]]];secondary;positionss;no;<a:diskrotate:916975799888932885>]

 $thumbnail[1;$userAvatar[$clientID]]

$footer[1;Requested by $userTag[$authorID]]
$addTimestamp[1]

$let[durations;$replaceText[$lavalinkExecute[songinfo;duration;$get[position]];#COLON#;᎓]]
$let[position;$sub[$lavalinkExecute[queuetotal];1]]`
    },
  },
};

module.exports = client;
