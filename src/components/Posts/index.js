import Color from 'color-thief-react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import config from '~/config';
import ButtonCircle from '../ButtonCircle';
import ButtonSquare from '../ButtonSquare';
import Image from '../Image';

const Posts = ({ children }) => {
    return (
        <PopperWrapper style={{ padding: '8px 0', maxHeight: 'unset' }} className="shadow-2">
            <div className="card">{children}</div>
        </PopperWrapper>
    );
};

export const PostsHeader = ({ avatar, poster, time, mode }) => {
    return (
        <div className="card__header">
            <div className="card__header__right">
                <ButtonCircle img={avatar} hover />
                <div>
                    <h4>{poster}</h4>
                    <div className="card__header__right__desc">
                        <span>{time}</span>
                        <span>&middot;</span>
                        <img src={mode} alt="" />
                    </div>
                </div>
            </div>
            <div className="card__header__left">
                <ButtonCircle
                    activeAni
                    img={images.icons1}
                    size="l"
                    styleImg={{
                        backgroundPosition: '-132px -110px',
                        backgroundSize: '190px 204px',
                        width: '20px',
                        height: '20px',
                    }}
                    hover
                />
                <ButtonCircle
                    activeAni
                    img={images.icons1}
                    size="l"
                    styleImg={{
                        backgroundPosition: '-110px -110px',
                        backgroundSize: '190px 204px',
                        width: '20px',
                        height: '20px',
                    }}
                    hover
                />
            </div>
        </div>
    );
};

export const PostsBody = ({ type = 'text', posts }) => {
    return (
        <div className="card__body">
            <div className="card__body__caption" dangerouslySetInnerHTML={{ __html: posts.caption }} />
            <div className="card__body__content">
                <Color src={posts.images[0]} crossOrigin="anonymous" format="hex">
                    {({ data }) => {
                        return (
                            <div className="card__body__content__image" style={{ backgroundColor: data }}>
                                <Image src={posts.images[0]} />
                            </div>
                        );
                    }}
                </Color>
            </div>
        </div>
    );
};

export const PostsFooter = ({ metaData }) => {
    const emoijsSorted = metaData.emoijs.sort((a, b) => (a.quantity < b.quantity ? 1 : -1));
    return (
        <div className="card__actions">
            <div className="card__actions__body">
                <div className="card__actions__body__num">
                    <div className="card__actions__body__num__left">
                        <div className="card__actions__body__num__left__icon">
                            {emoijsSorted.map((item, index) => {
                                return (
                                    <Image
                                        key={index}
                                        src={
                                            (item.type === 'heart' && images.heartIcon) ||
                                            (item.type === 'like' && images.likeIcon)
                                        }
                                        width="18"
                                        height="18"
                                    />
                                );
                            })}
                        </div>
                        <span>
                            <Link to={config.routes.home}>{metaData.numOfEmojs}</Link>
                        </span>
                    </div>
                    <div className="card__actions__body__num__right">
                        <span>
                            <Link to={config.routes.home}>{metaData.numOfComment} bình luận</Link>
                        </span>
                        <span>
                            <Link to={config.routes.home}>{metaData.numOfShare} lượt chia sẻ</Link>
                        </span>
                    </div>
                </div>
                <div className="card__actions__body__actions">
                    <ButtonSquare
                        to={config.routes.home}
                        small
                        type={{
                            type: 'tag',
                        }}
                    >
                        <ButtonCircle
                            img={images.likeEmptyIcon}
                            size="m"
                            styleImg={{
                                backgroundPosition: '0px -210px',
                                backgroundSize: '26px 898px',
                                width: '18px',
                                height: '18px',
                            }}
                        />
                        <span className="card__actions__span">Thích</span>
                    </ButtonSquare>
                    <ButtonSquare
                        to={config.routes.home}
                        small
                        type={{
                            type: 'tag',
                        }}
                    >
                        <ButtonCircle
                            img={images.likeEmptyIcon}
                            size="m"
                            styleImg={{
                                backgroundPosition: '0px -170px',
                                backgroundSize: '26px 898px',
                                width: '18px',
                                height: '18px',
                            }}
                        />
                        <span className="card__actions__span">Bình luận</span>
                    </ButtonSquare>
                    <ButtonSquare
                        to={config.routes.home}
                        small
                        type={{
                            type: 'tag',
                        }}
                    >
                        <ButtonCircle
                            img={images.likeEmptyIcon}
                            size="m"
                            styleImg={{
                                backgroundPosition: '0px -230px',
                                backgroundSize: '26px 898px',
                                width: '18px',
                                height: '18px',
                            }}
                        />
                        <span className="card__actions__span">Chia sẻ</span>
                    </ButtonSquare>
                </div>
                {/* <div className="card__actions__body__comment"></div> */}
            </div>
        </div>
    );
};

export default Posts;
