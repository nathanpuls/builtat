function param(name) {
  return (new URLSearchParams(window.location.search)).get(name);
}
