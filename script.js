// Primitive Facebook



var database = [{
    username:null,
    password: null,
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


function signIn(user,pass){
    console.log("Cross Chacking...");
    if (user === database[0].username && pass === database[0].password){
        var active = true;
        console.log("Sign in succcessful!");
    }else
        console.log("Wrong Login or does not exist!");
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




