const food = document.getElementById('food');
/* para poder armar el mesanje random de este topico se deben crear 4 objetos que se encarguen de determinar cada parte de la oración */
const subjects = {
    subject1: 'pasta',
    subject2: 'pizza',
    subject3: 'meat',
    subject4: 'chicken',
    subject5: 'brownies',
    subject6: 'salad',
    subject7: 'ceral',
    subject8: 'milk',
    subject9: 'soda',
    subject10: 'gummies'
};
const verbs = {
    verb1: 'break',
    verb2: 'taste',
    verb3: 'was',
    verb4: 'feel',
    verb5: 'look',
    verb6: 'maybe',
    verb7: 'shows',
    verb8: 'don´t',
    verb9: 'arrive',
    verb10: 'hurt'
};
const objectAdj = {
    objAdj1: 'great',
    objAdj2: 'good',
    objAdj3: 'great',
    objAdj4: 'awfull',
    objAdj5: 'raw',
    objAdj6: 'overcooked',
    objAdj7: 'late',
    objAdj8: 'nasty',
    objAdj9: 'incredible',
    objAdj10: 'dedication'
};
const things = {
    thing1: 'floor',
    thing2: 'table',
    thing3: 'window',
    thing4: 'car',
    thing5: 'phone',
    thing6: 'dish',
    thing7: 'cup',
    thing8: 'glass',
    thing9: 'grass',
    thing10: 'trash'
};

const sentence = () => {
    const randomSub = subjects[`subject${Math.floor(Math.random()* 10)+1}`];
    const randomVerb = verbs[`verb${Math.floor(Math.random()* 10)+1}`];
    const randomObj = objectAdj[`objAdj${Math.floor(Math.random()* 10)+1}`];
    const randomLoc = things[`thing${Math.floor(Math.random()* 10)+1}`];

    return `The ${randomSub} ${randomVerb} ${randomObj} in the ${randomLoc}`
}


const resources = {
    food,
    subjects,
    verbs,
    objectAdj,
    things,
    sentence,
}
export default resources;