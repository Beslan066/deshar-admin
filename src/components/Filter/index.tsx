import './styles.scss';
import { useState } from 'react';

interface IFilter {
    type: "time" | "modules" | "points";
}

export const Filter = ({
    type = "time"
}: IFilter) => {
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');

    const validateTime = (value: string) => {
        if (!value) return true;

        const [hours, minutes] = value.split(':');
        const h = parseInt(hours, 10);
        const m = parseInt(minutes, 10);

        return h >= 0 && h <= 23 && m >= 0 && m <= 59;
    };

    const handleTimeInput = (value: string, setValue: (val: string) => void) => {
        const numbers = value.replace(/\D/g, '');

        if (numbers.length <= 2) {
            setValue(numbers);
        } else if (numbers.length <= 4) {
            const formatted = `${numbers.slice(0, 2)}:${numbers.slice(2)}`;
            if (validateTime(formatted)) {
                setValue(formatted);
            }
        }
    };

    const handleInputChange = (value: string, setValue: (val: string) => void) => {
        if (type === "time") {
            handleTimeInput(value, setValue);
        } else {
            // Для чисел просто удаляем нецифровые символы
            setValue(value.replace(/\D/g, ''));
        }
    };

    const getTitle = () => {
        switch (type) {
            case "time": return "Время";
            case "modules": return "Модули";
            case "points": return "Баллы";
            default: return "";
        }
    };

    return (
        <div className='Filter'>
            <span className="Filter__title">
                {getTitle()}
            </span>
            <div className="Filter__input">
                <input
                    type="text"
                    className="input-reset"
                    placeholder={"От"}
                    value={fromValue}
                    onChange={(e) => handleInputChange(e.target.value, setFromValue)}
                    maxLength={type === "time" ? 5 : 10}
                />
            </div>
            <span className="Filter__divider">
                -
            </span>
            <div className="Filter__input">
                <input
                    type="text"
                    className="input-reset"
                    placeholder={"До"}
                    value={toValue}
                    onChange={(e) => handleInputChange(e.target.value, setToValue)}
                    maxLength={type === "time" ? 5 : 10}
                />
            </div>
        </div>
    );
};