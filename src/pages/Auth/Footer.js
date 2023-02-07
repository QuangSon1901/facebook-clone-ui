import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import config from '~/config';

const Footer = () => {
    return (
        <footer className="auth__login__footer">
            <div className="auth__login__footer__container">
                <ul className="auth__login__footer__container__language">
                    <li>
                        <Link to={config.routes.auth}>Tiếng Việt</Link>
                    </li>
                    <li>
                        <Link to={config.routes.auth}>English (UK)</Link>
                    </li>
                    <li>
                        <Link to={config.routes.auth}>中文(台灣)</Link>
                    </li>
                    <li>
                        <Link to={config.routes.auth}>한국어</Link>
                    </li>
                    <li>
                        <Link to={config.routes.auth}>日本語</Link>
                    </li>
                    <li>
                        <Link to={config.routes.auth}>Français (France)</Link>
                    </li>
                    <li>
                        <Link to={config.routes.auth}>ภาษาไทย</Link>
                    </li>
                    <li>
                        <Link to={config.routes.auth}>Español</Link>
                    </li>
                    <li>
                        <Link to={config.routes.auth}>Português (Brasil)</Link>
                    </li>
                    <li>
                        <Link to={config.routes.auth}>Deutsch</Link>
                    </li>
                    <li>
                        <Link to={config.routes.auth}>Italiano</Link>
                    </li>
                    <li>
                        <Link to={config.routes.auth}>Italiano</Link>
                    </li>
                    <li>
                        <Link to={config.routes.auth}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Link>
                    </li>
                </ul>
                <div className="auth__login__footer__container__underline"></div>
                <div className="auth__login__footer__container__content-info">
                    <ul>
                        <li>
                            <Link to={config.routes.auth}>Đăng ký</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Đăng nhập</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Messager</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Facebook Lite</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Watch</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Địa điểm</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Trò chơi</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Marketplace</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth} target="_blank">
                                Meta Pay
                            </Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth} target="_blank">
                                Oculus
                            </Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth} target="_blank">
                                Portal
                            </Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth} target="_blank">
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Bulletin</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Chiến dịch gây quỹ</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Dịch vụ</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Trung tâm thông tin bỏ phiếu</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Chính sách quyền riêng tư</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Trung tâm quyền riêng tư</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Nhóm</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Giới thiệu</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Tạo quảng cáo</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Tạo Trang</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Nhà phát triển</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Tuyển dụng</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Cookie</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Lựa chọn quảng cáo</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Điều khoản</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>Trợ giúp</Link>
                        </li>
                        <li>
                            <Link to={config.routes.auth}>
                                Tải thông tin liên hệ lên & đối tượng không phải người dùng
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="auth__login__footer__container__copyright">
                    <span> Meta © 2023</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
