import React, { useState } from 'react';

export default function Auth() {
  const [error, setError] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('/auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    const data = await response.json();
    if (response.ok) {
      window.location.href = '/';
    } else {
      setError(data.message);
    }
  };
  return (
    <>
      <h1 className="text-info">Авторизация</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label text-info">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label text-info">Пароль</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Войти</button>
      </form>
    </>
  );
}
