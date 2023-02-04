import React from 'react';
import ButtonCircle from '~/components/ButtonCircle';

const HeaderMenu = ({ heading, actions, children }) => {
    return (
        <div className="menu-wrapper__main__header">
            <div>
                <h2 className="menu-wrapper__main__header__title">{heading}</h2>
                <div className="menu-wrapper__main__header__actions">
                    {actions &&
                        actions.length > 0 &&
                        actions.map((action, index) => (
                            <ButtonCircle
                                key={index}
                                img={action.img}
                                size="m"
                                styleImg={action.styleImg}
                                hover
                                tippyContent={action.tippyContent}
                            />
                        ))}
                </div>
            </div>
            {children}
        </div>
    );
};

export default HeaderMenu;
