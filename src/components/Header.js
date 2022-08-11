import React from 'react';
// import person from './img/personIcon.png'
import tinder from './img/tinderIcon.png'
// import chat from './img/chatIcon.png'
import './Head.css'
import { IconButton } from '@mui/material';
import { MarkChatUnread } from '@mui/icons-material';
import { Person } from '@mui/icons-material';


export default function Header() {
    return (
        <>
            <div className='tinder-header'>
                <IconButton className='header-icons person'>
                    <Person fontSize='large' />
                </IconButton>
                <IconButton className='header-icons'>
                    <img src={tinder} alt="" srcset="" />
                </IconButton>
                <IconButton className='header-icons chat'>
                    <MarkChatUnread fontSize='large' />
                </IconButton>
            </div>
        </>
    );
}
