import React, { useState } from 'react';
import whiteBell from './white_bell_2.png';
import blackBell from './black_bell_2.png';

function NewComp() {
  const [message, setMessage] = useState('Subscribe to Agileconsult');
  const [askSub, setAskSub] = useState('Subscribe');
  const [imageUrl, setImageUrl] = useState(whiteBell);

  const buttonChange = () => {
    setMessage('Please hit the bell icon to never miss an update');
    setAskSub('Subscribed');
    // const [message, setMessage] = useState('Subscribe to Agileconsult');
  };

  const imageChange = () => {
    setImageUrl(blackBell);
    setMessage('Thank You! Happy learning');
  };

  const styles = {
    fontStyle: 'italic',
    color: 'purple',
  };

  return (
    <div className="App">
      <h3 style={styles}>{message}</h3>
      <button onClick={buttonChange}>{askSub}</button>
      <p />
      <img src={imageUrl} width={50} height={40} alt="" onClick={imageChange} />
    </div>
  );
}

export default NewComp;
