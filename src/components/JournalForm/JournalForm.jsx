import './JournalForm.css';
import Button from '../Button/Button';

const JournalForm = ({ onSubmit }) => {
  const addJournalItem = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const formProps = Object.fromEntries(formData);
    onSubmit(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" />
      <textarea name="text" />
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
