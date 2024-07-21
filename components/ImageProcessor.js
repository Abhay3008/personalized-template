import { useEffect, useRef } from "react";
import { saveAs } from "file-saver";

const ImageProcessor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = "/template.JPG"

    img.onload = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = 800;
      canvas.height = 600;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const font = new FontFace("myFont", "url(/MaShanZheng-Regular.ttf)");
      await font.load();
      document.fonts.add(font);

      const txt = "Happy Diwali";
      ctx.font = "70px myFont";
      ctx.strokeStyle = "yellow";
      ctx.lineWidth = 2;
      ctx.fillStyle = "rgb(0, 0, 0)";

      const txtdim = ctx.measureText(txt);
      const txtwidth = txtdim.width;
      const txtheight = txtdim.actualBoundingBoxAscent + txtdim.actualBoundingBoxDescent;
      const x = Math.floor((canvas.width - txtwidth) / 2);
      const y = Math.floor((canvas.height - txtheight) / 2);

      ctx.strokeText(txt, x, y);
      ctx.fillText(txt, x, y);
    };
  }, []);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    canvas.toBlob((blob) => {
      saveAs(blob, "image.png");
    });
  };

  return (
    <div>
      <canvas ref={canvasRef} />
      <br /><br />
      <button onClick={handleDownload}>Download Image</button>
    </div>
  );
};

export default ImageProcessor;
