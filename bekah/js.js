const firstPart = (window.location.pathname.split('/')[1] || 'Home');
document.getElementById('topLeftLink').textContent = `${firstPart.charAt(0).toUpperCase() + firstPart.slice(1)}'s Tools`;
document.getElementById('topLeftLink').href = `../${firstPart.toLowerCase()}`;
