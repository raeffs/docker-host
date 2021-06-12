(function () {
  const links = document.getElementsByTagName('a');
  for (let link of links) {
    const service = link.getAttribute('data-service');
    if (service) {
      link.href = `https://${service}.${window.location.host}`;
    }
  }

  if (navigator.serviceWorker && !navigator.serviceWorker.controller) {
    navigator.serviceWorker.register('service-worker.js');
  }
})();
