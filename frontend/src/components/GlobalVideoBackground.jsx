import React from 'react';

export const GlobalVideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source src="https://customer-assets.emergentagent.com/job_digital-evo/artifacts/1tp6d6p7_Scene.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay to darken the video */}
      <div className="absolute inset-0 bg-[#000000]/80"></div>
    </div>
  );
};
