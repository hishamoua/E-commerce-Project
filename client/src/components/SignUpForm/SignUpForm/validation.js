// validation.js
export const validateEmail = (email) => {
    // Simple regex for email validation
    return /\S+@\S+\.\S+/.test(email);
};

export const validatePassword = (password) => {
    // Implement your password strength logic here
    return password.length > 8; // Example: simple length check
};
