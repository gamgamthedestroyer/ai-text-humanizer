const text = 'social, cultural, and linguistic';
const regex = /\b([a-z]+), ([a-z]+),?(?: and | or )([a-z]+)\b/gi;
const commonAdjectives = ['social', 'cultural', 'linguistic', 'economic', 'political', 'physical', 'mental', 'emotional', 'local', 'national', 'international'];

const newText = text.replace(regex, (match, p1, p2, p3) => {
    console.log('MATCH:', match, '| p1:', p1, '| p2:', p2, '| p3:', p3);
    if (commonAdjectives.includes(p1.toLowerCase()) && commonAdjectives.includes(p2.toLowerCase()) && commonAdjectives.includes(p3.toLowerCase())) {
        return `${p1}, ${p3}, and ${p2}`;
    }
    return match;
});

console.log('Final:', newText);
