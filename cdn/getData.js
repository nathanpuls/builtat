   function getData(url, htmlTemplate) {
     const containerId = 'data';
  axios.get(url)
    .then(response => {
      const dataBox = document.getElementById(containerId);
      const data = response.data;

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
