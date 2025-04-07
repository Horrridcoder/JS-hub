const accountid = 904567
let accountemail = "horridcoder@google.com"
var accountpassword = "890123"
accountcity = "delhi"
let accountstate; // undefined

// accountid = 2 // not allow

console.log(accountid);

accountemail = "happycoder@gmail.com" // allow
accountpassword = "123456" // allow
accountcity = "Mumbai" // allow

console.table([accountid, accountemail, accountpassword, accountcity, accountstate])