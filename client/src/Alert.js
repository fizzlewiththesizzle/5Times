// DismissibleAlert.js
import React, { useState } from 'react';

const Alert = ({ showAlert }) => {
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = () => {
    setDismissed(true);
  };

  if(showAlert){
    return (
        <div className={`flex items-center justify-between bg-emerald-500 text-white p-4 rounded-2xl ${dismissed ? 'hidden' : ''}`}>
          <div className="flex items-center justify-center">
            <span className="mr-1">Tap</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>        
            <span className="ml-1 pr-1">
              then <strong>Add to Home Screen</strong>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </div>
          <button
            className="text-white font-bold ml-2 hover:bg-emerald-600 rounded"
            onClick={handleDismiss}
          >
            {/* "x" character for close action */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      );
    }
    else{
        return null
    }

  }



export default Alert;
