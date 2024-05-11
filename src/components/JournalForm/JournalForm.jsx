import s from './JournalForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';
import cn from 'classnames';

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
    <form className={s['journal-form']} onSubmit={addJournalItem}>
      <div>
        <input
            className={cn(s['input-title'], {
              [s['invalid']]: !formValidState.title
            })}
            type="text"
            name="title"
          />
      </div>
      <div className={s['form-row']}>
        <label htmlFor='date' className={s['form-label']}>
          <img src='/calendar.svg' alt='Иконка календаря' />
          <span>Дата</span>
        </label>
        <input
          className={`${s.input} ${formValidState.date ? '' : s.invalid}`}
          id='date'
          type="date"
          name="date"
        />
      </div>
      <div className={s['form-row']}>
        <label htmlFor='tag' className={s['form-label']}>
          <img src='/folder.svg' alt='Иконка папки' />
          <span>Метки</span>
        </label>
        <input className={s.input} id='tag' type="text" name="tag" />
      </div>
      <textarea
        className={`${s.input} ${formValidState.post ? '' : s.invalid}`}
        name="text"
        rows={10}
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
