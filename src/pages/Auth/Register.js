import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faCircleQuestion, faXmark } from '@fortawesome/free-solid-svg-icons';

import config from '~/config';
import Button from '~/components/Button';
import { disabledScroll, enabledScroll } from '~/utils/ScrollBody';
import { handleYear, handleMonth, handleDay } from '~/utils/Date';

const Register = ({ openModal, setOpenModal }) => {
    const [openGenderOrther, setOpenGenderOrther] = useState(false);
    const [openBirthdayDesc, setOpenBirthdayDesc] = useState(false);
    const [openGenderDesc, setOpenGenderDesc] = useState(false);

    const [updateBirthday, setUpdateBirthday] = useState({
        status: false,
        date_valid: '',
    });

    const [birthday, setBirthday] = useState({
        day: new Date().getDate() - 1,
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
    });

    const [openMessageError, setOpenMessageError] = useState({
        first_name: false,
        new_password: false,
        last_name: false,
        email_phone: false,
        birthday: false,
        gender: false,
        nick_name: false,
    });

    openModal ? disabledScroll() : enabledScroll();

    useEffect(() => {
        const checkValidBirthday = () => {
            var now_date = new Date();
            var date = new Date(`${birthday.month} / ${birthday.day} / ${birthday.year}`);
            if (now_date.getTime() > date.getTime()) {
                setUpdateBirthday({
                    ...updateBirthday,
                    status: true,
                    date_valid: date.toLocaleDateString(),
                });
            } else {
                setUpdateBirthday({
                    ...updateBirthday,
                    status: false,
                    date_valid: '',
                });
            }
        };

        checkValidBirthday();
    }, [birthday]);

    const formik = useFormik({
        initialValues: {
            last_name: '',
            first_name: '',
            email_phone: '',
            new_password: '',
            birthday: updateBirthday.date_valid,
            gender: '',
            nick_name: '',
        },
        validationSchema: Yup.object({
            last_name: Yup.string().required('Tên bạn là gì?'),
            first_name: Yup.string().required('Tên bạn là gì?'),
            email_phone: Yup.string()
                .email('Kiểm tra định dạng email')
                .required('Bạn sẽ sử dụng thông tin này khi đằng nhập và khi cần cài đặt lại mật khẩu'),
            new_password: Yup.string()
                .min(6, 'Nhập mật khẩu có tối thiểu là 6 ký tự bao gồm số, chữ cái, dấu chấm câu (! và &).')
                .required('Nhập mật khẩu có tối thiểu là 6 ký tự bao gồm số, chữ cái, dấu chấm câu (! và &).'),
            birthday: Yup.string().required(
                'Hình như bạn đã nhập sai thông tin. Hãy nhớ dùng ngày sinh thật của mình nhé',
            ),
            gender: Yup.string().required(
                'Vui lòng chọn giới tính. Bạn có thể chọn người có thể xem nội dung này sau.',
            ),
            nick_name: Yup.string().required('Vui lòng chọn danh xưng.').nullable(true),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const handleBlur = (e) => {
        const currentTarget = e.currentTarget;

        if (!currentTarget.contains(document.activeElement)) {
            setOpenMessageError({
                ...openMessageError,
                first_name: false,
                new_password: false,
                last_name: false,
                email_phone: false,
                birthday: false,
                gender: false,
                nick_name: false,
            });
        }
    };

    return (
        <div className="auth__register">
            <div className="auth__register__overlay"></div>
            <div className="auth__register__container">
                <div className="auth__register__container__modal" onBlur={handleBlur}>
                    <div onClick={() => setOpenModal(!openModal)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className="auth__register__container__modal__header">
                        <div>Đăng ký</div>
                        <div>Nhanh chóng và dễ dàng.</div>
                    </div>
                    <div className="auth__register__container__modal__content">
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="auth__register__container__modal__content__form-group"
                                >
                                    <input
                                        id="lastName"
                                        className={`auth__register__container__modal__content__form-group__input-field ${
                                            !openMessageError.last_name &&
                                            formik.errors.last_name &&
                                            formik.touched.last_name &&
                                            'error'
                                        }`}
                                        type="text"
                                        placeholder="Họ"
                                        name="last_name"
                                        value={formik.values.last_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        onFocus={() => {
                                            setOpenMessageError({
                                                ...openMessageError,
                                                last_name: !openMessageError.last_name,
                                            });
                                        }}
                                    />
                                    {!openMessageError.last_name &&
                                        formik.errors.last_name &&
                                        formik.touched.last_name && (
                                            <span className="auth__register__container__modal__content__form-group__icon-error">
                                                <FontAwesomeIcon icon={faCircleExclamation} />
                                            </span>
                                        )}
                                    {openMessageError.last_name &&
                                        formik.errors.last_name &&
                                        formik.touched.last_name && (
                                            <span className="auth__register__container__modal__content__form-group__message-error">
                                                {formik.errors.last_name}
                                            </span>
                                        )}
                                </label>
                                <label
                                    htmlFor="firstName"
                                    className="auth__register__container__modal__content__form-group"
                                >
                                    <input
                                        id="firstName"
                                        className={`auth__register__container__modal__content__form-group__input-field ${
                                            !openMessageError.first_name &&
                                            formik.errors.first_name &&
                                            formik.touched.first_name &&
                                            'error'
                                        }`}
                                        type="text"
                                        placeholder="Tên"
                                        name="first_name"
                                        value={formik.values.first_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        onFocus={() => {
                                            setOpenMessageError({
                                                ...openMessageError,
                                                first_name: !openMessageError.first_name,
                                            });
                                        }}
                                    />
                                    {!openMessageError.first_name &&
                                        formik.errors.first_name &&
                                        formik.touched.first_name && (
                                            <>
                                                <span className="auth__register__container__modal__content__form-group__icon-error">
                                                    <FontAwesomeIcon icon={faCircleExclamation} />
                                                </span>
                                            </>
                                        )}
                                    {openMessageError.first_name &&
                                        formik.errors.first_name &&
                                        formik.touched.first_name && (
                                            <span className="auth__register__container__modal__content__form-group__message-error">
                                                {formik.errors.first_name}
                                            </span>
                                        )}
                                </label>
                            </div>

                            <div>
                                <label
                                    htmlFor="emailPhone"
                                    className="auth__register__container__modal__content__form-group"
                                >
                                    <input
                                        id="emailPhone"
                                        className={`auth__register__container__modal__content__form-group__input-field ${
                                            !openMessageError.email_phone &&
                                            formik.errors.email_phone &&
                                            formik.touched.email_phone &&
                                            'error'
                                        }`}
                                        type="text"
                                        placeholder="Số điện thoại hoặc email"
                                        name="email_phone"
                                        value={formik.values.email_phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        onFocus={() => {
                                            setOpenMessageError({
                                                ...openMessageError,
                                                email_phone: !openMessageError.email_phone,
                                            });
                                        }}
                                    />
                                    {!openMessageError.email_phone &&
                                        formik.errors.email_phone &&
                                        formik.touched.email_phone && (
                                            <span className="auth__register__container__modal__content__form-group__icon-error">
                                                <FontAwesomeIcon icon={faCircleExclamation} />
                                            </span>
                                        )}
                                    {openMessageError.email_phone &&
                                        formik.errors.email_phone &&
                                        formik.touched.email_phone && (
                                            <span className="auth__register__container__modal__content__form-group__message-error">
                                                {formik.errors.email_phone}
                                            </span>
                                        )}
                                </label>

                                <label
                                    htmlFor="newPassword"
                                    className="auth__register__container__modal__content__form-group"
                                >
                                    <input
                                        id="newPassword"
                                        className={`auth__register__container__modal__content__form-group__input-field ${
                                            !openMessageError.new_password &&
                                            formik.errors.new_password &&
                                            formik.touched.new_password &&
                                            'error'
                                        }`}
                                        type="password"
                                        placeholder="Mật khẩu mới"
                                        name="new_password"
                                        value={formik.values.new_password}
                                        onFocus={() => {
                                            setOpenMessageError({
                                                ...openMessageError,
                                                new_password: !openMessageError.new_password,
                                            });
                                        }}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {!openMessageError.new_password &&
                                        formik.errors.new_password &&
                                        formik.touched.new_password && (
                                            <span className="auth__register__container__modal__content__form-group__icon-error">
                                                <FontAwesomeIcon icon={faCircleExclamation} />
                                            </span>
                                        )}
                                    {openMessageError.new_password &&
                                        formik.errors.new_password &&
                                        formik.touched.new_password && (
                                            <span className="auth__register__container__modal__content__form-group__message-error">
                                                {formik.errors.new_password}
                                            </span>
                                        )}
                                </label>
                            </div>

                            <div className="auth__register__container__modal__content__form-group">
                                <div>
                                    <label htmlFor="birthday">
                                        Sinh nhật
                                        <Link
                                            to={config.routes.auth}
                                            style={{ marginLeft: '4px' }}
                                            onClick={() => {
                                                setOpenBirthdayDesc(!openBirthdayDesc);
                                                setOpenGenderDesc(false);
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faCircleQuestion} />
                                        </Link>
                                        {openBirthdayDesc && (
                                            <div className="auth__register__container__modal__content__form-group__birthday-desc">
                                                <p>
                                                    <b>Cung cấp sinh nhật của bạn</b> giúp đảm bảo bạn có được trải
                                                    nghiệm Facebook phù hợp với độ tuổi của mình. Nếu bạn muốn thay đổi
                                                    người nhìn thấy thông tin này, hãy đi tới phần Giới thiệu trên trang
                                                    cá nhân của bạn. Để biết thêm chi tiết, vui lòng truy cập vào
                                                    <Link to={config.routes.auth}>Chính sách quyền riêng tư</Link> của
                                                    chúng tôi.
                                                </p>
                                            </div>
                                        )}
                                        {!updateBirthday.status && (
                                            <>
                                                <span
                                                    className="auth__register__container__modal__content__form-group__icon-error"
                                                    style={{ padding: '2px' }}
                                                    onClick={() => {
                                                        setOpenMessageError({
                                                            ...openMessageError,
                                                            birthday: !openMessageError.birthday,
                                                        });
                                                    }}
                                                >
                                                    <FontAwesomeIcon icon={faCircleExclamation} />
                                                </span>
                                                {openMessageError.birthday && (
                                                    <span
                                                        className="auth__register__container__modal__content__form-group__message-error"
                                                        style={{ top: '74px' }}
                                                    >
                                                        Hình như bạn đã nhập sai thông tin. Hãy nhớ dùng ngày sinh thật
                                                        của mình nhé
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </label>
                                </div>
                                <input
                                    id="birthday"
                                    type="text"
                                    hidden
                                    placeholder="Sinh nhật"
                                    name="birthday"
                                    value={formik.values.birthday}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <div className="auth__register__container__modal__content__form-group__birthday-wrapper">
                                    <select
                                        className={`auth__register__container__modal__content__form-group__birthday-wrapper__item  ${
                                            !updateBirthday.status && 'error'
                                        }`}
                                        name="day_birth"
                                        id="day"
                                        value={birthday.day}
                                        onChange={(e) => setBirthday({ ...birthday, day: e.target.value })}
                                    >
                                        {handleDay(birthday.month, birthday.year)}
                                    </select>
                                    <select
                                        name="month_birth"
                                        id="month"
                                        className={`auth__register__container__modal__content__form-group__birthday-wrapper__item  ${
                                            !updateBirthday.status && 'error'
                                        }`}
                                        value={birthday.month}
                                        onChange={(e) => setBirthday({ ...birthday, month: e.target.value })}
                                    >
                                        {handleMonth()}
                                    </select>
                                    <select
                                        name="year_birth"
                                        id="year"
                                        className={`auth__register__container__modal__content__form-group__birthday-wrapper__item  ${
                                            !updateBirthday.status && 'error'
                                        }`}
                                        value={birthday.year}
                                        onChange={(e) => setBirthday({ ...birthday, year: e.target.value })}
                                    >
                                        {handleYear()}
                                    </select>
                                </div>
                            </div>

                            <div className="auth__register__container__modal__content__form-group">
                                <div
                                    onClick={() => {
                                        setOpenMessageError({
                                            ...openMessageError,
                                            gender: !openMessageError.gender,
                                        });
                                    }}
                                >
                                    Giới tính
                                    <Link
                                        to={config.routes.auth}
                                        onClick={() => {
                                            setOpenBirthdayDesc(false);
                                            setOpenGenderDesc(!openGenderDesc);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faCircleQuestion} />
                                    </Link>
                                    {openGenderDesc && (
                                        <div className="auth__register__container__modal__content__form-group__gender-desc">
                                            <p>
                                                Bạn có thể thay đổi ai nhìn thấy giới tính của mình trên trang cá nhân
                                                vào lúc khác. Chọn Tùy chỉnh nếu bạn thuộc giới tính khác hoặc không
                                                muốn tiết lộ.
                                            </p>
                                        </div>
                                    )}
                                    {formik.errors.gender && formik.touched.gender && (
                                        <>
                                            <span
                                                className="auth__register__container__modal__content__form-group__icon-error"
                                                style={{ padding: '2px' }}
                                            >
                                                <FontAwesomeIcon icon={faCircleExclamation} />
                                            </span>
                                            {openMessageError.gender && (
                                                <span
                                                    className="auth__register__container__modal__content__form-group__message-error"
                                                    style={{ top: '72px' }}
                                                >
                                                    {formik.errors.gender}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="auth__register__container__modal__content__form-group__gender-wrapper">
                                    <div
                                        className={`auth__register__container__modal__content__form-group__gender-wrapper__item ${
                                            formik.errors.gender && formik.touched.gender && 'error'
                                        }`}
                                    >
                                        <label htmlFor="female">Nữ</label>
                                        <input
                                            id="female"
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            onClick={() => setOpenGenderOrther(false)}
                                            onChange={formik.handleChange}
                                        />
                                    </div>
                                    <div
                                        className={`auth__register__container__modal__content__form-group__gender-wrapper__item ${
                                            formik.errors.gender && formik.touched.gender && 'error'
                                        }`}
                                    >
                                        <label htmlFor="male">Nam</label>
                                        <input
                                            id="male"
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            onClick={() => setOpenGenderOrther(false)}
                                            onChange={formik.handleChange}
                                            onFocus={() => {
                                                setOpenMessageError({
                                                    ...openMessageError,
                                                    gender: !openMessageError.gender,
                                                });
                                            }}
                                        />
                                    </div>
                                    <div
                                        className={`auth__register__container__modal__content__form-group__gender-wrapper__item ${
                                            formik.errors.gender && formik.touched.gender && 'error'
                                        }`}
                                    >
                                        <label htmlFor="gender_other">Tuỳ chỉnh</label>
                                        <input
                                            id="gender_other"
                                            type="radio"
                                            name="gender"
                                            value="gender_other"
                                            onClick={() => setOpenGenderOrther(true)}
                                            onChange={formik.handleChange}
                                            onFocus={() => {
                                                setOpenMessageError({
                                                    ...openMessageError,
                                                    gender: !openMessageError.gender,
                                                });
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {openGenderOrther && (
                                <div className="auth__register__container__modal__content__form-group">
                                    <div className="auth__register__container__modal__content__form-group__custom-gender">
                                        <select
                                            className={`${
                                                !openMessageError.nick_name &&
                                                formik.errors.nick_name &&
                                                formik.touched.nick_name &&
                                                'error'
                                            }`}
                                            name="nick_name"
                                            id="nick_name"
                                            value={formik.values.nick_name}
                                            onChange={formik.handleChange}
                                            onFocus={() => {
                                                setOpenMessageError({
                                                    ...openMessageError,
                                                    nick_name: !openMessageError.nick_name,
                                                });
                                            }}
                                        >
                                            <option value={`Chọn danh xưng`}>Chọn danh xưng</option>
                                            <option value={`"Cô ấy: "Chúc cô ấy sinh nhật vui vẻ!"`}>
                                                Cô ấy: "Chúc cô ấy sinh nhật vui vẻ!"
                                            </option>
                                            <option value={`Anh ấy: "Chúc anh ấy sinh nhật vui vẻ!"`}>
                                                Anh ấy: "Chúc anh ấy sinh nhật vui vẻ!"
                                            </option>
                                            <option value={`Họ: "Chúc họ sinh nhật vui vẻ!"`}>
                                                Họ: "Chúc họ sinh nhật vui vẻ!"
                                            </option>
                                        </select>
                                        {!openMessageError.nick_name &&
                                            formik.errors.nick_name &&
                                            formik.touched.nick_name && (
                                                <span className="auth__register__container__modal__content__form-group__custom-gender__icon-error">
                                                    <FontAwesomeIcon icon={faCircleExclamation} />
                                                </span>
                                            )}
                                        {openMessageError.nick_name &&
                                            formik.errors.nick_name &&
                                            formik.touched.nick_name && (
                                                <span className="auth__register__container__modal__content__form-group__custom-gender__message-error">
                                                    {formik.errors.nick_name}
                                                </span>
                                            )}
                                        <p>Danh xưng của bạn hiển thị với tất cả mọi người.</p>
                                        <input
                                            type="text"
                                            name="custom_gender"
                                            placeholder="Giới tính (không bắt buộc)"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="auth__register__container__modal__content__desc">
                                <p>
                                    Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên
                                    Facebook.
                                    <Link to={config.routes.auth} target="_blank">
                                        Tìm hiểu thêm
                                    </Link>
                                </p>
                            </div>

                            <div className="auth__register__container__modal__content__desc">
                                <p>
                                    Bằng cách nhấp vào Đăng ký, bạn đồng ý với
                                    <Link to={config.routes.auth} target="_blank">
                                        Điều khoản
                                    </Link>
                                    ,
                                    <Link to={config.routes.auth} target="_blank">
                                        Chính sách quyền riêng tư
                                    </Link>
                                    và
                                    <Link to={config.routes.auth} target="_blank">
                                        Chính sách cookie
                                    </Link>
                                    của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất
                                    kỳ lúc nào.
                                </p>
                            </div>

                            <div className="auth__register__container__modal__content__btn">
                                <Button type="submit">Đăng ký</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
