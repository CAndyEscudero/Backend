class ProductManager {
    
    constructor(){
      this.products = []
    }
    addproducts = ({ title, description, price, thumbnail, code, stock }) => {

      if (!title || !description || !price || !thumbnail || !code || !stock) {

        console.log("Todos los campos son requeridos”);");

      } if (
        title == ' ' ||
        description == ' ' ||
        price == ' ' ||
        thumbnail == ' ' ||
        code == ' ' ||
        stock == ' '
    )
        return 'Todos los campos son requeridos';
    const codeExists = this.products.some(product => product.code === code);
    if (codeExists) return 'El elemento ya existe';
    const id = this.products.length === 0 ? 1 : this.products[this.products.length - 1].id + 1;
    this.products.push({ id, title, description, price, thumbnail, code, stock });

    }
    getproducts = () => this.products;

    getProductById(id){

      const idFound = this.products.find(products=> products.code === id)
      if (idFound) {
          console.log(idFound)
      } else {
          console.log("Not Found")
      }
      
  }
    }

// Se creará una instancia de la clase “ProductManager
const productManager1 = new ProducManager();

// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(productManager1.getProducts());

// Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25
productManager1.addProduct({
  title: 'producto prueba',
  description: 'Este es un producto prueba',
  price: 200,
  thumbnail: 'Sin imagen',
  code: 'abc123',
  stock: 25
});

// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.error(productManager1.getProducts());

// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
productManager1.addProduct({
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25
});

// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
console.log(productManager1.getProductById(1));
console.error(productManager1.getProductById(3));

productManager1.addProduct({
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc',
    stock: ''
});