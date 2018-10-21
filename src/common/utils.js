import jss from 'jss';
import preset from 'jss-preset-default';

let styleCounter = 0;
jss.setup(preset());

// Accepts a style object or (prefix, style object). The prefix is prepended to rule names.
export function createStyles(...args) {
    let styles = args[0], options = {};

    if (args.length >= 2) {
        styles = args[1];
        options.generateClassName = (rule, sheet) => `${args[0]}--${rule.key}-${styleCounter++}`;
    }

    return jss.createStyleSheet(styles, options).attach().classes;
}

export function classes(...classNames) {
    return classNames.filter(Boolean).join(' ');
}