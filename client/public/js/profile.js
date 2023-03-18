async function getCartProducts() {
    const token = localStorage.getItem('access_token');
    const profileContainer = document.getElementById("profile");

    const dataUser = await fetch('/api/users/data', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const userData = await dataUser.json();
    console.log(userData)
    const { cartId } = userData.data;
    console.log(cartId);
    const {fullName} = userData.data
    console.log(fullName)


    try {
        const response = await fetch(`/api/carts/${cartId}/products`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        const saludo = document.getElementById('saludo');
        saludo.innerHTML = `<h2>Hola ${fullName}`
        const data = await response.json();
        console.log("soy data", data)
        console.log("length", data.data.length)
        if (data.length >= 1) {
            // Procesar los datos del carrito y los productos del usuario
            const products = (data.data[0].product)
            console.log("soy", products)
            const carritoContainer = document.getElementById('carrito-container');
            carritoContainer.innerHTML = `
        <h2>Carrito</h2>
        <ul>
          <li>${products.title}: Stock ${products.stock} - Prrice ${products.price}</li>
        </ul>`
        } else {

            const carritoContainer = document.getElementById('carrito-container');
            carritoContainer.innerHTML = `
        <h2>Carrito</h2>
        <p>Vacio<p>`
        }
        // Procesar los datos del carrito y los productos del usuario
        const products = (data.data[0].product)
        console.log("soy", products)
        const carritoContainer = document.getElementById('carrito-container');
        carritoContainer.innerHTML = `
        <h2>Carrito</h2>
        <ul>
          <li>${products.title}: Stock ${products.stock} - Prrice ${products.price}</li>
        </ul>`
        
        let btn = document.getElementById('logoutBtn')
btn.addEventListener('click', evt => {
    evt.preventDefault()
    localStorage.removeItem('access_token')
    alert(`Hasta Luego ${fullName}`)
    location.href = '../'
        
    } )
}catch (error) {
        console.error(error);
    }
}
getCartProducts()

