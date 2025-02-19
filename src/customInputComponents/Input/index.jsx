import { useState } from "react";
import styles from "./input.module.css";

const Input = ({ label, type, value, onChange, placeholder, containerStyle, error }) => {

    const handleChange = (e) => {
        const inputValue = e.target.value;
        onChange(inputValue);
    };

    return (
        <div className={`${styles.inputContainer} ${containerStyle || ""}`}>
            <label className={styles.label}>{label}</label>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={`${styles.input} ${error ? styles.inputError : ""}`}
            />
            {error && <p className={styles.errorText}>{error}</p>}
        </div>
    );
};

export default Input;
