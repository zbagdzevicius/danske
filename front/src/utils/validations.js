const isRequired = value => {
    return value || typeof value === 'number'
        ? undefined
        : 'Value is required';
};

const isLengthBetween = (min, max) => value => {
    return value && (value.length < min || value.length > max)
        ? `Value must be from ${min} to ${max} characters long`
        : undefined;
};

const isAlphaNumeric = value => {
    return value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Value must only contain alphanumeric characters'
        : undefined;
};

const hasWhiteSpaces = value => {
    return value && /\s/.test(value)
        ? 'No whitespaces allowed'
        : undefined;
};

export default {
    isRequired,
    isLengthBetween,
    isAlphaNumeric,
    hasWhiteSpaces,
};
