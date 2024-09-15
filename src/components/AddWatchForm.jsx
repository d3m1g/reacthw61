import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Errors from './Errors';

function AddWatchForm(props) {

 const { addWatchHandler } = props;
 const emptyWatch = { id: undefined, name: '', utcOffset: 0 };

 const [form, setForm] = React.useState(emptyWatch);
 const [errors, setErrors] = React.useState([]);

 const handleSubmit = evt => {
  evt.preventDefault();
  let errs = [];

  if (!form.name || !form.name === '') {
   errs.push('Не указано наименование.');
  }
  setErrors(errs);

  if (errs.length === 0) {
   const watch = { id: nanoid(), name: form.name, utcOffset: parseFloat(form.utcOffset) };
   addWatchHandler(watch);
   setForm(emptyWatch);
  }
 };

 const handleChange = ({ target }) => {
  const name = target.name;
  const value = target.value;
  setForm(prevForm => ({ ...prevForm, [name]: value }));
 }

 return (
  <React.Fragment>
   <Errors errors={errors} />
   <form className="AddWatchForm" onSubmit={handleSubmit}>
    <div className="control">
     <label htmlFor="name">Название</label>
     <input type="text"
      placeholder=""
      id="name"
      name="name"
      value={form.name}
      onChange={handleChange} />
    </div>
    <div className="control">
     <label htmlFor="utc-offset">Временная зона</label>
     <input type="number"
      id="utcOffset"
      name="utcOffset"
      value={form.utcOffset}
      onChange={handleChange} />
    </div>
    <div className="control">
     <button type="submit">Добавить</button>
    </div>
   </form>
  </React.Fragment>
 );
}

AddWatchForm.propTypes = {
 addWatchHandler: PropTypes.func
}

export default AddWatchForm;