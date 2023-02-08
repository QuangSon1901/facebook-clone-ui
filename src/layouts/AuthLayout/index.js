import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div>
            <div className="auth-body-main">{children}</div>
            {/* <Footer/> */}
        </div>
    );
};

export default AuthLayout;
