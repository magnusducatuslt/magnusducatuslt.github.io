// var div = document.createElement('div');
// div.innerHTML = localStorage['test'];
// document.getElementById('app').append(div);
console.log('loaded');
window.onmessage = function(e) {
  var payload = JSON.parse(e.data);
  console.log(payload);
  switch (payload.method) {
    case 'set':
      localStorage.setItem(payload.key, JSON.stringify(payload.data));
      parent.postMessage(data, '*');
      break;
    case 'get':
      var parent = window.parent;
      var data = localStorage.getItem(payload.key);
      parent.postMessage(data, '*');
      break;
    case 'remove':
      localStorage.removeItem(payload.key);
      parent.postMessage(data, '*');
      break;
  }
};
