// const formLogin = document.getElementById("login-form");
// formLogin.addEventListener('submit', async (event) => {
//   console.log('before ')
//   event.preventDefault();
//   console.log('after')
//   const email = formLogin[0].value;
//   const password = formLogin[1].value;

//   const signupResponse = await fetch('/api/auth/login', {
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email, password })
//   });

//   const response = await signupResponse.json();
//   console.log(response)

//   const { token } = response.data;
//   console.log(token)
//   console.log(response.data)
//   if (token) {
//     localStorage.setItem('access_token', token);
//     location.replace('../login.html')
    

//     // Get the cart ID from the response
//     const { cartId } = response.data.user;

//     // Redirect to the cart page with the cart ID in the URL
//     location.href = `/api/carts/${cartId}/products`;
//   } else {
//     location.replace = "/unauthorized"
//   }
// });

const formLogin = document.getElementById("login-form");
formLogin.addEventListener('submit', async (event) => {
  console.log('before ')
  event.preventDefault();
  console.log('after')
  const email = formLogin[0].value;
  const password = formLogin[1].value;

  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (response.ok) {
    const response2 = await response.json();
    const { token } = response2.data;
    console.log(token)
    console.log(response2.data)
    localStorage.setItem('access_token', token);

    const authToken = `Bearer ${token}`;

    const { cartId } = response2.data.user;
    const cartResponse = await fetch(`/api/carts/${cartId}/products`, {
      headers: {
        'Authorization': authToken
      }
    });
    
   
    if (cartResponse.ok) {
      console.log(cartId)
      window.location.replace(`/api/carts/${cartId}/products`);

    } else {
      console.error('Error al obtener el carrito del usuario');
    }
  } else {
    console.error('Error de inicio de sesión');
  }
})
