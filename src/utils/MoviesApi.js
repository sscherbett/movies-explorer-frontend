const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export async function getMovies() {
  try {
    const res = await fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      return res.json();
    }
  } catch (err) {
    console.error(err);
  }
}
