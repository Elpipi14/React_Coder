export const getProducts = () =>{
    return fetch("http://localhost:8080/api/productos")
    .then((res)=> res.json())
}