document.getElementById("registration-page").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Redirect to courses.html
    window.location.replace("courses.html");
});
let submitButton = document.querySelector("button");
submitButton.addEventListener("click", submit); 


function togglePassword() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("toggle-password");
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.textContent = "🙈";
    } else {
        passwordField.type = "password";
        eyeIcon.textContent = "👁";
    }
}