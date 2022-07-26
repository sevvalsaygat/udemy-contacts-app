import { useState, useEffect } from 'react'

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);

    // setForm({ fullname: "", phone_number:"" });  Inputa ekleme yapıldıktan sonra içini temizler.
    // setForm(initialFormValues);  Inputa ekleme yapıldıktan sonra içini temizler.
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name='fullname'
          placeholder='Fullname'
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input name='phone_number'
          placeholder='Phone Number'
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>

      <br />
      <div className='btn'>
        <button>Add</button>
      </div>
    </form>
  )
}

export default Form