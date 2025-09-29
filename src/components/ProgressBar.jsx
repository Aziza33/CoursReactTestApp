import React from 'react';

const ProgressBar = ({ count=0, bgColor = "bg-blue-600"}) => {

  const progress = { width: `${count}%`};

  return (
  
    <div>
      <div className="w-full max-w-xl mx-auto space-y-2 bg-gray-300 rounded-full">
            <p className="text-sm font-bold mb-2">
              Pourcentage de progression : {count} %
            </p>
            <div className={`w-full bg-blue-600 h-4 rounded-full transition-all duration-500 ease-out ${bgColor}`}
               style={progress} > 
            </div>
        </div>
    </div>
    
  );
};

export default ProgressBar;
