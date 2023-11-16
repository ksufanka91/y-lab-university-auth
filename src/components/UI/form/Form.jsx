import styles from "./Form.module.scss";

const Form = ({children, onSubmit = null, ...other}) => {
    return (
        <form
            onSubmit={onSubmit}
            className={styles.form}
            {...other}
        >
            {children}
        </form>
    );
};

export default Form;