module.exports = ({
name: "avatar",
aliases: ['av'],
$if: 'v4',
code:`$if[$message!=server]
$title[1;$username[$findUser[$message;yes]]'s avatar]
$description[1;[PNG]($replaceText[$userAvatar[$findUser[$message;yes]];webp;png]) | [WEBP]($replaceText[$userAvatar[$findUser[$message;yes]];png;webp]) | [JPEG]($replaceText[$replaceText[$userAvatar[$findUser[$message;yes]];webp;jpeg];png;jpeg])]
$image[1;$userAvatar[$findUser[$message;yes];4096]]
$footer[1;$getVar[footers];$userAvatar[$clientID]]
$color[1;2f3136]
$elseif[$message==server]
$title[1;$servername's server icon]
$description[1;[PNG]($replaceText[$servericon;webp;png]) | [WEBP]($replaceText[$servericon;png;webp]) | [JPEG]($replaceText[$replaceText[$servericon;webp;jpeg];png;jpeg])]
$image[1;$servericon]
$color[1;2f3136]
$footer[1;$getVar[footers];$userAvatar[$clientID]]
$endelseif
$endif`
})