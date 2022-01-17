import React, { useState } from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const BrowseWindow = ({ images }) => {
  const [renderTrigger, setRenderTrigger] = useState(true);

  //Reset state to trigger component rerender and display like icon change
  //Not a preferred solution - this is a byproduct of using material UI components
  //without total control of how props are stored / rendered in ImageList children
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
            <img src={tile.img_src} alt={tile.title} />
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


//MAKE IMAGE LIST ITEM ITS OWN COMPONENT WITH LIKED STATE THAT CAN BE TOGGLED SO THAT THE WHOLE PAGE DOESNT NEED RERENDRING DUMMY