const tasks = new Map([
    ['sich interessieren', 'für'],
    ['Lust haben', 'auf'],
    ['sprechen', 'über'],
    ['träumen', 'von'],
    ['zufrieden sein', 'mit'],
    ['sich ärgern', 'über'],
    ['sich beschweren', 'über'],
    ['sich freuen (jetzt)', 'über'],
    ['sich freuen (später)', 'auf'],
    ['denken', 'an'],
    ['erinnern sich', 'an'],
    ['verabreden', 'mit'],
    ['das Interesse haben', 'an'],
    ['Wo? (Ort)', 'in'],
    ['Wo? (Person/Aktivität)', 'bei'],
    ['Wohin? (Ort)', 'in/nach'],
    ['Wohin? (Person/Aktivität)', 'zu'],
    ['Woher? (Ort)', 'aus'],
    ['Woher? (Person/Aktivität)','von'],
    ['der (nett) Mann','nette'],
    ['die (nett) Frau','nette'],
    ['das (nett) Kind','nette'],
    ['die (nett) Leute','netten'],
    ['den (nett) Mann','netten'],
    ['dem (nett) Mann','netten'],
  ]);

function getRandomKey() {
    let keys = Array.from(tasks.keys());
    return keys[Math.floor(Math.random() * keys.length)];
}

function setNext() {
    let next = getRandomKey();
    document.getElementById("text").innerText = next;
    document.getElementById("answer").value = '';
}

function check() {
    let key = document.getElementById("text").innerText;
    let answer = document.getElementById("answer").value;

    console.log(key)
    console.log(answer)

    if (tasks.get(key) === answer) {
        setNext();
    } else {
        alert("Wrong");
    }
}
