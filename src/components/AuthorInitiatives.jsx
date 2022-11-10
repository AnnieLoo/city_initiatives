import React from 'react';
import InitiativeCard from './InitiativeCard';

export default function AuthorInitiatives({ authorInitiatives }) {
  return (
    <div>
      {authorInitiatives?.map((el) => <InitiativeCard key={el.id} card={el} />)}
    </div>
  );
}
