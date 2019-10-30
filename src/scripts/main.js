// Arrays for each label

// Funk and rap label
jumpstop = []

// Country and bluegrass label
chatten = []

// Pop label
polar = []

/* Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array. */

// Funk Factory function
const createFunkArtist = (name, age, genre) => {
    const artist = {
        name: name,
        age: age, 
        genre: genre
    }
    jumpstop.push(artist)
    return jumpstop
}
console.log(createFunkArtist('Dre Funkz', 25, 'Funkz'))
// Rap Factory function
const createRapArtist = (name, age, genre) => {
    const artist = {
        name: name,
        age: age, 
        genre: genre
    }
    jumpstop.push(artist)
    return jumpstop
}


// Country Factory function


// Bluegrass Factory function


// Pop Factory function


// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old 