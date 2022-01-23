export const emailValidator = (email) => email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g);
export const validCode = (typeCode, code) => {
    const regexBinary = /[2-9]|\s|[a-zA-Z]/gm;
    const regexDecimal = /[a-zA-z]|\s/gm;

    if (typeCode === "binary")
        return regexBinary.test(code.toString());

    if (typeCode === "decode")
        return regexDecimal.test(code.toString());

    return false;

};
