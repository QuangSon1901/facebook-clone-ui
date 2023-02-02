import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('account__wrapper')}>
            <img className={cx('account__wrapper__avatar')} src={images.account_avatar} alt="Hoa" />
            <div className={cx('account__wrapper__infor')}>
                <span className={cx('account__wrapper__infor__name')}>Nguyen Van A</span>
                <span className={cx('account__wrapper__infor__notify')}>1 thông báo mới</span>
            </div>
            <FontAwesomeIcon icon={faXmark} className={cx('account__wrapper__btn-delete')} />
        </div>
    );
};

export default AccountItem;
