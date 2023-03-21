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
    const { fullName } = userData.data
    console.log(fullName)

    console.log(token)
    try {
        const response = await fetch(`/api/carts/${cartId}/products`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const saludo = document.getElementById('saludo');
        saludo.innerHTML = `<h2 style="color: white; font-weight: 400; display: flex; justify-content: center; padding-top: 50px; font-size: xxx-large;">Bienvenida ${fullName}</h2>
        <img style="width: 8%; min-width: 100px; margin-left: 46.5%;
        margin-top: 1%;" src="/assets/img/logo.png" alt="YOU NEED SUSHI">`
        const data = await response.json();
        console.log("soy data", data)
        console.log("length", data.data.length)

        if (data.length >= 1) {
            // Procesar los datos del carrito y los productos del usuario
            const products = (data.data[0].product)
            console.log("soy", products)
            const carritoContainer = document.getElementById('carrito-container');
            carritoContainer.innerHTML = `
        <h2 style="color: white;">Carrito</h2>
        <ul>
          <li style="color: white;">${products.title}: Stock ${products.stock} - Prrice ${products.price}</li>
        </ul>`
        } else {

            const carritoContainer = document.getElementById('carrito-container');
            carritoContainer.innerHTML = `
        <h2 style="color: white; display: flex;
        justify-content: center; margin-top: 10%;">Carrito Vacio</h2>
        <button type="button" class="btn btn-primary btn-sm" style="margin-left: 48.5%;
        margin-top: 5%;">Store</button>
        <button id="logoutBtn" type="button" class="btn btn-danger btn-sm" style="margin-left: 48.3%;
        margin-top: 1%;">Logout</button>`
        }

        let btn = document.getElementById('logoutBtn')
        btn.addEventListener('click', evt => {
            evt.preventDefault()
            localStorage.removeItem('access_token')
            Swal.fire({
                title: `Hasta Pronto ${fullName}!`,
                icon: 'success',
                showCancelButton: false,
                confirmButtonText: 'OK',
                willClose: () => {
                    location.href = '../'
                }
            })
        })

    } catch (error) {
        console.error(error);
    }
}
getCartProducts()

