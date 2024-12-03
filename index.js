function signup(username) {
  let user = ["Mansi", "Aditi", "Chhaya", "Neha", "Ritik"];
  if (user.includes(username)) {
    return "Already Registered, Please Login";
  } else {
    user.push(username);
    return "Signup Sucessfull,Please Login";
  }
}
console.log(signup("Mansi"));
