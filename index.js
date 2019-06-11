window.onload = function() {
  var iframe = document.getElementsByTagName('iframe')[0];
  var win;
  // some browser (don't remember which one) throw exception when you try to access
  // contentWindow for the first time, it work when you do that second time
  try {
    win = iframe.contentWindow;
  } catch (e) {
    win = iframe.contentWindow;
  }
  var obj = {
    name: 'Jack'
  };
  // save obj in subdomain localStorage
  win.postMessage(
    JSON.stringify({ key: 'storage', method: 'set', data: obj }),
    '*'
  );
  window.onmessage = function(e) {
    // this will log "Jack"
    console.log(1111, JSON.parse(e.data).name);
  };
  // load previously saved data
  win.postMessage(JSON.stringify({ key: 'storage', method: 'get' }), '*');
};
