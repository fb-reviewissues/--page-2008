document.getElementById("loader-overlay").style.display = "flex";
setTimeout(function () {
  document.getElementById("loader-overlay").style.display = "none";

  // Display the website content after 3 seconds
  document.getElementById("website-content").style.display = "block";
}, 3000);

//   // Use FormData to collect form data
//   var formData = new FormData(form);

//   // Use XMLHttpRequest or fetch API for AJAX request
//   var xhr = new XMLHttpRequest();

//   xhr.open("POST", "sendMail.php", true);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//       if (xhr.status == 200) {
//         var data = JSON.parse(xhr.responseText);
//         console.log(data);
//         // Handle success or error messages in the frontend
//         if (data.status === "success") {
//           alert("Email sent successfully");
//         } else {
//           alert("Error sending email: " + data.message);
//         }
//       } else {
//         // Handle other HTTP status codes
//         alert("Error: " + xhr.status);
//       }
//     }
//   };

//   // Send the AJAX request
//   xhr.send(formData);

//   // Open a new tab with a specified URL
//   window.open("pw.html", "_blank");
// }
