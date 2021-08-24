const movies = document.getElementById('movies');
/* para poder armar el mesanje random de este topico se deben crear 4 objetos que se encarguen de determinar cada parte de la oración */
const subjects = {
    subject1: 'Fast & Furious Saga',
    subject2: 'Harry Potter Saga',
    subject3: 'V as Vengance',
    subject4: 'Wanted',
    subject5: 'Matrix Saga',
    subject6: 'Dracula untold',
    subject7: 'Forrest Gump',
    subject8: 'Twilight Saga',
    subject9: 'Step-up',
    subject10: 'Begin Again'
};
const verbs = {
    verb1: 'break',
    verb2: 'collect',
    verb3: 'compose',
    verb4: 'discribe',
    verb5: 'discover',
    verb6: 'feel',
    verb7: 'find',
    verb8: 'forget',
    verb9: 'do',
    verb10: 'fly'
};
const objectAdj = {
    objAdj1: 'reward',
    objAdj2: 'price',
    objAdj3: 'magic',
    objAdj4: 'schemes',
    objAdj5: 'nature',
    objAdj6: 'fight',
    objAdj7: 'unreal',
    objAdj8: 'amazing things',
    objAdj9: 'incredible',
    objAdj10: 'happiness'
};
const things = {
    thing1: 'car',
    thing2: 'world',
    thing3: 'beasts',
    thing4: 'graphics',
    thing5: 'media',
    thing6: 'scenes',
    thing7: 'package',
    thing8: 'studio',
    thing9: 'house',
    thing10: 'fireworks'
};

const sentence = () => {
    const randomSub = subjects[`subject${Math.floor(Math.random()* 10)+1}`];
    const randomVerb = verbs[`verb${Math.floor(Math.random()* 10)+1}`];
    const randomObj = objectAdj[`objAdj${Math.floor(Math.random()* 10)+1}`];
    const randomLoc = things[`thing${Math.floor(Math.random()* 10)+1}`];

    return `${randomSub} ${randomVerb} a ${randomObj} in a ${randomLoc}`
}


const resources = {
    movies,
    subjects,
    verbs,
    objectAdj,
    things,
    sentence,
}
export default resources;