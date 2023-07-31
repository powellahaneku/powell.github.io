// Primitive Social Media Logic



var database = [{
    username:null,
    password: null,
    active:false

},
{
    username: "Powell",
    password: "password",
    active:false
},{
    username:"Chisom",
    password: "ife",
    active:false

},{
    username:"Timi",
    password: "dre",
    active:false
},{
    username:"Elen",
    password: "night",
    active:false
},{
    username:"Nova",
    password: "melanin",
    active:false
},{
    username:"Jack",
    password: "giant",
    active:false
},{
    username:"Toby",
    password: "damien",
    active:false
}]

function registerAdd(user,pass){
    console.log("Registering...");
    database.push({
        username:user,
        password:pass,
    })
    console.log("Registration complete...");
};


function registerPrompt(){
    var userNamePrompt = prompt("User Name: ");
    var passWordPrompt = prompt("Password: ");
    registerAdd(userNamePrompt,passWordPrompt)
}

function userActiveTrigger(user,pass){
    for (var i = 0; i < database.length; i++){
         if (database[i].username == user && database[i].password == pass){
             database[i].active = true;
         }else{
             
         }
     }
 }

function isUserValid(user,pass){
    console.log("Cross Chacking Login...");
    for (var i = 0; i < database.length; i++){
        if (database[i].username == user && database[i].password == pass){
        return true;
        }
    }
    return false
}

function signIn(user,pass){
    if (isUserValid(user,pass) == true){
        userActiveTrigger(user,pass)
        console.log("Login Sucessful!...")
    }else{
        console.log("Wrong Login or does not exist!")
        }
}

var newsFeed = [{
    username:"golden",
    postContent: "This is great",
}];


function menu(){
    var option = prompt("--- Menu ---\n(1) Register\n(2) Sign in\nSelect: ")
    if (option === "1"){
        registerPrompt()
        
    }
    else if (option == "2"){
        console.log("Please Sign In")
        var signInUsername = prompt("User Name: ");
        var SignInPassword = prompt("Password: ");
        signIn(signInUsername,SignInPassword);
    }else {
        console.log("Invalid Sign in. Try Again");
        menu();
    }
}


menu()





