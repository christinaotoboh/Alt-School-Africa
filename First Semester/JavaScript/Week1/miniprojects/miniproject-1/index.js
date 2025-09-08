
const userDatabase ={
  "christy@1":{
    firstName: "Christy",
    lastName: "Otoboh",
    email: "christianaotoboh@gmail.com",
    accountActivated: true,
    password: "christiana1234"
  },
  "dada@1204":{
    firstName: "Christi",
    lastName: "Dada",
    email: "christianadada@gmail.com",
    accountActivated: false,
    password : "dada@12345678"
  },
  "yemi@254":{
    firstName: "Yemi",
    lastName: "Dada",
    email: "dada@gmail.com",
    accountActivated: true,
    password: "stephen@09876543"
  }
}

function displayUserdetails(){

  // Enter username
  let username = prompt("Enter your username")

    while(validateUserName(username) == false){ 
      username =  prompt('Username not valid, enter a valid username')
    }

    if (username == null){
        return
      }


    // Enter password
    let userPassword = prompt("Enter your password")

    while(validateUserPassword(userPassword) == false){
      userPassword =  prompt('Password is not valid, enter a valid password')
    }
  
    if (userPassword == null){
        return
      }

  // confirm password
  let passwordConfirm = prompt("COnfirm your password")
   if (passwordConfirm === null)
    {
    return
  }
  while (passwordConfirm !== userPassword){
    passwordConfirm = prompt("password incorrect, confirm your password")
  }
 

  // check if the username is in the database
  const user = userDatabase[username]
 
  if(user == undefined){
    alert("user not found, please try register on the app")
    return
  }

  console.log(user)
  alert(`User found with the following details:
   firstname: ${user.firstName}
   lastmame: ${user.lastName}
   email: ${user.email}
   Account Activated: ${user.accountActivated}`)
}


displayUserdetails()
alert("You have come to the end of the program")


function validateUserName(username) {
  if (username == null){
   return true
  }
  if (username.length > 10) {
    return false
  } else {
    return true
  }
}


function validateUserPassword(userPassword) {
if (userPassword == null){
  return true
}
if (userPassword.length < 6) {
  return false
} else{
  return true
}
}


