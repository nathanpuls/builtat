var homeLink = document.createElement('a');
homeLink.href = '/';
homeLink.id = 'home-link';
homeLink.style.position = 'fixed';
homeLink.style.top = '10px';
homeLink.style.right = '10px';
homeLink.style.zIndex = '9999';

// homeLink.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">' +
//     '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12 12 2.25l9.75 9.75M4.5 9.75v10.5c0 .621.504 1.125 1.125 1.125h10.5c.621 0 1.125-.504 1.125-1.125v-10.5M8.25 21h7.5" />' +
//     '</svg>';

homeLink.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" width="24" height="24" stroke-width="1.5">' +
    '<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />' +
    '</svg>';

document.body.appendChild(homeLink);



