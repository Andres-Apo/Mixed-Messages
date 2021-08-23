// const music = document.getElementById('musicLabel');
/* para poder armar el mesanje random de este topico se deben crear 4 objetos que se encarguen de determinar cada parte de la oración */
const subject = {
    groups: {
        band1: 'The Beatles',
        band2: 'Led Zeppelin',
        band3: 'Maroon 5',
        band4: 'Guns & Roses',
        band5: 'AFI'
    },
    musicians: {
        musician1: 'Justin Biber',
        musician2: 'Bad Bunny',
        musician3: 'Jason Derulo',
        musician4: 'Billy Joel',
        musician5: 'Mark Anthony',
    }
};
const verb = {
    verb1: 'answer',
    verb2: 'apologise',
    verb3: 'arrive',
    verb4: 'attack',
    verb5: 'belive',
    verb6: 'buy',
    verb7: 'clean',
    verb8: 'collect',
    verb9: 'come',
    verb10: 'dance'
};
const object = {
    object1: 'pizza',
    object2: 'car',
    object3: 'boxers',
    object4: 'wall',
    object5: 'guitar',
    Adjective1: 'creative',
    Adjective2: 'ordinary',
    Adjective3: 'beatiful',
    Adjective4: 'lost',
    Adjective5: 'happy'
}
const location = {
    location1: 'Bolivia',
    location2: 'Afganistan',
    location3: 'New York',
    location4: 'Spain',
    location5: 'Argentina',
    location6: 'Indonesia',
    location7: 'Colombia',
    location8: 'France',
    location9: 'Miami',
    location10: 'Buenos Aires'
};
console.log(object[`Adjective${Math.floor(Math.random()* 10)}`])

const sentence = () => {
    randomSub = Math.random();
    randomAdj = Math.random();
    randomObj = Math.random();
    randomLoc = Math.random();
}

// export {music, tryIt};