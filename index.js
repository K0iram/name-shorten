const NAME_MAX_LENGTH = 18

module.exports = nameShorten = (firstName, lastName) => {
  
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
    const fullLastMiddleInitial = `${firstNameParsed[0]} ${firstNameParsed[1][0]}. ${lastName}` // Mario D. Kennedy
    const fullMiddleSingleLastInitial = `${firstNameParsed[0]} ${firstNameParsed[1]} ${lastName.charAt(0)}.` // Mario Daniel K.
    const noMiddleFullLast = `${firstNameParsed[0]} ${lastName}` // Mario Kennedy

    const names = [
      fullLastMiddleInitial,
      fullMiddleSingleLastInitial,
      noMiddleFullLast
    ]
    return closetToMax(names)
  }

  if(firstNameParsed.length < 2 && lastNameParsed.length > 1){
    const fullFirstdoubleLastInitial = `${firstName} ${lastNameParsed[0][0]}. ${lastNameParsed[1][0]}.`
    const noMiddleDoubleInitial = `${firstName} ${lastNameParsed[0][0]}. ${lastNameParsed[1][0]}.`
    const noMiddleSingleInitial = `${firstName} ${lastNameParsed[0][0]}.`

    const names = [
      fullFirstdoubleLastInitial,
      noMiddleDoubleInitial,
      noMiddleSingleInitial
    ]
    return closetToMax(names)
  }

  if(fullNameParsed.length > 3){
    const fullMiddleDoubleLastInitial = `${firstNameParsed[0]} ${firstNameParsed[1]} ${lastNameParsed[0].charAt(0)}. ${lastNameParsed[1][0]}.` // Mario Daniel K. K.
    const fullLastMiddleInitial = `${firstNameParsed[0]} ${firstNameParsed[1][0]}. ${lastName}` // Mario D. Kennedy Kavouras
    const noMiddleFullLast = `${firstNameParsed[0]} ${lastName}` // Mario Kennedy Kavouras
    const fullMiddleSingleLastInitial = `${firstNameParsed[0]} ${firstNameParsed[1]} ${lastName.charAt(0)}.` // Mario Daniel K.
    const noMiddleDoubleInitial = `${firstNameParsed[0]} ${lastNameParsed[0][0]}. ${lastNameParsed[1][0]}.`
    const noMiddleSingleInitial = `${firstNameParsed[0]} ${lastNameParsed[0][0]}.`
	  const tripleInitial = `${firstNameParsed[0]} ${firstNameParsed[1][0]}. ${lastNameParsed[0][0]}. ${lastNameParsed[1][0]}.`

    const names = [
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

const capitalize = str => {
  let parts = str.split(' ')
  return parts.map(n => `${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()}`).join(' ')
}

const closetToMax = (arr) => {
  const shortNames = arr.filter(name => name.length <= NAME_MAX_LENGTH)
  const nameLengths = shortNames.map(n => n.length)
  let shortName = shortNames[nameLengths.indexOf(Math.max(...nameLengths))]

  return capitalize(shortName)
}
