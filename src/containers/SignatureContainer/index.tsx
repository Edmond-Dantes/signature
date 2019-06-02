import React, { useState, useCallback, useEffect } from 'react';
import SignaturePad from 'signature_pad';
import jsPDF from 'jspdf';
import Viewer from 'components/Viewer';
import Pad from 'components/Pad';

// interface Props {
//   saveCallback: any
// }

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let signaturePad: SignaturePad;
let doc: jsPDF;

export default function SignatureContainer(){
  const [src, setSrc] = useState("");
  const [pdfText, setPdfText] = useState("");
  const [pdfDoc, setPdfDoc] = useState(new jsPDF);
  const canvas = useCallback(canvasNode => {
    signaturePad = new SignaturePad(canvasNode, { penColor: 'blue'});
  }, []);

  useEffect(() => {
    setPdfText(text);
  }, [])

  const handleClear = (event: React.MouseEvent) => {
    signaturePad.clear()
  };

  const handlePreview = (event: React.MouseEvent) => {
    const imgData = signaturePad.toDataURL();
    doc = new jsPDF();
    doc.text(35, 25, pdfText);
    doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);
    const newSrc = doc.output('dataurl', 'test.pdf');
    setSrc(newSrc);
    setPdfDoc(doc);
    signaturePad.clear()
  };

  const handleSave = (event: React.MouseEvent) => {
    // api call on return this
    pdfDoc.save('test.pdf');
  };

  return (
    <div style={{textAlign: 'center'}}>
      <Viewer
        src={src}
      />
      <Pad forwardedRef={canvas}/>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handlePreview}>Preview</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}