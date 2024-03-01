window.onload = function() {
    var fileUrl1 = 'PS3HEN.p3t';
    
      downloadFile(fileUrl1, 'PS3HEN.p3t');
    
      setTimeout(function() {
        window.location.href = 'file2.html';
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