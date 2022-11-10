import React from 'react';
import InitiativeCard from './InitiativeCard';

export default function Initiatives({ allInitiatives, user }) {
  return (
    <>
      {!user ? (
        <h2 className="fst-italic">Добро пожаловать на сайт городских инициатив!</h2>
      ) : (
        <h2 className="fst-italic">
          Здравствуйте,
          {' '}
          {user.name}
        </h2>
      )}

      {allInitiatives?.map((el) => <InitiativeCard key={el.id} card={el} />)}
    </>
  );
}
