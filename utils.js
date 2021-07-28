export const partialRight = fn => (...parts) => (...args) => fn.apply(null, [...args, ...parts])
