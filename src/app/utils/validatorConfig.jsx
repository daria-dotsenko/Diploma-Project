export const validatorConfig = {
    email: {
        isRequired: {
            message: "Email is required"
        },
        isEmail: {
            message: "Email entered incorrectly"
        }
    },
    password: {
        isRequired: {
            message: "Password is required"
        },
        isCapitalSymbol: {
            message: "Password must contain at least one uppercase letter"
        },
        isContainDigit: {
            message: "Password must contain at least one number"
        },
        min: {
            message: "Password must be at least 8 characters long",
            value: 8
        }
    },
    licence: {
        isRequired: {
            message:
                "You cannot use our service without confirming the license agreement"
        }
    }
};