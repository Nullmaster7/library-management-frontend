import React from 'react';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const GoBackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <IconButton
            color="secondary"
            onClick={handleGoBack}
            style={{
                position: 'absolute',
                color: 'white'
            }}
        >
            <ArrowBackIosIcon />
        </IconButton>
    );
};

export default GoBackButton;
