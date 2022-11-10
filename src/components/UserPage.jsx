import React from 'react';

export default function UserPage({ user }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          ФИО:
          {' '}
          {user?.name}
        </h5>
        <p className="card-text">
          Уникальный номер:
          {' '}
          {user?.id}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Электронная почта:
          {'  '}
          {user?.email}
        </li>
        <li className="list-group-item">
          Ваш округ:
          {'  '}
          {user['FederalDist.name']}
        </li>
        <li className="list-group-item">
          Ваш регион:
          {'  '}
          {user['Region.name']}
        </li>
        <li className="list-group-item">
          Ваш муниципалитет:
          {'  '}
          {user['Municipal.name']}
        </li>
      </ul>
    </div>
  );
}
