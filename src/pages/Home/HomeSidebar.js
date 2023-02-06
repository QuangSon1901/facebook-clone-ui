import ButtonCircle from '~/components/ButtonCircle';
import ButtonSquare from '~/components/ButtonSquare';

const HomeSidebar = ({ data, children }) => {
    return (
        <div className="sidebar">
            <div className="sidebar__content">
                <div className="sidebar__content__main">
                    <div className="sidebar__content__main__top">
                        {data &&
                            data.length > 0 &&
                            data.map((block, indexBlock) => (
                                <div key={indexBlock} className="sidebar__content__main__top__block">
                                    <div className="sidebar__content__main__top__block__header">
                                        {block.title && <h4>{block.title}</h4>}
                                        <div className="sidebar__content__main__top__block__header__actions">
                                            {block.actions &&
                                                block.actions.length &&
                                                block.actions.map((action, indexAction) => (
                                                    <ButtonCircle
                                                        key={indexAction}
                                                        activeAni
                                                        size="m"
                                                        hover
                                                        {...action}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                    <div className="sidebar__content__main__block__body">
                                        {block.data &&
                                            block.data.length > 0 &&
                                            block.data.map((item, index) => (
                                                <ButtonSquare
                                                    key={index}
                                                    large
                                                    style={{ backgroundColor: 'transparent' }}
                                                    to={item.to}
                                                    type={{ ...item.type }}
                                                />
                                            ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default HomeSidebar;
