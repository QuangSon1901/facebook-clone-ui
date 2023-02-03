import { useEffect, useRef, useState } from 'react';

import Tippy from '@tippyjs/react/headless';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import ButtonSquare from '~/components/ButtonSquare';
import config from '~/config';
import images from '~/assets/images';
import ButtonCircle from '~/components/ButtonCircle';
import InputCircle from '~/components/InputCircle';

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
                        <PopperWrapper style={{ padding: '8px' }}>
                            <div className="search__result__header">
                                <p className="search__result__header__title">Tìm kiếm gần đây</p>
                                <ButtonSquare
                                    to={config.routes.home}
                                    small
                                    className="search__result__header__update-btn"
                                    type={{
                                        type: 'tag',
                                    }}
                                >
                                    <span>Chỉnh sửa</span>
                                </ButtonSquare>
                            </div>
                            <div className="search__result__body">
                                <ButtonSquare
                                    to={config.routes.home}
                                    large
                                    type={{
                                        type: 'search',
                                        options: {
                                            title: 'Nguyễn Văn Huy',
                                            more: 'Bạn bè',
                                            img: images.accountAvatar,
                                        },
                                    }}
                                />
                                <ButtonSquare
                                    to={config.routes.home}
                                    large
                                    type={{
                                        type: 'search',
                                        options: {
                                            title: `Chúc mừng DOLBIE Hoài Bắc đã xuất sắc tiến thẳng lên Bảng vàng điểm cao cùng
                                            kết quả 8.0 mỹ mãn (vượt 0.5 band so với mục tiêu), tiếp tục nối dài truyền
                                            thống xuất sắc của các DOLBIE nè!`,
                                            img: images.accountAvatar,
                                        },
                                    }}
                                />
                                <ButtonSquare
                                    to={config.routes.home}
                                    large
                                    type={{
                                        type: 'search',
                                        options: {
                                            title: 'Sơn Đặng',
                                            img: images.accountAvatar,
                                        },
                                    }}
                                />
                                <div className="search__result__body__loading">
                                    <i className="bx bx-loader-circle bx-spin"></i>
                                </div>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div>
                    <InputCircle
                        ref={inputRef}
                        value={searchValue}
                        onFocus={() => setShowResult(true)}
                        onChange={(e) => !e.target.value.startsWith(' ') && setSearchValue(e.target.value)}
                        id="search-input"
                        width="500px"
                        placeholder="Tìm kiếm trên Facebook"
                    />
                </div>
            </Tippy>
        </div>
    );
};

export default Search;
