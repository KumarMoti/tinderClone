import React from 'react'
import './Footer.css'
import { Replay } from '@mui/icons-material';
import { Favorite } from '@material-ui/icons';
import { Close } from '@material-ui/icons';
// import { Start } from '@mui/icons-material';
import { FlashOn } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { StarRate } from '@material-ui/icons';


export default function Footer() {
  return (
    <>
      <div className="footer-btn">

        <IconButton className='close'>
          <Close fontSize='large' />
        </IconButton>

        <IconButton className='replay'>
          <Replay fontSize='large' />
        </IconButton>

        <IconButton className='favorite'>
          <Favorite fontSize='large' />
        </IconButton>

        {/* <IconButton>
        <Start fontSize='large' />
      </IconButton> */}

        <IconButton className='flash'>
          <FlashOn fontSize='large' />
        </IconButton>

        <IconButton className='star'>
          <StarRate fontSize='large' />
        </IconButton>
      </div>
    </>
  );
}
