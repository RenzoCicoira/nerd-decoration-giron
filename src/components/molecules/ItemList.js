import Item from '../atoms/Item'

const products = [
  {name: 'Almohadon under CTRL', id: "2", price: 800, category: 'Textil', img: 'assets/almohadonUnderCTRL.jfif'},
  {name: 'Creative picture', id: "1", price: 4500, category: 'Decoración', img: 'assets/creativePicture.jfif'},
  {name: 'Alfombra Nintendo Super Nes', id: "3", price: 2500, category: 'Textil', img: 'assets/alfombraNintendoSuperNes.jfif'},
  {name: 'Poster 3D pacman', id: "4", price: 8000, category: 'Decoración', img: 'assets/pacmanPicture.jfif'},
  {name: 'Etiqueta de cierre', id: "5", price: 5000, category: 'Decoración', cantidad: 20, img: 'assets/etiquetaDeCierreDecoracion.jfif'},
  {name: 'Playstation pictures', id: "6", price: 13000, category: 'Decoración', img: 'assets/playstationPictures.png'},
  {name: 'Reloj con lenguajes de programacion', id: "7", price: 5500, category: 'Decoración', img: 'assets/relojConLenguajes.jfif'},
  {name: 'Taza coffee dev', id: "8", price: 1500, category: 'Vajilla', img: 'assets/tazaParaDesarrollador.jfif'},
  {name: 'The Codefather Sticker', id: "9", price: 450, category: 'Stickers', img: 'assets/theCodeFatherSticker.jfif'},
  {name: 'Almohadon Playstation', id: "10", price: 1000, category: 'Textil', img: 'assets/almohadonPlaystation.jfif'},
  {name: 'Almohadon Pokemon', id: "11", price: 900, category: 'Textil', img: 'assets/almohadonPokemon.jfif'},
  {name: 'Tacho Star Wars', id: "12", price: 1100, category: 'Decoración', img: 'assets/tachoStarWars.jfif'}
]

const ItemList = () => {
  return (
    <div>
        {products.map((item) => {
          return  (
            <Item 
            name={item.name} 
            category={item.category} 
            price={item.price} 
            img={item.img} 
            key={item.id}
            />
          )
        })}
    </div>
  )
}

export default ItemList