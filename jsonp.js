var newscript = document.createElement('script');
newscript.src = 'https://www.adb.com?callback=fn'
document.body.appendChild(newscript);
function fn(data) {
  console.log(data);
}

const newScript = document.createElement('script')
newScript.src = 'https://www.resource.com'
document.body.appendChild(newScript)


