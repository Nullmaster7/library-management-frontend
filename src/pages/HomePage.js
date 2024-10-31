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
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <Typography
                sx={{ fontWeight: 'bold', mb: 15, fontSize: '2.5rem', color: '#ffffff', opacity: '0.8' }}
            >
                Library Management System
            </Typography>

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
                                <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }} variant="h5" component="div">
                                    Users
                                </Typography>
                                <Typography sx={{ textAlign: 'center', fontSize: '1rem' }} variant="body2" color="text.secondary">
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
                                <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }} variant="h5" component="div">
                                    Books
                                </Typography>
                                <Typography sx={{ textAlign: 'center', fontSize: '1rem' }} variant="body2" color="text.secondary">
                                    View and manage books
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid2>
            </Grid2>
        </div>
    );
};

export default PageWrapper(HomePage);
