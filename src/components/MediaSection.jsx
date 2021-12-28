import React, { useState } from 'react';
import SpotifyPlayer from './SpotifyPlayer';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default function MediaSection({ images, spotifyPlaylists }) {
  const [lightboxImg, setLightboxImg] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const openLightbox = (imgSrc) => {
    setLightboxImg(imgSrc);
    setLightboxOpen(true);
  };
  return (
    <div>
      <div className="images mb-3" style={{ gap: '.3em' }}>
        {images &&
          images.map((image) => {
            console.log(image);
            if (image.galleryImage.childImageSharp) {
              const imageJpg =
                image.galleryImage.childImageSharp.gatsbyImageData.images
                  .fallback;
              const imageWebp =
                image.galleryImage.childImageSharp.gatsbyImageData.images
                  .sources[0];
              return (
                <picture>
                  <source srcSet={imageWebp.srcSet} sizes={imageWebp.sizes} />
                  <img
                    alt={image.galleryImage.name}
                    src={imageJpg.src}
                    onClick={() => openLightbox(imageJpg.src)}
                  />
                </picture>
              );
            } else {
              return;
            }
          })}
      </div>
      {spotifyPlaylists &&
        spotifyPlaylists.map((playlist) => {
          return <SpotifyPlayer url={playlist.url} height={playlist.height} />;
        })}
      {lightboxOpen && (
        <Lightbox
          mainSrc={lightboxImg}
          onCloseRequest={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
