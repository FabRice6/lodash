const _ = {
    clamp(num, low, high) {
        let result = Math.max(num, low);
        result = Math.min(result, high);
        return result;
    },

    inRange(num, start, end) {
        if (typeof end == 'undefined') {
            end = start;
            start = 0;
        }

        if (start > end) {
            let temp = end;
            end = start;
            start = temp;
        }

        const isInRange = num >= start && num < end

        return isInRange
    },

    words(phrase) {
        return phrase.split(" ");  
    },

    pad(str, len) {
        if (len <= str.length) {
            return str;
        } else {
            const paddingLeft = Math.floor(0.5 * (len - str.length));
            const paddingRight = len - str.length - paddingLeft;

            return ' '.repeat(paddingLeft) + str + ' '.repeat(paddingRight);
        }
    },

    has(obj, key) {
        const keys = Object.keys(obj)
        return keys.indexOf(key) > -1;
    },

    invert(obj) {
        const keys = Object.values(obj);
        const values = Object.keys(obj);
        let result = {};
        keys.forEach((key, i) => result[key] = values[i]);
        return result;
    },

    findKey(obj, predicate) {
        for (let key in obj) {
            let value = obj[key];
            if (predicate(value) == true) {
                return key;
            }
        }
        return undefined;
    },

    drop(arr, ind=1) {
        return arr.slice(ind);
    },

    dropWhile(arr, pred) {
        for (let i = 0; i < arr.length; i ++) {
            if (pred(arr[i], i, arr) === false) {
                return arr.slice(i);
            }
        }
        return [];
    },

    chunk(arr, size=1) {
        const newArr = [];
        for (let i = 0; i <= Math.floor(arr.length/size); i ++) {
            newArr.push(arr.splice(0, size))
        }

        if (arr.length > 0) {
            newArr.push(arr)
        }

        return newArr
    }
};





// Do not write or modify code below this line.
module.exports = _;