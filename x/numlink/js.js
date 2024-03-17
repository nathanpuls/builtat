let selectedIndex = -1;
let allLinks = []; // Store all links to reset visibility

function filterLinks() {
var input, filter, ul, li, a, i, txtValue;
input = document.getElementById("search");
filter = input.value.toUpperCase();
ul = document.getElementById("linkList");
li = ul.getElementsByClassName("linkItem");

let visibleLinksCount = 0;
let lastVisibleLinkIndex = -1;

for (i = 0; i < li.length; i++) {
a = li[i].getElementsByTagName("a")[0];
txtValue = a.textContent || a.innerText;

if (txtValue.toUpperCase().indexOf(filter) > -1) {
li[i].classList.remove("hidden");
visibleLinksCount++;
lastVisibleLinkIndex = i;
} else {
li[i].classList.add("hidden");
}
}

// If there is only one visible link, automatically redirect to that link
if (visibleLinksCount === 1) {
const selectedLink = li[lastVisibleLinkIndex].getElementsByTagName("a")[0];
openLinkInNewTab(selectedLink.href);
return;
}

// Reset the selected index when filtering
selectedIndex = -1;

// Remove previous selection highlight
li.forEach((linkItem) => linkItem.classList.remove("selected"));

// Check if there are visible links, and set the first one as selected
const visibleLinks = document.querySelectorAll(
"#linkList .linkItem:not(.hidden) a"
);
if (visibleLinks.length > 0) {
selectedIndex = 0;
visibleLinks[0].parentElement.classList.add("selected");
}

// Update the allLinks array for visibility reset
allLinks = Array.from(li);
}


function handleKeyPress() {
    const visibleLinks = document.querySelectorAll(
      "#linkList .linkItem:not(.hidden) a"
    );
  
    if (event.key === "ArrowDown" && selectedIndex < visibleLinks.length - 1) {
      selectedIndex++;
    } else if (event.key === "ArrowUp" && selectedIndex > 0) {
      selectedIndex--;
    } else if (event.key === "Enter") {
      if (visibleLinks.length === 1) {
        // If there is only one visible link, redirect to that link
        openLinkInNewTab(visibleLinks[0].href);
      } else if (selectedIndex !== -1) {
        const selectedLink = visibleLinks[selectedIndex];
        openLinkInNewTab(selectedLink.href);
      } else if (visibleLinks.length > 0) {
        // If no link is selected, navigate to the first visible link
        openLinkInNewTab(visibleLinks[0].href);
      }
    } else if (/^\d{2}$/.test(event.key)) {
      // If the pressed key is a two-digit number, navigate to the corresponding link
      const number = parseInt(event.key);
      if (number >= 1 && number <= visibleLinks.length) {
        const selectedLink = visibleLinks[number - 1];
        openLinkInNewTab(selectedLink.href);
      }
    }
  
    // Remove previous selection highlight
    visibleLinks.forEach((link) =>
      link.parentElement.classList.remove("selected")
    );
  
    // Add highlight to the selected link
    if (selectedIndex !== -1) {
      visibleLinks[selectedIndex].parentElement.classList.add("selected");
    }
  }
  
  

function openLinkInNewTab(url) {
window.open(url, "_blank");
document.getElementById("search").value = ""; // Clear the input
document.getElementById("search").focus(); // Set autofocus

// Reset visibility of all links
allLinks.forEach((linkItem) => linkItem.classList.remove("hidden"));

// Reset the selected index and remove the "selected" class
selectedIndex = -1;
const selectedLinkItem = document.querySelector("#linkList .linkItem.selected");
if (selectedLinkItem) selectedLinkItem.classList.remove("selected");
}

// Fetch links from JSON file
fetch("links.json")
  .then((response) => response.json())
  .then((links) => {
    const linkList = document.getElementById("linkList");
    links.forEach((link) => {
      const listItem = document.createElement("li");
      listItem.className = "linkItem";
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.target = "_blank"; // Open links in a new tab

      anchor.textContent = link.name;
      listItem.appendChild(anchor);
      linkList.appendChild(listItem);
    });

    // Initialize the allLinks array
    allLinks = Array.from(linkList.children);
  })
  .catch((error) => console.error("Error fetching links:", error));
