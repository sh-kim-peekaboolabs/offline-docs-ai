import { SVGProps } from "react";

export const WindowsIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M0 3.44L10.58 2V11.39H0V3.44ZM11.66 1.84L24 0V11.39H11.66V1.84ZM0 12.5H10.58V21.85L0 20.41V12.5ZM11.66 12.5H24V23.75L11.66 21.9V12.5Z" />
        </svg>
    );
};
