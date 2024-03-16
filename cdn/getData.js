function getData(url, htmlTemplate) {
    const containerId = 'data';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const dataBox = document.getElementById(containerId);

            data.forEach(item => {
                const element = document.createElement('div');
                element.innerHTML = htmlTemplate(item);
                dataBox.appendChild(element);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
