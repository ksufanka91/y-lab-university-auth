import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({type = 'button', children, disabled = false, loading = false, ...other}) => {
    return (
        <button
            type={type}
            className={classNames(styles.button, {[styles.loading]: loading})}
            disabled={disabled}
            {...other}>
            {children}
        </button>
    );
};

export default Button;