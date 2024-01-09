type EmailOrPhone = string;
type ValidationResult = 'This is a valid email.' | 'This is a valid phone number.' | 'Invalid format. Please enter a valid email or phone number.';

export function isValidEmailOrPhone(emailOrPhone: EmailOrPhone): ValidationResult {
    const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern: RegExp = /^\d{10}$/;

    if (emailPattern.test(emailOrPhone)) {
        return 'This is a valid email.';
    } else if (phonePattern.test(emailOrPhone)) {
        return 'This is a valid phone number.';
    } else {
        return 'Invalid format. Please enter a valid email or phone number.';
    }
}

