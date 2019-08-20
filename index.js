const NAME_MAX_LENGTH = 18;

module.exports = shortenLongName = fullname => {
  if (fullname.length < NAME_MAX_LENGTH) return fullname;
  const parsedName = fullname.split(' ').filter(name => name !== '')
  const firstName = parsedName[0]
  const lastName = `${parsedName[parsedName.length - 1][0]}.`
  return `${firstName} ${lastName}`
}