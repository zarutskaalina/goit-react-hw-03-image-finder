import { Component } from 'react';

export const ImageGalleryItem = () => {
  return (
    <li className="gallery-item">
      <img
        src={image.previewURL}
        alt={image.tags}
        height="500"
        width="900"
        loading="lazy"
      />
    </li>
  );
};
