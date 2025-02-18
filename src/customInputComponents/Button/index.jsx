import styles from "./button.module.css";

const Button = ({ label, backgroundColor, onClick, width, color }) => {
    return (
        <button 
            className={styles.button} 
            style={{ backgroundColor, width, color }} 
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
