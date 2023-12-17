import React from 'react';
import { Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    return (
        <Box
            style={{
                backgroundColor: '#060606',
                height: '40px'
            }}
        >
            <Box textAlign='center'>
                <h3
                    style={{
                        color: '#fff',
                        padding: '5px'
                    }}
                >
                    Made with <FavoriteIcon style={{ color: 'red' }} /> by Pragati Prabhu
                </h3>
            </Box>
        </Box>
    );
}

export default Footer;
