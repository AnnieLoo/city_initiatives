import React, { useState } from 'react';

export default function Reg({ federalDists, regions, municipals }) {
  const [error, setError] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('/auth/reg/', {
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
      <h1>Регистрация</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">ФИО</label>
          <input type="text" name="name" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <select name="federalDist" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option value="" disabled selected>Федеральный округ</option>
          {federalDists?.map((el) => <option key={el.id} value={el.id}>{el.name}</option>)}
        </select>
        <select name="region" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option value="" disabled selected>Регион</option>
          {regions?.map((el) => <option key={el.id} value={el.id}>{el.name}</option>)}
        </select>
        <select name="municipal" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option value="" disabled selected>Муниципалитет</option>
          {municipals?.map((el) => <option key={el.id} value={el.id}>{el.name}</option>)}
        </select>
        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
      </form>
    </>
  );
}
