function param(name) {
  return (new URLSearchParams(window.location.search)).get(name);
}

function copy(text) {
    // Create a temporary input element
    var tempInput = document.createElement("input");
    
    // Set the input value to the text you want to copy
    tempInput.value = text;

    // Append the input element to the document
    document.body.appendChild(tempInput);

    // Select the text inside the input element
    tempInput.select();

    // Execute the "copy" command to copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);
}

function notify(notice) {
  const notification = document.getElementById("notification");
  notification.style.display = "block";
  notification.textContent = notice;
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000); // Hide the notification after 2 seconds
}