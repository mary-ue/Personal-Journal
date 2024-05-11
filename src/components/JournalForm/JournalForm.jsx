import './JournalForm.css';
import Button from '../Button/Button';
import { useState } from 'react';

const JournalForm = ({ onSubmit }) => {
  const [formValidState, setFormValidState] = useState({
    title: true,
    post: true,
    date: true
  });

  const addJournalItem = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const formProps = Object.fromEntries(formData);

    // simple validation
    let isFormValid = true;
    if (!formProps.title?.trim().length) {
      setFormValidState((state) => ({ ...state, title: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, title: true }));
    }
    if (!formProps.post?.trim().length) {
      setFormValidState((state) => ({ ...state, post: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, post: true }));
    }
    if (!formProps.date) {
      setFormValidState((state) => ({ ...state, date: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, date: true }));
    }

    if (!isFormValid) {
      return;
    }
    onSubmit(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input
        className={`input ${formValidState.title ? '' : 'invalid'}`}
        type="text"
        name="title"
      />
      <input
        className={`input ${formValidState.date ? '' : 'invalid'}`}
        type="date"
        name="date"
      />
      <input type="text" name="tag" />
      <textarea
        className={`input ${formValidState.post ? '' : 'invalid'}`}
        name="text"
      />
      <Button
        text="Сохранить"
        onClick={() => {
          console.log('Click');
        }}
      />
    </form>
  );
};

export default JournalForm;
