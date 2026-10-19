const startFunc = ({ inValue, inDirective }) => {
    const localValue = inValue;
    const localDirective = inDirective;

    // console.log("------- :", localValue, localDirective);

    if (localDirective?.valueKey && localValue && typeof localValue === "object") {
        return localValue[localDirective.valueKey];
    };

    return localValue;
};

export default startFunc;
