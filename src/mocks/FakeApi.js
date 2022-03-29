const products = [
  {
    name: 'Almohadon under CTRL',
    id: "1",
    price: 800, 
    category: 'textil', 
    stock: 15, 
    description: 'sarasa lorem sarasa lorem sarasa lorem sarasa lorem sarasa lorem', 
    img: 'https://i.pinimg.com/236x/54/9d/0e/549d0e5be935565094decaee06a4d725.jpg'
  },
  {
    name: 'Creative picture', 
    id: "2", 
    price: 4500, 
    category: 'decoración', 
    stock: 20, 
    description: 'sarasa lorem sarasa lorem sarasa lorem sarasa lorem sarasa lorem', 
    img: 'https://i.pinimg.com/236x/d4/53/96/d453962c530d5364420545a5c5cc5914.jpg'
  },
  {
    name: 'Tacho Star Wars', 
    id: "3", price: 1100, 
    category: 'decoración', 
    stock: 13, 
    description: 'sarasa lorem sarasa lorem sarasa lorem sarasa lorem sarasa lorem', 
    img: 'https://i.pinimg.com/236x/6d/5d/d6/6d5dd66f7caf16f917b22ce50e77ebd3.jpg'},
  {
    name: 'Poster 3D pacman', 
    id: "4", price: 8000, 
    category: 'decoración', 
    stock: 25, 
    description: 'sarasa lorem sarasa lorem sarasa lorem sarasa lorem sarasa lorem',
    img: 'https://i.pinimg.com/236x/2a/fc/dc/2afcdcb69bfda8aa8d85ec9cb3befad4.jpg'},
  {
    name: 'Etiqueta de cierre', 
    id: "5", price: 5000, 
    category: 'decoración', 
    stock: 5, 
    description: 'sarasa lorem sarasa lorem sarasa lorem sarasa lorem sarasa lorem', 
    img: 'https://i.pinimg.com/236x/fb/bc/e6/fbbce608f871118517b2d562f8f0b58e.jpg'},
  {
    name: 'Playstation pictures', 
    id: "6", price: 13000, 
    category: 'decoración', 
    stock: 7, 
    description: 'sarasa lorem sarasa lorem sarasa lorem sarasa lorem sarasa lorem', 
    img: 'https://i.pinimg.com/236x/c2/bd/cc/c2bdcc4d1499323beda3006aa978ce58.jpg'},
  {
    name: 'Reloj con lenguajes de programacion', 
    id: "7", price: 5500, 
    category: 'decoración', 
    stock: 10, 
    description: 'sarasa lorem sarasa lorem sarasa lorem sarasa lorem sarasa lorem', 
    img: 'https://i.pinimg.com/236x/1c/f8/18/1cf818c7a57db33a20140761607351d3.jpg'},
  {
    name: 'Taza coffee dev', 
    id: "8", 
    price: 1500, 
    category: 'vajilla', 
    stock: 18, 
    description: 'sarasa lorem sarasa lorem sarasa lorem sarasa lorem sarasa lorem', 
    img: 'https://i.pinimg.com/236x/44/10/f4/4410f4e658460920873f2b2a817ad521.jpg'},
  {
    name: 'The Codefather Sticker', 
    id: "9", 
    price: 450, 
    category: 'stickers', 
    stock: 45, 
    description: 'sarasa lorem sarasa lorem sarasa lorem sarasa lorem sarasa lorem', 
    img: 'https://i.pinimg.com/236x/e1/8c/1e/e18c1e3302ecc3f28cae4b002e12641f.jpg'},
  {
    name: 'Almohadon Playstation', 
    id: "10",
    price: 1000, 
    category: 'textil', 
    stock: 5, 
    description: 'sarasa lorem sarasa lorem sarasa lorem sarasa lorem sarasa lorem', 
    img: 'https://i.pinimg.com/236x/f5/66/4b/f5664b71e03aa873448f4b76578222c7.jpg'},
  {
    name: 'Almohadon Pokemon', 
    id: "11",
    price: 900, 
    category: 'textil', 
    stock: 32, 
    description: 'sarasa lorem sarasa lorem sarasa lorem sarasa lorem sarasa lorem', 
    img: 'https://i.pinimg.com/564x/de/cd/aa/decdaa4004bbe08a12ec366f7593f08e.jpg'},
  {
    name: 'Alfombra Nintendo Super Nes', 
    id: "12",
    price: 2500, 
    category: 'textil', 
    stock: 4, 
    description: 'sarasa lorem sarasa lorem sarasa lorem sarasa lorem sarasa lorem', 
    img: 'https://i.pinimg.com/236x/a7/6e/01/a76e01e226c6b752e5d50fe8cd29fee1.jpg'},
]

export const getProducts = new Promise ((resolve, reject) => {
  let condition = true
  if(condition){
    setTimeout(() => {
      resolve(products)
    }, 2000)
  }else {
    reject(`Se pudrio todo`)
  }
})