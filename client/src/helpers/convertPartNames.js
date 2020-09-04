export const handleConvertPartName = (partName) => {
    let converted = partName.split(/(?=[A-Z])/).join(' ');
    return converted.charAt(0).toUpperCase() + converted.substr(1);
}