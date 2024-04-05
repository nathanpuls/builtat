const firebaseConfig = {
    apiKey: "AIzaSyCauN-vsgUfQJXc5b41NoCnYzi6FIn86MQ",
    databaseURL: "https://linkshare-eb70b-default-rtdb.firebaseio.com",
    projectId: "linkshare-eb70b"
};

const realtimeInput = document.getElementById('textInput'); // Changed variable name to realtimeInput

function fetchRealtimeFromDatabase() { // Changed function name to fetchRealtimeFromDatabase
    fetch(`https://${firebaseConfig.projectId}-default-rtdb.firebaseio.com/realtime.json`) // Changed path to /realtime.json
        .then(response => response.json())
        .then(data => {
            if (data) {
                realtimeInput.value = data.realtime || ''; // Changed property name to realtime
            }
        })
        .catch(error => console.error('Error fetching realtime from database:', error)); // Changed message to mention realtime
}

fetchRealtimeFromDatabase(); // Changed function call to fetchRealtimeFromDatabase

realtimeInput.addEventListener('input', (event) => {
    const newRealtime = event.target.value; // Changed variable name to newRealtime
    console.log('Saving to database:', newRealtime); // Changed message to mention realtime
    fetch(`https://${firebaseConfig.projectId}-default-rtdb.firebaseio.com/realtime.json`, { // Changed path to /realtime.json
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ realtime: newRealtime }) // Changed property name to realtime
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to save realtime to database'); // Changed message to mention realtime
        }
        console.log('Realtime saved to database successfully'); // Changed message to mention realtime
        return response.json();
    })
    .catch(error => console.error('Error saving realtime to database:', error)); // Changed message to mention realtime
});

document.getElementById('copyButton').addEventListener('click', function() {
    var textarea = document.getElementById('textInput');
    textarea.select();
    document.execCommand('copy');
});
