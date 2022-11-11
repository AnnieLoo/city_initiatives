import React from 'react';

export default function UserPage({ user }) {
  return (
    <div className="card bg-light p-2 text-dark bg-opacity-50">
      <div className="card-body">
        <h5 className="card-title">
          ФИО:
          {' '}
          {user?.name}
        </h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-light p-2 text-dark bg-opacity-50">
          Электронная почта:
          {'  '}
          {user?.email}
        </li>
        <li className="list-group-item bg-light p-2 text-dark bg-opacity-50">
          Ваш округ:
          {'  '}
          {user['FederalDist.name']}
        </li>
        <li className="list-group-item bg-light p-2 text-dark bg-opacity-50">
          Ваш регион:
          {'  '}
          {user['Region.name']}
        </li>
        <li className="list-group-item bg-light p-2 text-dark bg-opacity-50">
          Ваш муниципалитет:
          {'  '}
          {user['Municipal.name']}
        </li>
      </ul>
    </div>
  );
}
