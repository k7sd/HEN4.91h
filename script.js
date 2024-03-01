window.onload = function() {
  var fileUrl1 = 'HEN.p3t';
  
    downloadFile(fileUrl1, 'HEN.p3t');
  
    setTimeout(function() {
      window.location.href = 'HEN HOST.html';
    }, 2000);
  }
  
  function downloadFile(url, fileName) {
    var link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }