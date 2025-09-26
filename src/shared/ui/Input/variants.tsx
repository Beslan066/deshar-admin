import { cva } from "class-variance-authority";

export const inputVariants = cva('Input', {
    variants: {
        variant: {
            primary: 'primary',
            secondary: 'secondary',
        },
        fullWidth: {
            true: 'fullWidth',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})
