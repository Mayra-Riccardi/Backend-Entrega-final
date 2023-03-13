const formSignup = document.getElementById("signup-form");
formSignup.addEventListener('submit', async (event) => {
  event.preventDefault();
  const fullName = formSignup[0].value;
  const email = formSignup[1].value;
  const password = formSignup[2].value;
  const phone = formSignup[3].value

  const signupResponse = await fetch('/api/auth/register', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ fullName, email, password, phone })
  });

  const response = await signupResponse.json();

  const { token } = response.data;

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