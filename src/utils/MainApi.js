const BASE_URL = 'http://localhost:3001';
// const BASE_URL = 'https://api.scherbett.nomoredomainsicu.ru';

export async function register(name, email, password) {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.json());
    }
  } catch (err) {
    console.error(err);
  }
}

export async function login(email, password) {
  try {
    const res = await fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.json());
    }
  } catch (err) {
    console.error(err);
  }
}

export async function getCurrentUser(jwt) {
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.json());
    }
  } catch (err) {
    console.error(err);
  }
}

export async function editProfileInfo(name, email) {
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({ name, email }),
    });
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.json());
    }
  } catch (err) {
    console.error(err);
  }
}

export async function saveMovie(movie) {
  try {
    const res = await fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify(movie),
    });
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.json());
    }
  } catch (err) {
    console.error(err);
  }
}

export async function deleteMovie(movie) {
  try {
    const res = await fetch(`${BASE_URL}/movies/${movie._id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
    });
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.json());
    }
  } catch (err) {
    console.error(err);
  }
}

export async function getSavedMovies() {
  try {
    const res = await fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
    });
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.json());
    }
  } catch (err) {
    console.error(err);
  }
}