function compressImage(imgToCompress, resizingFactor, quality) {
    // resizing the image
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    
    const originalWidth = imgToCompress.width;
    const originalHeight = imgToCompress.height;
    
    const canvasWidth = originalWidth * resizingFactor;
    const canvasHeight = originalHeight * resizingFactor;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    context.drawImage(
      imgToCompress,
      0,
      0,
      originalWidth * resizingFactor,
      originalHeight * resizingFactor
    );
    
    // reducing the quality of the image
    canvas.toBlob(
      (blob) => {
        if (blob) {
          // showing the compressed image
          resizedImage.src = URL.createObjectURL(resizedImageBlob);
        }
      },
      "image/jpeg",
      quality
    );
  }
  
const img = "../images/2560x1440-blue-solid-color-background.jpg";
  let compressedImageBlob;

let resizingFactor = 0.8;
let quality = 0.8;

compressImage(originalImage, resizingFactor, quality);

resizingElement.oninput = (e) => {
    resizingFactor = parseInt(e.target.value) / 100;
    compressImage(originalImage, resizingFactor, quality);
  };
  
  qualityElement.oninput = (e) => {
    quality = parseInt(e.target.value) / 100;
    compressImage(originalImage, resizingFactor, quality);
  };


  function compressImage(imgToCompress, resizingFactor, quality) {
    // showing the compressed image
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    
    const originalWidth = imgToCompress.width;
    const originalHeight = imgToCompress.height;
    
    const canvasWidth = originalWidth * resizingFactor;
    const canvasHeight = originalHeight * resizingFactor;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    context.drawImage(
      imgToCompress,
      0,
      0,
      originalWidth * resizingFactor,
      originalHeight * resizingFactor
    );
    
    // reducing the quality of the image
    canvas.toBlob(
      (blob) => {
        if (blob) {
          compressedImageBlob = blob;
          compressedImage.src = URL.createObjectURL(compressedImageBlob);
          document.querySelector("#size").innerHTML = bytesToSize(blob.size);
        }
      },
      "image/jpeg",
      quality
    );
  }

  function bytesToSize(bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    
    if (bytes === 0) {
      return "0 Byte";
    }
    
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  }