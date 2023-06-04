// Assignment code here
window.onload = alert("Good day! Please Click on 'Generate Password' to begin.");
//declaring string of characters needed to create a random password

var NumChars = "0123456789";//numeric string
var NumArray = NumChars.split(""); //note to self, to temporary hold the values until the password is joined
var specialChars = "!@#$%^&*()-=+/?+~/[,]|{}:;<>=_.";//special character string
var specialArray = specialChars.split("");
var lowerCase="abcdefghijklmnopqrstuvwxyz";//lower case alphabets string
var lowCaseArray = lowerCase.split("");
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";//upper case alphabets string
var upperCaseArray = upperCase.split("");

//variables to hold the password characters together
var tempPassword=[];
var generatedPassword="";

//getting the user to start the series of prompt


//main function
function generatePassword(){
   
  //this variable will hold the value input by the user
  var totalLength = prompt("What would be the length of the password you need?/nYour password should be at least 8 characters long and should not exceed 128 characters.")
  //asking user the length of password
  if (totalLength <8 || totalLength > 128 || isNaN(totalLength)){
  alert("You are required to input a valid number for password length. Please start again.");

 } 

 else {

  alert("Your password will be " + totalLength + " characters long");
  
   if(confirm ("Do you want to include Numbers in your password?")){
    Array.prototype.push.apply(tempPassword, NumArray);}
   if(confirm ("Do you want to include Special Characters in your password?")){
    Array.prototype.push.apply(tempPassword, specialArray);}
    
   if(confirm ("Do you want to include lower case characters in your password?")){
       Array.prototype.push.apply(tempPassword, lowCaseArray);}

   if(confirm ("Do you want to include upper case characters in your password?")){
        Array.prototype.push.apply(tempPassword, upperCaseArray);}

   if(tempPassword.length===0){
       alert("Please select at least One type of character to generate your password");
       }
   
     else{
       for(i=0; i<totalLength;i++){
       var randompassword = Math.floor(Math.random()*tempPassword.length);
       generatedPassword +=tempPassword[randompassword];
          
             }
         }

 }  
 //document.getElementById("password").innerHTML = generatedPassword;
 return generatedPassword;
 }   

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");
passwordText.value = password;
document.getElementById("password").innerHTML = generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// //Copy and Use your password
// function copyMyPassword(){
// document.querySelector("textarea").select();
// document.execCommand("Copy");
// alert("You may paste and use your password as you please.")

// }
// //adding copy button
// copyBtn.addEventListener("click", copyMyPassword());