module.exports = (bot) => {

    bot.variables({ 
    //utils
    prefix: "-", 
    color: "2f3136", 
    uptime: "",
    channel: "unlock", 
    appsstatus: "open", 
    footer: "ZITER#5469",
    isKeepVC: "off",
    vcprivates: "",

    //error messages
    error_missingperms: "\`[ERROR]\`: You don't have any perms :",
    error_joinvcpriv: "\`[ERROR]\`: Please Provided a Voice channels to access privates!",
    error_joinvcpriv_invalidId: "\`[ERROR]\`: Invalid IDs.  Please Provided a Voice channels Id!",
    error_authoronly: "\`[ERROR]\`: You're not author of this button!",

    //apps data
    apps_deploy_info: "",
    apps_channel: "",
    apps_role_mem: "",
    apps_role_pub: "",
    apps_role_lead: ""

    
    }, "index")

}