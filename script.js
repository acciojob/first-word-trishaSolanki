function firstWord(s) {
    if (s === '' || !s.includes(' ')) {
        return s;
    } else {
        const spaceIndex = s.indexOf(' ');
        return s.slice(0, spaceIndex);
    }
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));

