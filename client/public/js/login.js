const formLogin = document.getElementById("login-form");
formLogin.addEventListener('submit', async (event) => {
  console.log('before ')
  event.preventDefault();
  console.log('after')
  const email = formLogin[0].value;
  const password = formLogin[1].value;

  const signupResponse = await fetch('/api/auth/login', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  const response = await signupResponse.json();
  console.log(response)

  const { token } = response.data;
  console.log(token)
  console.log(response.data)
  if (token) {
    localStorage.setItem('access_token', token);

    // Get the cart ID from the response
    const { cartId } = response.data.user;

    // Redirect to the cart page with the cart ID in the URL
    location.href = `/api/carts/${cartId}/products`;
  } else {
    location.replace = "/unauthorized"
  }
});