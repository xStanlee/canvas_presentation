export function changeValue(value) {
    const newValue = value <= 250 ? value + 1 : value - 500;
    return newValue;
}

