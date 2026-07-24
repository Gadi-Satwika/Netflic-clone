export async function signIn(email, password) {
  const response = await fetch('https://serverless-api-teal.vercel.app/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  let data;
  try {
    data = await response.json();
  } catch (e) {
    throw new Error('Invalid response from authentication server.');
  }

  if (!response.ok) {
    // Throw an Error using message or error from the response body
    const errorMessage = data.message || data.error || 'Invalid email or password';
    throw new Error(errorMessage);
  }

  return data;
}
