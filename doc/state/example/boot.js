const env = { version: 'latest' }
const arg = { x: 321, y: 543 }
const url = 'https://raw.githubusercontent.com/alyhxn/datashell/refs/heads/main/shim.js'
const src = `${url}?${new URLSearchParams(env)}#${new URLSearchParams(arg)}`
console.log(this.open ? `Loading ${src}` : `Importing ${src}`)
this.open ? document.body.append(Object.assign(document.createElement('script'), { src })) : importScripts(src)