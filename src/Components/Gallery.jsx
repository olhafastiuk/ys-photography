import axios from 'axios';
import React, { useEffect, useState } from 'react';

import {
    ImageList,
    ImageListItem,
    Box,
    useTheme,
    useMediaQuery,
} from '@mui/material';

export default function Gallery() {
    const [images, setImages] = useState(null);

    const theme = useTheme();
    const laptop = useMediaQuery(theme.breakpoints.up('md'));
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const call = async () => {
            const response = await axios.get(
                'https://google-photos-album-demo2.glitch.me/MRbSgBN36qfdh6GS9',
            );
            if (response.data && response.data.length > 0) {
                setImages(
                    response.data.map((url) => ({
                        original: `${url}=w1024`,
                        thumbnail: `${url}=w100`,
                    })),
                );
            }
        };
        call();
    }, []);

    return (
        <Box
            component={'main'}
            sx={{
                background: '#E3E3E3',
            }}>
            <p className="decor">GALLERY</p>
            {images && (
                <Box
                    p={10}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '50px',
                        fontFamily: ' "Forum", cursive',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background:
                            'linear-gradient(180deg, #E3E3E3 0.11%, #949494 17.72%, #CFAAB9 53.52%, #E3E3E3 82.38%)',
                    }}>
                    (
                    <ImageList
                        variant="woven"
                        cols={laptop ? 3 : mobile ? 1 : 2}
                        gap={laptop ? 20 : mobile ? 0 : 10}>
                        {images.map((item, i) => (
                            <ImageListItem key={i} cols={1} rows={1}>
                                <img src={item.original} loading="lazy" />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    )
                </Box>
            )}
        </Box>
    );
}
