import React from 'react';

export default function NewInitiativeForm() {
  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('/newInitiative', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });

    if (response.ok) {
      window.location.href = '/';
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">НАЗВАНИЕ ИНИЦИАТИВЫ</span>
        <input name="name" type="text" className="form-control" placeholder="введите название" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div className="input-group">
        <span className="input-group-text">ОПИСАНИЕ ИНИЦИАТИВЫ</span>
        <textarea name="description" className="form-control" aria-label="With textarea" />
      </div>
      <div>
        <br />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">СРОК ОКОНЧАНИЯ ГОЛОСОВАНИЯ:</span>
        <input name="term" type="text" className="form-control" placeholder="введитите дату в формате ДД.ММ.ГГГГ" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <button type="submit" className="btn btn-primary">Отправить</button>
    </form>
  );
}
