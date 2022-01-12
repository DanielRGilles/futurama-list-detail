export const smush = (str) => {
    return str.replace(/\s/g, '-');
}
export const unSmush = (str) => {
    return str.replace(/'-'/, ' ')
}