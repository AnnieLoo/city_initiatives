import React, { useState } from 'react';
import InitiativeCard from './InitiativeCard';

export default function Initiatives({ allInitiatives, user, levels }) {
  const [initiatives, setInitiatives] = useState(allInitiatives);
  // const [filter, setFilter] = useState()
  const levelFilter = async (e) => {
    await setInitiatives(allInitiatives.filter((el) => el.level_id == e.target.value));
  };
  return (
    <>
      {!user ? (
        <h2 className="h2 text-center">Добро пожаловать на сайт городских инициатив!</h2>
      ) : (
        <h2 className="h2 text-center">
          Здравствуйте,
          {' '}
          {user.name}
        </h2>
      )}
      <select onChange={levelFilter} name="level" className="bg-success p-2 text-dark bg-opacity-10">
        <option className='select' value="" disabled selected>Уровень инициативы</option>
        {levels?.map((el) => <option key={el.id} value={el.id}>{el.name}</option>)}
      </select>
      {/* <option onChange={()=>levelFilter(levels.id)}>{levels}</option> */}

      {initiatives?.map((el) => <InitiativeCard key={el.id} card={el} />)}
    </>
  );
}
