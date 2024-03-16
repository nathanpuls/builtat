(function() {
  var scripts = [
    'https://built.at/cdn/param.js',
    'https://example.com/test.js', // Example URL for another script
    // Add more script URLs as needed
  ];

  scripts.forEach(function(url) {
    var script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
  });
})();
