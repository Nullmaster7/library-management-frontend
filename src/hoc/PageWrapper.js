import React from 'react';
import '../styles/main.scss';
import backgroundImage from '../assets/library-bg.jpg';

const PageWrapper = (WrappedComponent) => {
    return (props) => (
        <div
            style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                margin: '0 auto',
                maxWidth: '1200px',
                height: '100vh',
                boxSizing: 'border-box',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.9,
                    zIndex: -1,
                }}
            />

            <div style={{ zIndex: 1, width: '100%' }}>
                <WrappedComponent {...props} />
            </div>
        </div>
    );
};

export default PageWrapper;
