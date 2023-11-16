import styles from "./Input.module.scss";
import classNames from "classnames";

const Input = ({type, className, onChange = null, ...other}) => {
    return (
        <input
            type={type}
            onChange={onChange}
            className={classNames(styles.input, className)}
            {...other}
        />
    );
};

export default Input;