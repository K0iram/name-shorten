const capitalize = str => {
    let parts = str.split(' ')
    return parts.map(n => `${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()}`).join(' ')
}

export default capitalize