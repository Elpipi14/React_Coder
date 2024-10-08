const products = [
  {
    "id": 1,
    "name": "Milanesa de Carne con Puré",
    "description": "Deliciosa milanesa de carne acompañada con un cremoso puré de papas.",
    "price": 350,
    "stock": 25,
    "image": "../assets/products/1",
    "available": true,
    "category": "Carnes"
  },
  {
    "id": 2,
    "name": "Milanesa de Pollo con Ensalada",
    "description": "Milanesa de pollo crujiente con una fresca ensalada de lechuga, tomate y cebolla.",
    "price": 300,
    "stock": 18,
    "image": "https://example.com/milanesa_pollo_ensalada.jpg",
    "available": true,
    "category": "Carnes"
  },
  {
    "id": 3,
    "name": "Carne al Horno con Papas",
    "description": "Tierno corte de carne al horno con papas asadas y condimentos especiales.",
    "price": 500,
    "stock": 20,
    "image": "https://example.com/carne_horno_papas.jpg",
    "available": true,
    "category": "Carnes"
  },
  {
    "id": 4,
    "name": "Pollo al Horno con Ensalada",
    "description": "Pollo al horno jugoso acompañado con ensalada fresca de estación.",
    "price": 450,
    "stock": 15,
    "image": "https://example.com/pollo_horno_ensalada.jpg",
    "available": false,
    "category": "Carnes"
  },
  {
    "id": 5,
    "name": "Lasagna Clásica",
    "description": "Lasagna de carne con capas de pasta, queso, y salsa de tomate casera.",
    "price": 400,
    "stock": 12,
    "image": "https://example.com/lasagna_clasica.jpg",
    "available": true,
    "category": "Pastas"
  },
  {
    "id": 6,
    "name": "Tarta de Verduras",
    "description": "Tarta casera de espinacas, acelga y queso con masa integral.",
    "price": 250,
    "stock": 22,
    "image": "https://example.com/tarta_verduras.jpg",
    "available": true,
    "category": "Verduras"
  },
  {
    "id": 7,
    "name": "Ñoquis con Salsa Bolognesa",
    "description": "Ñoquis de papa con salsa bolognesa de carne y tomate.",
    "price": 320,
    "stock": 30,
    "image": "https://example.com/noquis_bolognesa.jpg",
    "available": false,
    "category": "Pastas"
  },
  {
    "id": 8,
    "name": "Sopa de Verduras",
    "description": "Sopa casera de verduras variadas, perfecta para un día frío.",
    "price": 200,
    "stock": 35,
    "image": "https://example.com/sopa_verduras.jpg",
    "available": true,
    "category": "Verduras"
  },
  {
    "id": 9,
    "name": "Fideos con Salsa",
    "description": "Fideos al dente con una suave salsa de crema y queso.",
    "price": 370,
    "stock": 17,
    "image": "https://example.com/fideos_alfredo.jpg",
    "available": true,
    "category": "Pastas"
  },
  {
    "id": 10,
    "name": "Pollo grillado con Ensalada",
    "description": "Pollo a la parrilla con una ensalada mixta de vegetales frescos.",
    "price": 480,
    "stock": 10,
    "image": "https://example.com/pollo_parrilla_ensalada.jpg",
    "available": false,
    "category": "Carnes"
  },
  {
    "id": 11,
    "name": "Empanadas de Carne",
    "description": "Empanadas de carne jugosa, perfectas como plato principal o acompañamiento.",
    "price": 180,
    "stock": 40,
    "image": "https://example.com/empanadas_carne.jpg",
    "available": true,
    "category": "Carnes"
  },
  {
    "id": 12,
    "name": "Hamburguesa Completa",
    "description": "Hamburguesa casera con queso, lechuga, tomate, cebolla y papas fritas.",
    "price": 420,
    "stock": 25,
    "image": "https://example.com/hamburguesa_completa.jpg",
    "available": true,
    "category": "Carnes"
  },
  {
    "id": 13,
    "name": "Ensalada César con Pollo",
    "description": "Ensalada César clásica con trozos de pollo grillado y aderezo César.",
    "price": 300,
    "stock": 16,
    "image": "https://example.com/ensalada_cesar_pollo.jpg",
    "available": true,
    "category": "Ensaladas"
  },
  {
    "id": 14,
    "name": "Pizza Margarita",
    "description": "Pizza de masa fina con salsa de tomate, mozzarella y albahaca fresca.",
    "price": 600,
    "stock": 8,
    "image": "https://example.com/pizza_margarita.jpg",
    "available": false,
    "category": "Pizzas"
  },
  {
    "id": 15,
    "name": "Ravioles con Salsa de Tomate",
    "description": "Ravioles caseros de ricota y espinaca con salsa de tomate natural.",
    "price": 380,
    "stock": 14,
    "image": "https://example.com/ravioles_tomate.jpg",
    "available": true,
    "category": "Pastas"
  },
  {
    "id": 16,
    "name": "Bife de Chorizo con Pure",
    "description": "Bife de chorizo a la parrilla acompañado de papas fritas crujientes.",
    "price": 550,
    "stock": 10,
    "image": "https://example.com/bife_chorizo_papas.jpg",
    "available": true,
    "category": "Carnes"
  },
  {
    "id": 17,
    "name": "Polenta con Tuco",
    "description": "Polenta cremosa acompañada con salsa de tomate y carne molida.",
    "price": 280,
    "stock": 30,
    "image": "https://example.com/polenta_tuco.jpg",
    "available": true,
    "category": "Pastas"
  },
  {
    "id": 18,
    "name": "Tarta de Atún",
    "description": "Tarta casera de atún con cebolla y pimientos, ideal para un almuerzo ligero.",
    "price": 350,
    "stock": 20,
    "image": "https://example.com/tarta_atun.jpg",
    "available": true,
    "category": "Pescados"
  },
  {
    "id": 19,
    "name": "Guiso de Lentejas",
    "description": "Guiso de lentejas con chorizo, ideal para los días más frescos.",
    "price": 400,
    "stock": 22,
    "image": "https://example.com/guiso_lentejas.jpg",
    "available": false,
    "category": "Guisos"
  },
  {
    "id": 20,
    "name": "Wrap de Pollo",
    "description": "Wrap de pollo con hojas verdes, ideal para los días más calurosos.",
    "price": 400,
    "stock": 22,
    "image": "https://example.com/wrap_pollo.jpg",
    "available": false,
    "category": "Carnes"
  }
]

export const getProducts = () =>{
  return new Promise ((res, rej)=>{
     setTimeout(()=>{
      res(products)
     }, 2000)
  })
}