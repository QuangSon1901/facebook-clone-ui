import { useEffect, useRef, useState } from 'react';

import Tippy from '@tippyjs/react/headless';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import ButtonSquare from '~/components/ButtonSquare';
import config from '~/config';
import Image from '~/components/Image';
import images from '~/assets/images';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import ButtonCircle from '~/components/ButtonCircle';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3, 4]);
        }, 1000);
    }, []);

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <div className="search">
            <Tippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className="search__result" tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <div className="search__result__header">
                                <p className="search__result__header__title">Tìm kiếm gần đây</p>
                                <ButtonSquare
                                    to={config.routes.home}
                                    small
                                    className="search__result__header__update-btn"
                                >
                                    <span>Chỉnh sửa</span>
                                </ButtonSquare>
                            </div>
                            <div className="search__result__body">
                                <ButtonSquare to={config.routes.home} large>
                                    <div className="search__result__body__item">
                                        <ButtonCircle img={images.accountAvatar} small />
                                        <div className="search__result__body__item__info">
                                            <div className="search__result__body__item__info__title">
                                                Nguyễn Văn Huy
                                            </div>
                                            <div className="search__result__body__item__info__more">Bạn bè</div>
                                        </div>
                                        <span className="search__result__body__item__close">
                                            <FontAwesomeIcon icon={faXmark} />
                                        </span>
                                    </div>
                                </ButtonSquare>
                                <ButtonSquare to={config.routes.home} large>
                                    <div className="search__result__body__item">
                                        <ButtonCircle icon={images.clock} small />
                                        <div className="search__result__body__item__info">
                                            <div className="search__result__body__item__info__title">
                                                Chúc mừng DOLBIE Hoài Bắc đã xuất sắc tiến thẳng lên Bảng vàng điểm cao
                                                cùng kết quả 8.0 mỹ mãn (vượt 0.5 band so với mục tiêu), tiếp tục nối
                                                dài truyền thống xuất sắc của các DOLBIE nè!
                                            </div>
                                        </div>
                                        <span className="search__result__body__item__close">
                                            <FontAwesomeIcon icon={faXmark} />
                                        </span>
                                    </div>
                                </ButtonSquare>
                                <ButtonSquare to={config.routes.home} large>
                                    <div className="search__result__body__item">
                                        <ButtonCircle img={images.accountAvatar} small />
                                        <div className="search__result__body__item__info">
                                            <div className="search__result__body__item__info__title">Sơn Đặng</div>
                                        </div>
                                        <span className="search__result__body__item__close">
                                            <FontAwesomeIcon icon={faXmark} />
                                        </span>
                                    </div>
                                </ButtonSquare>
                                <div className="search__result__body__loading">
                                    <i className="bx bx-loader-circle bx-spin"></i>
                                </div>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <label htmlFor="search-input" className="search__label">
                    <span>
                        <FontAwesomeIcon className="search__label__icon" icon={faMagnifyingGlass} />
                    </span>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onFocus={() => setShowResult(true)}
                        onChange={(e) => !e.target.value.startsWith(' ') && setSearchValue(e.target.value)}
                        id="search-input"
                        placeholder="Tìm kiếm trên facebook"
                        spellCheck="false"
                    />
                </label>
            </Tippy>
        </div>
    );
};

export default Search;
