import React from 'react';
import img from '../assets/photo.png'

function ProfileImage() {
  return (
    <div style={{ backgroundColor: 'black', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <img
        src={img}
        alt="Profile"
        style={{
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '8px', // pour des bords arrondis
        }}
      />
    </div>
  );
}

export default ProfileImage;
