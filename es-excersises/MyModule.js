export default function myFunc(x, y, ...rest) {
    return `Sum: ${x + y}.\n${rest.map((el, i) => `rest value ${i} is a:${el.constructor.name}`).join(",\n")}`
};