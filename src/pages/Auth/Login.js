import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import images from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';
import config from '~/config';
import Footer from './Footer';
import Register from './Register';

const Login = () => {
    const [openModal, setOpenModal] = useState(false);

    const formik = useFormik({
        initialValues: {
            email_phone: '',
            password: '',
        },
        validationSchema: Yup.object({
            email_phone: Yup.string()
                .email('Kiểm tra định dạng email')
                .required('Bạn cần thêm thông tin này khi đằng nhập tài khoản'),
            password: Yup.string()
                .min(6, 'Nhập mật khẩu có tối thiểu là 6 ký tự bao gồm số, chữ cái, dấu chấm câu (! và &).')
                .required('Nhập mật khẩu có tối thiểu là 6 ký tự bao gồm số, chữ cái, dấu chấm câu (! và &).'),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className="auth__login">
            <div className="auth__login__header">
                <div className="auth__login__header__container">
                    <div className="auth__login__header__container__left">
                        <div>
                            <Image
                                className="auth__login__header__container__left__img"
                                src={images.facebookLogin}
                                alt="Logo Facebook"
                            />
                        </div>
                        <h2>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h2>
                    </div>
                    <div className="auth__login__header__container__right">
                        <div className="auth__login__header__container__right__body">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="auth__login__header__container__right__body__form-group">
                                    <input
                                        className={`auth__login__header__container__right__body__form-group__input-field ${
                                            formik.errors.email_phone && formik.touched.email_phone && 'error'
                                        }`}
                                        type="text"
                                        name="email_phone"
                                        placeholder="Email hoặc số điện thoại"
                                        value={formik.values.email_phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.email_phone && formik.touched.email_phone && (
                                        <>
                                            <span className="auth__login__header__container__right__body__form-group__icon-error">
                                                <FontAwesomeIcon icon={faTriangleExclamation} />
                                            </span>
                                            <span className="auth__login__header__container__right__body__form-group__message-error">
                                                {formik.errors.email_phone}
                                            </span>
                                        </>
                                    )}
                                </div>
                                <div className="auth__login__header__container__right__body__form-group">
                                    <input
                                        className={`auth__login__header__container__right__body__form-group__input-field ${
                                            formik.errors.password && formik.touched.password && 'error'
                                        }`}
                                        type="password"
                                        name="password"
                                        placeholder="Mặt khẩu"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.password && formik.touched.password && (
                                        <>
                                            <span
                                                className="auth__login__header__container__right__body__form-group__icon-error"
                                                style={{ top: '14px' }}
                                            >
                                                <FontAwesomeIcon icon={faTriangleExclamation} />
                                            </span>
                                            <span className="auth__login__header__container__right__body__form-group__message-error">
                                                {formik.errors.password}
                                            </span>
                                        </>
                                    )}
                                </div>

                                <div className="auth__login__header__container__right__body__form-group">
                                    <Button
                                        buttonSize="btn--large"
                                        type="submit"
                                        className="auth__login__header__container__right__body__form-group__login-btn"
                                    >
                                        Đăng nhập
                                    </Button>
                                </div>

                                <div className="auth__login__header__container__right__body__form-link">
                                    <Button
                                        to="/"
                                        className="auth__login__header__container__right__body__form-link__forgot-pass"
                                    >
                                        Quên mật khẩu?
                                    </Button>
                                </div>

                                <div className="auth__login__header__container__right__body__underline"></div>

                                <div className="auth__login__header__container__right__body__form-group">
                                    <Button
                                        className="auth__login__header__container__right__body__form-group__resgiter-btn"
                                        onClick={() => setOpenModal(!openModal)}
                                    >
                                        Tạo tài khoản mới
                                    </Button>
                                </div>
                            </form>
                        </div>
                        <div className="auth__login__header__container__right__more">
                            <p>
                                <Link to={config.routes.home}>Tạo Trang</Link> dành cho người nổi tiếng, thương hiệu
                                hoặc doanh nghiệp.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {openModal && <Register openModal={openModal} setOpenModal={setOpenModal} />}
            <Footer />
        </div>
    );
};

export default Login;
