import React from 'react';

export default function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg text-light">
      <div className="container-fluid">
        <a className="navbar-brand text-danger" href="/"><strong>Городские инициативы</strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Главная</a>
            </li>
            {!user ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/reg">Регистрация</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/auth">Авторизация</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/account">Личный кабинет</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/newInitiative">Создать инициативу</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/auth/logout">Выход</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
