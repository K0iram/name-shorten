import capitalize from './utils/capitalize'
const NAME_MAX_LENGTH = 18;

module.exports = shortenLongName = (firstName, lastName) => {
  
  //Name Arrays
  const firstNameParsed = firstName.split(' ').filter(name => name !== '') 
  const lastNameParsed = lastName.split(' ').filter(name => name !== '')
  const fullNameParsed = [...firstNameParsed, ...lastNameParsed]
  //Name Variations
  const fullName = `${firstName} ${lastName}`

  if (fullName.length < NAME_MAX_LENGTH) return fullName;

  if(fullNameParsed.length === 2){
    return `${firstName} ${lastName.charAt(0)}.`
  }

  if(firstNameParsed.length > 1 && lastNameParsed.length < 2){
    let fullLastMiddleInitial = `${firstNameParsed[0]} ${firstNameParsed[1][0]}. ${lastName}` // Mario D. Kennedy
    let fullMiddleSingleLastInitial = `${firstNameParsed[0]} ${firstNameParsed[1]} ${lastName.charAt(0)}.` // Mario Daniel K.
    let noMiddleFullLast = `${firstNameParsed[0]} ${lastName}` // Mario Kennedy

    let names = [
      fullLastMiddleInitial,
      fullMiddleSingleLastInitial,
      noMiddleFullLast
    ]
    return closetToMax(names)
  }

  if(firstNameParsed.length < 2 && lastNameParsed.length > 1){
    let fullFirstdoubleLastInitial = `${firstName} ${lastNameParsed[0][0]}. ${lastNameParsed[1][0]}.`
    let noMiddleDoubleInitial = `${firstName} ${lastNameParsed[0][0]}. ${lastNameParsed[1][0]}.`
    let noMiddleSingleInitial = `${firstName} ${lastNameParsed[0][0]}.`

    let names = [
      fullFirstdoubleLastInitial,
      noMiddleDoubleInitial,
      noMiddleSingleInitial
    ]
    return closetToMax(names)
  }

  if(fullNameParsed.length > 3){
    let fullMiddleDoubleLastInitial = `${firstNameParsed[0]} ${firstNameParsed[1]} ${lastNameParsed[0].charAt(0)}. ${lastNameParsed[1][0]}.` // Mario Daniel K. K.
    let fullLastMiddleInitial = `${firstNameParsed[0]} ${firstNameParsed[1][0]}. ${lastName}` // Mario D. Kennedy Kavouras
    let noMiddleFullLast = `${firstNameParsed[0]} ${lastName}` // Mario Kennedy Kavouras
    let fullMiddleSingleLastInitial = `${firstNameParsed[0]} ${firstNameParsed[1]} ${lastName.charAt(0)}.` // Mario Daniel K.
    let noMiddleDoubleInitial = `${firstNameParsed[0]} ${lastNameParsed[0][0]}. ${lastNameParsed[1][0]}.`
    let noMiddleSingleInitial = `${firstNameParsed[0]} ${lastNameParsed[0][0]}.`
	  let tripleInitial = `${firstNameParsed[0]} ${firstNameParsed[1][0]}. ${lastNameParsed[0][0]}. ${lastNameParsed[1][0]}.`

    let names = [
      fullLastMiddleInitial,
      fullMiddleDoubleLastInitial,
      fullMiddleSingleLastInitial,
      noMiddleFullLast,
      tripleInitial,
      noMiddleDoubleInitial,
      noMiddleSingleInitial
    ]
    return closetToMax(names)
  }
}   

const closetToMax = (arr) => {
  
  const shortNames = arr.filter(name => name.length <= NAME_MAX_LENGTH)
  const nameLengths = shortNames.map(n => n.length)
  let shortName = shortNames[nameLengths.indexOf(Math.max(...nameLengths))]

  return capitalize(shortName)
}