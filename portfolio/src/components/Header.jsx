import React from 'react';

const Header = () => {
    const headerContent = [{
        button: 'Sign in',
        path: '../../public/netflix-logo-png-2583.png'
    }];

    return (
        <>
            {headerContent.map((items) => {
                return (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '20px 10px',
                            maxWidth: '1200px',
                            margin: '0 auto',
                        }}
                    >
                        <img
                            style={{ width: '196px' }}
                            src={items.path}
                            alt="Netflix Logo"
                        />
                        <button className='netflix-signin-button'>{items.button}</button>
                    </div>
                );
            })}
        </>
    );
};

export default Header;
