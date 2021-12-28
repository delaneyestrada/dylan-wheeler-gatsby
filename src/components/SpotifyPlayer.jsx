import * as React from 'react';
import PropTypes from 'prop-types';

const SpotifyPlayer = ({ url, height }) => (
  <div class="spotify-playlist ">
    <iframe
      src={url}
      title={Date.now()}
      width="100%"
      height={height}
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  </div>
);

SpotifyPlayer.propTypes = {
  url: PropTypes.string,
  height: PropTypes.number,
};

export default SpotifyPlayer;
