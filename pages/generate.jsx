/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef,useEffect, useState } from 'react';
import{PoemData} from '../components/PoemData'
import htmlToImage from 'html-to-image';

const generate = () => {
  const poemRef = useRef(null);


  // function searchGazalsU(keyword1, keyword2) {
  //   var matchedVerses = [];
  
  //   for (var i = 0; i < PoemData[0].GazalsU.length; i++) {
  //     var verse = GazalsU[i];
  //     if (verse.includes(keyword1) || verse.includes(keyword2)) {
  //       matchedVerses.push(verse);
  
  //       if (matchedVerses.length === 2) {
  //         break;
  //       }
  //     }
  //   }
  
  //   return matchedVerses;
  // }

  const [keywords, setKeywords] = useState('');
  const [sampleShair, setSampleShair] = useState([]);
  const [showVerses, setShowVerses] = useState(false);
  const [showEditVerses, setShowEditVerses] = useState(false);



  const handleGenerateClick = () => {
    // Split the keywords by space and remove any leading/trailing spaces
    const normalizedKeywords = keywords.trim().split(' ');
  console.log('jjj')
    if (normalizedKeywords.length != 2) {
      // If more than two keywords are entered, display an error message
      alert('Please enter two keywords');
    }
    else{
      // a=searchGazalsU(normalizedKeywords[0],normalizedKeywords[1]);
      var a=[]
      a.push(PoemData[0].GhazalsU[0].join(" "));
      a.push(PoemData[0].GhazalsU[0].join(" "));
      setSampleShair(a);
      console.log(sampleShair);
      setShowVerses(true);
    }
  }
  const handleEditButtonClick = () => {
    // Logic to handle the edit button click
    setShowVerses(false)
    setShowEditVerses(true)
  };
  const downloadAsImage = () => {
      import('html-to-image').then((htmlToImage) => {
        htmlToImage.toPng(poemRef.current).then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'poem.png';
          link.click();
        });
      });
  };
  



  const handleOkButtonClick = () => {
    // Logic to handle the OK button click
    setShowVerses(false)
  };
  const handleOk2ButtonClick = () => {
    // Logic to handle the OK button click
  setShowEditVerses(false)
  setShowVerses(true)
  };
  const handleInput2Change = (event, index) => {
    const newSampleshair = [...sampleShair];
    newSampleshair[index] = event.target.value;
    setSampleShair(newSampleshair);
  };

  const handleInputChange = (e) => {
    console.log(e);
    setKeywords(e.target.value);
  };
  return (
    <div>
      <div className=' bg-black/70'>
      <div className="bg-black">ytutrytrf</div>
      <div className="bg-black">ytutrytrf</div>
      <div className="bg-black">ytutrytrf</div>
      <div className="bg-black">ytutrytrf</div>
      <div className="flex flex-col z-[10] items-center justify-center h-screen">
  <input
    type="text"
    placeholder="Enter up to 2 keywords"
    value={keywords}
    onChange={handleInputChange}
    maxLength={50}
    className="rounded-lg px-4 py-2 text-xl bg-white"
  />
  <button onClick={handleGenerateClick} className="mt-4 px-8 py-2 rounded-lg bg-blue-500 text-white">
    Generate
  </button>
  {showVerses &&   (
        <div>
          <div className="text-white px-12 py2 m-4"style={{ textAlign: 'center', fontWeight: 'bold' }} ref={poemRef}>
            {sampleShair.map((verse, index) => (
              <div key={index}>{verse}</div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <button onClick={handleEditButtonClick} className="m-4 px-2 py-2 rounded-lg bg-blue-500 text-white">Edit</button>
            <button onClick={downloadAsImage} className="m-4 px-2 py-2 rounded-lg bg-blue-500 text-white">Download</button>
            <button onClick={handleOkButtonClick} className="m-4 px-2 py-2 rounded-lg bg-blue-500 text-white">OK</button>
          </div>
        </div>
      )}
      {showEditVerses &&   (
        <div>
          <div className="flex flex-col text-white px-12 py2 m-4"style={{ textAlign: 'center', fontWeight: 'bold' }}>
            {sampleShair.map((verse, index) => (
                <input key={index}
                  type="text"
                  value={sampleShair[index]}
                  onChange={(event) => handleInput2Change(event, index)}
                  className="rounded-lg m-4 px-4 py-2 text-xl bg-white text-black"
                />
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <button onClick={handleOk2ButtonClick} className="m-4 px-2 py-2 rounded-lg bg-blue-500 text-white">OK</button>
          </div>
        </div>
      )}
</div>
</div>
    </div>
  )
}

export default generate