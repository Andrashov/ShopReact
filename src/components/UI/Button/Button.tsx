import {
  ButtonHTMLAttributes,
  memo,
  PropsWithChildren,
  ReactNode,
} from "react";
import ButtonBase from "../ButtonBase/ButtonBase";
import classNames from "classnames";
import styles from "./Button.module.scss";
// import bac

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "large" | "medium" | "small" | "x"; // пропсы для размеров
  startIcon?: string;
  endIcon?: ReactNode;
  animationDuration?: number;
}

export const Button = memo<PropsWithChildren<ButtonProps>>(
  ({
    children,
    variant,
    startIcon,
    endIcon,
    className,
    animationDuration,
    ...props
  }) => {
    return (
      <ButtonBase
        data-testid="button"
        ripple
        animationDuration={animationDuration}
        className={classNames(
          styles.button,
          variant === "large" && styles.large,
          variant === "medium" && styles.medium,
          variant === "small" && styles.small,
          className
        )}
        {...props}
      >
        {startIcon && (
          <span className={styles.startIcon}>
            <svg
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.74058 20.2394C6.74058 21.1845 5.97449 21.9505 5.02947 21.9505C4.08445 21.9505 3.31836 21.1845 3.31836 20.2394C3.31836 19.2944 4.08445 18.5283 5.02947 18.5283C5.97449 18.5283 6.74058 19.2944 6.74058 20.2394Z"
                stroke="white"
                stroke-width="2.07778"
              />
              <path
                d="M19.5739 20.2394C19.5739 21.1845 18.8078 21.9505 17.8628 21.9505C16.9178 21.9505 16.1517 21.1845 16.1517 20.2394C16.1517 19.2944 16.9178 18.5283 17.8628 18.5283C18.8078 18.5283 19.5739 19.2944 19.5739 20.2394Z"
                stroke="white"
                stroke-width="2.07778"
              />
              <path
                d="M2.53889 8.28835C2.53889 7.44458 3.2229 6.76057 4.06667 6.76057H19.2833V12.9388C19.2833 15.5767 16.8255 17.5263 14.2569 16.9258L5.70132 14.9258C3.84901 14.4928 2.53889 12.8411 2.53889 10.9388V8.28835Z"
                stroke="white"
                stroke-width="2.07778"
              />
              <path
                d="M6.63281 20.2661L16.0439 20.2661"
                stroke="white"
                stroke-width="2.07778"
              />
              <path
                d="M19.2227 7.37402L19.713 2.96127C19.7817 2.3423 20.3049 1.87402 20.9277 1.87402H22.8893"
                stroke="white"
                stroke-width="2.07778"
              />
            </svg>
          </span>
        )}
        <p className={styles.text}>
          {children}
          </p>
      </ButtonBase>
    );
  }
);

Button.displayName = "Button";
export default Button;
