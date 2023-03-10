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

const Register = ({ onClose }) => {
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

    useEffect(() => {
        disabledScroll();
        return () => {
            enabledScroll();
        };
    }, []);

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
            last_name: Yup.string().required('T??n b???n l?? g???'),
            first_name: Yup.string().required('T??n b???n l?? g???'),
            email_phone: Yup.string()
                .email('Ki???m tra ?????nh d???ng email')
                .required('B???n s??? s??? d???ng th??ng tin n??y khi ?????ng nh???p v?? khi c???n c??i ?????t l???i m???t kh???u'),
            new_password: Yup.string()
                .min(6, 'Nh???p m???t kh???u c?? t???i thi???u l?? 6 k?? t??? bao g???m s???, ch??? c??i, d???u ch???m c??u (! v?? &).')
                .required('Nh???p m???t kh???u c?? t???i thi???u l?? 6 k?? t??? bao g???m s???, ch??? c??i, d???u ch???m c??u (! v?? &).'),
            birthday: Yup.string().required(
                'H??nh nh?? b???n ???? nh???p sai th??ng tin. H??y nh??? d??ng ng??y sinh th???t c???a m??nh nh??',
            ),
            gender: Yup.string().required(
                'Vui l??ng ch???n gi???i t??nh. B???n c?? th??? ch???n ng?????i c?? th??? xem n???i dung n??y sau.',
            ),
            nick_name: Yup.string().required('Vui l??ng ch???n danh x??ng.').nullable(true),
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
                    <div onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className="auth__register__container__modal__header">
                        <div>????ng k??</div>
                        <div>Nhanh ch??ng v?? d??? d??ng.</div>
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
                                        placeholder="H???"
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
                                        placeholder="T??n"
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
                                        placeholder="S??? ??i???n tho???i ho???c email"
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
                                        placeholder="M???t kh???u m???i"
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
                                        Sinh nh???t
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
                                                    <b>Cung c???p sinh nh???t c???a b???n</b> gi??p ?????m b???o b???n c?? ???????c tr???i
                                                    nghi???m Facebook ph?? h???p v???i ????? tu???i c???a m??nh. N???u b???n mu???n thay ?????i
                                                    ng?????i nh??n th???y th??ng tin n??y, h??y ??i t???i ph???n Gi???i thi???u tr??n trang
                                                    c?? nh??n c???a b???n. ????? bi???t th??m chi ti???t, vui l??ng truy c???p v??o
                                                    <Link to={config.routes.auth}>Ch??nh s??ch quy???n ri??ng t??</Link> c???a
                                                    ch??ng t??i.
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
                                                        H??nh nh?? b???n ???? nh???p sai th??ng tin. H??y nh??? d??ng ng??y sinh th???t
                                                        c???a m??nh nh??
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
                                    placeholder="Sinh nh???t"
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
                                    Gi???i t??nh
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
                                                B???n c?? th??? thay ?????i ai nh??n th???y gi???i t??nh c???a m??nh tr??n trang c?? nh??n
                                                v??o l??c kh??c. Ch???n T??y ch???nh n???u b???n thu???c gi???i t??nh kh??c ho???c kh??ng
                                                mu???n ti???t l???.
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
                                        <label htmlFor="female">N???</label>
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
                                        <label htmlFor="gender_other">Tu??? ch???nh</label>
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
                                            <option value={`Ch???n danh x??ng`}>Ch???n danh x??ng</option>
                                            <option value={`"C?? ???y: "Ch??c c?? ???y sinh nh???t vui v???!"`}>
                                                C?? ???y: "Ch??c c?? ???y sinh nh???t vui v???!"
                                            </option>
                                            <option value={`Anh ???y: "Ch??c anh ???y sinh nh???t vui v???!"`}>
                                                Anh ???y: "Ch??c anh ???y sinh nh???t vui v???!"
                                            </option>
                                            <option value={`H???: "Ch??c h??? sinh nh???t vui v???!"`}>
                                                H???: "Ch??c h??? sinh nh???t vui v???!"
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
                                        <p>Danh x??ng c???a b???n hi???n th??? v???i t???t c??? m???i ng?????i.</p>
                                        <input
                                            type="text"
                                            name="custom_gender"
                                            placeholder="Gi???i t??nh (kh??ng b???t bu???c)"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="auth__register__container__modal__content__desc">
                                <p>
                                    Nh???ng ng?????i d??ng d???ch v??? c???a ch??ng t??i c?? th??? ???? t???i th??ng tin li??n h??? c???a b???n l??n
                                    Facebook.
                                    <Link to={config.routes.auth} target="_blank">
                                        T??m hi???u th??m
                                    </Link>
                                </p>
                            </div>

                            <div className="auth__register__container__modal__content__desc">
                                <p>
                                    B???ng c??ch nh???p v??o ????ng k??, b???n ?????ng ?? v???i
                                    <Link to={config.routes.auth} target="_blank">
                                        ??i???u kho???n
                                    </Link>
                                    ,
                                    <Link to={config.routes.auth} target="_blank">
                                        Ch??nh s??ch quy???n ri??ng t??
                                    </Link>
                                    v??
                                    <Link to={config.routes.auth} target="_blank">
                                        Ch??nh s??ch cookie
                                    </Link>
                                    c???a ch??ng t??i. B???n c?? th??? nh???n ???????c th??ng b??o c???a ch??ng t??i qua SMS v?? h???y nh???n b???t
                                    k??? l??c n??o.
                                </p>
                            </div>

                            <div className="auth__register__container__modal__content__btn">
                                <Button type="submit">????ng k??</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
