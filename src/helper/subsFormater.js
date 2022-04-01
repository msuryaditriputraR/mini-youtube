export default function subsFormater(num) {
    const format = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: 'K' },
        { value: 1e6, symbol: 'M' }
    ];

    const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const number = format
        .slice()
        .reverse()
        .find(number => num >= number.value);

    return number
        ? (num / number.value).toFixed(2).replace(regex, '$1') + number.symbol
        : '0';
}
