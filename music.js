const music = document.getElementById('music');
/* para poder armar el mesanje random de este topico se deben crear 4 objetos que se encarguen de determinar cada parte de la oración */
const subjects = {
    subject1: 'The Beatles',
    subject2: 'Led Zeppelin',
    subject3: 'Maroon 5',
    subject4: 'Guns & Roses',
    subject5: 'AFI',
    subject6: 'Justin Biber',
    subject7: 'Bad Bunny',
    subject8: 'Jason Derulo',
    subject9: 'Billy Joel',
    subject10: 'Mark Anthony'
};
const verbs = {
    verb1: 'fight',
    verb2: 'apologise',
    verb3: 'rage',
    verb4: 'attack',
    verb5: 'belive',
    verb6: 'buy',
    verb7: 'clean',
    verb8: 'collect',
    verb9: 'cry',
    verb10: 'dance'
};
const objectAdj = {
    objAdj1: 'pizza',
    objAdj2: 'car',
    objAdj3: 'boxer',
    objAdj4: 'wall',
    objAdj5: 'guitar',
    objAdj6: 'drum',
    objAdj7: 'beer',
    objAdj8: 'table',
    objAdj9: 'phone',
    objAdj10: 'belt'
}
const locations = {
    location1: 'Bar',
    location2: 'Stadium',
    location3: 'Club',
    location4: 'bathroom',
    location5: 'hotel',
    location6: 'coffe shop',
    location7: 'restaurant',
    location8: 'parking',
    location9: 'house',
    location10: 'pool'
};

const sentence = () => {
    const randomSub = subjects[`subject${Math.floor(Math.random()* 10)+1}`];
    const randomVerb = verbs[`verb${Math.floor(Math.random()* 10)+1}`];
    const randomObj = objectAdj[`objAdj${Math.floor(Math.random()* 10)+1}`];
    const randomLoc = locations[`location${Math.floor(Math.random()* 10)+1}`];

    return `${randomSub} ${randomVerb} a ${randomObj} in a ${randomLoc}`
}


const resources = {
    music,
    subjects,
    verbs,
    objectAdj,
    locations,
    sentence,
}
export default resources;