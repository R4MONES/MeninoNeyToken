import React from 'react';

function CopyText() {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('0x9D2974c301E896CeCcfA191DEa81D40b09b54f8E');
      console.log('Texto copiado');
    } catch (err) {
      console.log('Falha ao copiar o texto', err);
    }
  };

  return (
    <button class="copybutton" onClick={copyToClipboard}>
      <i class="fa-regular fa-copy"></i>&nbsp;0x9D2974c301E896CeCcfA191DEa81D40b09b54f8E</button>
  );
}

export default CopyText;