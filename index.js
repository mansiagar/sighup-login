function signup(userName) {
  let usernames = ["Mansi", "Aditi", "Chhaya", "Neha", "Ritik"];
  if (usernames.includes(userName)) {
    return "Already Registered, Please Login";
  } else {
    usernames.push(userName);
    return "Signup Sucessfull,Please Login";
  }
}
console.log(signup("Mansi"));

function login(userName, password) {
  let usernames = ["Mansi", "Aditi", "Chhaya", "Neha", "Ritik"];
  let pass = "Emp@123";
  if (usernames.includes(userName) && password === pass) {
    return "Login Sucessful";
  } else if (usernames.includes(userName) && password !== pass) {
    return "Wrong Password";
  } else {
    return "user not found , Please signup";
  }
}
console.log(login("Mans7", "Emp@124"));
