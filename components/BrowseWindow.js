import React, { useState } from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const BrowseWindow = ({ images }) => {
  const [renderTrigger, setRenderTrigger] = useState(true);

  //Toggle icon color to display favorited status
  let toggleLikeIcon = (post) => {
    post.liked = !post.liked;
    setRenderTrigger(!renderTrigger);
  };

  //Return material UI color theme for like icon
  let iconColor = (liked) => {
    return (liked ? 'secondary' : 'primary');
  };

  return (
    <div className='imageList'>
      <ImageList rowHeight={600} gap={10} >
        {images.map((tile) => (
          <ImageListItem
            key={tile.id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={tile.img_src} alt={tile.title} style={{maxWidth: '100%', maxHeight: 'auto'}}/>
            <ImageListItemBar
              title={
                'Rover: ' + tile.rover.name + ', Earth Date: ' + tile.earth_date}
              subtitle={
                'Camera: ' + tile.camera.full_name + ', Sol Date: ' + tile.sol}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`}>
                  <FavoriteIcon
                    color={iconColor(tile.liked)}
                    onClick={() => { toggleLikeIcon(tile); }}/>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default BrowseWindow;


