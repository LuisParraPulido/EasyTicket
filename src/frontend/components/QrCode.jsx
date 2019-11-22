import React from 'react';
import '../assets/styles/components/QrCode.scss';

const QrCode = () => (
  <section className='code__container'>
    <div className='code__QR'>
      <input id='text' type='text' value='Ingresa el codigo de tu tickete' />
      <div id='qrcode' />
    </div>

  </section>
);

export default QrCode;
