// head.js
document.addEventListener('DOMContentLoaded', function () {
    const head = document.head || document.getElementsByTagName('head')[0];

    // Create link elements for favicon
    const appleTouchIcon = document.createElement('link');
    appleTouchIcon.rel = 'apple-touch-icon';
    appleTouchIcon.sizes = '180x180';
    appleTouchIcon.href = '../favicon/apple-touch-icon.png';

    const favicon32x32 = document.createElement('link');
    favicon32x32.rel = 'icon';
    favicon32x32.type = 'image/png';
    favicon32x32.sizes = '32x32';
    favicon32x32.href = '../favicon/favicon-32x32.png';

    const favicon16x16 = document.createElement('link');
    favicon16x16.rel = 'icon';
    favicon16x16.type = 'image/png';
    favicon16x16.sizes = '16x16';
    favicon16x16.href = '../favicon/favicon-16x16.png';

    const manifest = document.createElement('link');
    manifest.rel = 'manifest';
    manifest.href = '../favicon/site.webmanifest';

    // Append link elements to the head
    head.appendChild(appleTouchIcon);
    head.appendChild(favicon32x32);
    head.appendChild(favicon16x16);
    head.appendChild(manifest);
});
