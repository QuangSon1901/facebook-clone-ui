import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { forwardRef } from 'react';

const InputCircle = forwardRef(
    (
        {
            size = 'l',
            type = 'text',
            value = '',
            placeholder = '',
            width = '100%',
            name,
            id,
            className,
            onChange,
            onFocus,
            onBlur,
            spellCheck = false,
            ...passProps
        },
        ref,
    ) => {
        const classes = ['input-circle', className, size];
        return (
            <div className="input-circle">
                <label htmlFor={id} className="input-circle__label" style={{ width }}>
                    <input
                        ref={ref}
                        value={value}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChange={onChange}
                        id={id}
                        placeholder={placeholder}
                        spellCheck={spellCheck}
                        className={classes.join(' ')}
                        {...passProps}
                    />
                    <span className="input-circle__label__icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                </label>
            </div>
        );
    },
);

export default InputCircle;
