import fetch from 'node-fetch'

const response = await fetch('htpps://api.escuelajs.co/api/v1/products')
const products = await response.json()

export {products}