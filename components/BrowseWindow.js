import React, { useState } from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const BrowseWindow = ({ images }) => {
  const [iconTrigger, setIconTrigger] = useState(true);

  let handleClick = (post) => {
    post.liked = !post.liked;
    console.log('clicked a button', post);
    setIconTrigger(!iconTrigger);
  };


  //Check local storage. If tile id is !present : primary || secondary

  //add or remove from local storage prop

  let iconColor = (liked) => {
    return (liked ? 'secondary' : 'primary');
  };

  return (
    <div>
      <ImageList rowHeight={600} gap={20} >

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
                    // color="primary"
                    color={iconColor(tile.liked)}
                    onClick={() => { handleClick(tile); }}/>
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
