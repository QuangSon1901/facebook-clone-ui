import React from 'react';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';

const Menu = ({ visible, renderHeader, renderFooter, renderBody, onVisible, children }) => {
    return (
        <div>
            <Tippy
                interactive
                visible={visible}
                render={(attrs) => (
                    <PopperWrapper style={{ overflow: 'hidden' }}>
                        <div className="menu-wrapper">
                            <div className="menu-wrapper__main">
                                <div>
                                    {renderHeader}
                                    {renderBody}
                                </div>
                            </div>
                            {renderFooter}
                        </div>
                    </PopperWrapper>
                )}
                onClickOutside={onVisible}
            >
                <div>{children}</div>
            </Tippy>
        </div>
    );
};

export default Menu;
