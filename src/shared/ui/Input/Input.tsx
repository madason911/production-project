import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readdOnly'>;

interface InputProps extends HTMLInputProps {
    value?: string | number;
    className?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo(({
    className, onChange, value, type = 'text', placeholder, autofocus, readonly, ...otherProps
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(autofocus || false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e.target.selectionStart || 0);
    };

    const isCaretVisible = isFocused && !readonly;

    const mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
            <div className={cls.caretWrapper}>
                <input
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible
                    ? (
                        <span
                            className={cls.caret}
                            style={{ left: `${caretPosition}ch` }}
                        />
                    )
                    : null}
            </div>
        </div>
    );
});
