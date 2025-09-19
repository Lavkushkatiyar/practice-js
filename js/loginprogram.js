let userName = "Ayush"
const originalPassword = "123456"
let enteredPassword = "123456"
let isPasswordCorrect = (originalPassword===enteredPassword) && userName==="Ayush"
let isLogin = isPasswordCorrect ? "user logined sucessfully" : "password was wrong"
console.log(isLogin);