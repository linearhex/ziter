module.exports = {
  name: "translate",
  aliases: ['tr'],
  code: `$djsEval[const { MessageEmbed } = require('discord.js');
const translate = require('@iamtraction/google-translate');
const fs = require('fs');


const langcode = d.args[0];

const texto = d.args.slice(1).join(' ');

if (!langcode) {
   message.channel.send('\`[ERROR]\`: Please use correct languages. | type \`#languages\` to see all of them!');
};

if (!texto) {
   message.channel.send('\`[ERROR]\`: Please type a text u want to translate!');
};

translate(texto , { to: langcode }).then(res => {

    const embedtr = new MessageEmbed()
       .setAuthor('Translate', '$userAvatar[$authorID]')
       .addField('__Results:__', res.text, true)
       .addField('__From:__', texto, true)
       .addField('__Languages__:', '$get[langs]', true)
       .setFooter('powered by google translate')
       .setColor('2f3136');

   channel.send({ embeds: [embedtr] })

}).catch(err =>{
   console.error(err)
  });
]
$botTyping
$onlyIf[$checkCondition[$findTextSplitIndex[$message[1]]$textSplit[$get[languages];"]==0]==false;\`[ERROR]\`: Please use correct languages. | type \`#languages\` to see all of them!]
$onlyIf[$messageSlice[1]!=;\`[ERROR]\`: Please type a text u want to translate!]
$onlyIf[$message[1]!=;\`[ERROR]\`: Please use correct languages. | type \`#languages\` to see all of them!]

$let[langs;$splitText[$sum[$findTextSplitIndex[$message[1]]$textSplit[$get[languages];"];2]]$textSplit[$get[languages]]]

$let[languages;"auto": "Automatic",
    "af": "Afrikaans",
    "sq": "Albanian",
    "am": "Amharic",
    "ar": "Arabic",
    "hy": "Armenian",
    "az": "Azerbaijani",
    "eu": "Basque",
    "be": "Belarusian",
    "bn": "Bengali",
    "bs": "Bosnian",
    "bg": "Bulgarian",
    "ca": "Catalan",
    "ceb": "Cebuano",
    "ny": "Chichewa",
    "zh-cn": "Chinese Simplified",
    "zh-tw": "Chinese Traditional",
    "co": "Corsican",
    "hr": "Croatian",
    "cs": "Czech",
    "da": "Danish",
    "nl": "Dutch",
    "en": "English",
    "eo": "Esperanto",
    "et": "Estonian",
    "tl": "Filipino",
    "fi": "Finnish",
    "fr": "French",
    "fy": "Frisian",
    "gl": "Galician",
    "ka": "Georgian",
    "de": "German",
    "el": "Greek",
    "gu": "Gujarati",
    "ht": "Haitian Creole",
    "ha": "Hausa",
    "haw": "Hawaiian",
    "iw": "Hebrew",
    "hi": "Hindi",
    "hmn": "Hmong",
    "hu": "Hungarian",
    "is": "Icelandic",
    "ig": "Igbo",
    "id": "Indonesian",
    "ga": "Irish",
    "it": "Italian",
    "ja": "Japanese",
    "jw": "Javanese",
    "kn": "Kannada",
    "kk": "Kazakh",
    "km": "Khmer",
    "ko": "Korean",
    "ku": "Kurdish (Kurmanji)",
    "ky": "Kyrgyz",
    "lo": "Lao",
    "la": "Latin",
    "lv": "Latvian",
    "lt": "Lithuanian",
    "lb": "Luxembourgish",
    "mk": "Macedonian",
    "mg": "Malagasy",
    "ms": "Malay",
    "ml": "Malayalam",
    "mt": "Maltese",
    "mi": "Maori",
    "mr": "Marathi",
    "mn": "Mongolian",
    "my": "Myanmar (Burmese)",
    "ne": "Nepali",
    "no": "Norwegian",
    "ps": "Pashto",
    "fa": "Persian",
    "pl": "Polish",
    "pt": "Portuguese",
    "pa": "Punjabi",
    "ro": "Romanian",
    "ru": "Russian",
    "sm": "Samoan",
    "gd": "Scots Gaelic",
    "sr": "Serbian",
    "st": "Sesotho",
    "sn": "Shona",
    "sd": "Sindhi",
    "si": "Sinhala",
    "sk": "Slovak",
    "sl": "Slovenian",
    "so": "Somali",
    "es": "Spanish",
    "su": "Sundanese",
    "sw": "Swahili",
    "sv": "Swedish",
    "tg": "Tajik",
    "ta": "Tamil",
    "te": "Telugu",
    "th": "Thai",
    "tr": "Turkish",
    "uk": "Ukrainian",
    "ur": "Urdu",
    "uz": "Uzbek",
    "vi": "Vietnamese",
    "cy": "Welsh",
    "xh": "Xhosa",
    "yi": "Yiddish",
    "yo": "Yoruba",
    "zu": "Zulu"]`
}