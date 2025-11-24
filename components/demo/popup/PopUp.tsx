/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import './PopUp.css';

interface PopUpProps {
  onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Welcome</h2>
        <p>To get started:</p>
        <ol>
          <li><span className="icon">play_circle</span>Press Play to start streaming audio.</li>
        </ol>
        <button onClick={onClose}>Start</button>
      </div>
    </div>
  );
};

export default PopUp;