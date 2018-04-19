import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const BaseButton = ({ className, disabled, label, onClick }) => (
    <button className={style[className]} disabled={disabled} onClick={onClick}>
        {label}
    </button>
);

BaseButton.defaultProps = {
    disabled: false,
    onClick: () => {},
};

BaseButton.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.shape({}),
    label: PropTypes.string.isRequired
};

export default BaseButton;