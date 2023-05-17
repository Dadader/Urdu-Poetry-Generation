import React, { useRef, useEffect, useState } from 'react';

const Poem = ({ poemData }) => {
  const { lines, poet } = poemData;
  const poemRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const downloadAsPdf = () => {
    if (isClient) {
      import('html2pdf.js').then((html2pdf) => {
        html2pdf().from(poemRef.current).save('poem.pdf');
      });
    }
  };

  const downloadAsImage = () => {
    if (isClient) {
      import('html-to-image').then((htmlToImage) => {
        htmlToImage.toPng(poemRef.current).then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'poem.png';
          link.click();
        });
      });
    }
  };

  return (
    <div className="poem" ref={poemRef}>
      {lines.map((line, index) => (
        <p key={index} className="text-lg mb-4">{line}</p>
      ))}
      <span className="poetName text-xl font-bold">{poet}</span>

      <div className="mt-4">
        <button className="mr-2" onClick={downloadAsPdf}>Download as PDF</button>
        <button onClick={downloadAsImage}>Download as Image</button>
      </div>
    </div>
  );
};

export default Poem;
