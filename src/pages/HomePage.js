import React from 'react';
import { Card, CardContent, Typography, CardActionArea, Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../hoc/PageWrapper';

const HomePage = () => {
    const navigate = useNavigate();

    const handleCardClick = (path) => {
        navigate(path);
    };

    return (
        <Grid2
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
        >
            <Grid2 item>
                <Card sx={{ width: 300, opacity: 0.8 }} onClick={() => handleCardClick('/users')}>
                    <CardActionArea>
                        <CardContent>
                            <Typography sx={{ textAlign: 'center' }} variant="h5" component="div">
                                Users
                            </Typography>
                            <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                                See user details
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2 item>
                <Card sx={{ width: 300, opacity: 0.8 }} onClick={() => handleCardClick('/books')}>
                    <CardActionArea>
                        <CardContent>
                            <Typography sx={{ textAlign: 'center' }} variant="h5" component="div">
                                Books
                            </Typography>
                            <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                                View and manage books
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
        </Grid2>
    );
};

export default PageWrapper(HomePage);
