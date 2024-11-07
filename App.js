function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0;i<6; i++){
        color = color + letters[Math.floor(Math.random()*16)];
    }
    return color;
}

let rotationAngle = 0;

function changeColorAndRotate() {
    let heading = document.getElementById('heading');
    const randomColor = getRandomColor(); // Generate random color
    rotationAngle += 0; // Increment angle by 45 degrees for each call (you can adjust this value)
    
    heading.style.color = randomColor; // Apply random color
    heading.style.transform = `rotate(${rotationAngle}deg)`; // Apply rotation with updated angle
}
setInterval(changeColorAndRotate,1000);
function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play().catch(function(error) {
      console.log("Audio playback failed: ", error);
    });
}

  
function submitButton(event) {
    event.preventDefault(); // Prevent default behavior if it's inside a form
    window.location.href = "index3.html"; // Redirect to the next page
}


    // JavaScript to handle file submission
    document.getElementById("fileForm").addEventListener("submit", function(event) {
        event.preventDefault();
        // You'd need backend functionality here to send the email.
        alert("Thank you! Your file has been submitted. We will get back to you shortly.");
        // Example: Replace alert with backend submission logic if implemented
    });


    // function SendMail(){
    //     let params = {
    //         name: document.getElementById("name").value,
    //       email: document.getElementById("email").value,
    //        message: document.getElementById("message").value
    
    //     }
    //     emailjs.send("service_ydpcekk", "template_vqnwvkg", params).then(alert("Email sents !!"));
    // }

    // function SendMail() {
    //     let params = {
    //         name: document.getElementById("name").value,
    //         email: document.getElementById("email").value,
    //         message: document.getElementById("message").value
    //     };
    
    //     emailjs.send("service_ydpcekk", "template_vqnwvkg", params)
    //         .then(response => {
    //             alert("Email sent successfully!");
    //             console.log("Success:", response);
    //         })
    //         .catch(error => {
    //             alert("Failed to send the email. Please try again.");
    //             console.error("Error:", error);
    //         });
    // }
    
    