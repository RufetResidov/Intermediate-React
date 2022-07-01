import React, { useReducer, useState } from 'react';
import { data } from '../../../data';
import Modal from './Modal';
// reducer function
import { reducer } from './reducer'
const initialState = {
  people: data,
  showModal: false,
  modalContext: '',
}
const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getDate().toString, name }
      dispatch({ type: "ADD_ITEM", payload: newItem })
      setName('')
    }
    else {
      dispatch({ type: "ERROR" })
    }
  }
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" })
  }
  return (
    <section>
      {state.showModal && <Modal modalContext={state.modalContext} closeModal={closeModal} />}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h2>{person.name}</h2>
          </div>
        )
      })}
    </section>
  );
};

export default Index;
