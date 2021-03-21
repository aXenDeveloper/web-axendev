import { FormEvent } from 'react';

const ContactForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="contact_content">
      <h2>Contact by form</h2>

      <div className="box padding">
        <form action="https://files.axendev.net/mail.php" method="POST" onSubmit={handleSubmit}>
          <ul className="form">
            <li className="form_input form_input_text">
              <input type="text" id="name" name="name" className="input input_text" placeholder=" " required />
              <label htmlFor="name" className="input_label">
                Wpisz tutaj swoją nazwę
              </label>
            </li>

            <li className="form_input form_input_text">
              <input type="email" id="email" name="email" className="input input_text" placeholder=" " required />
              <label htmlFor="email" className="input_label">
                Email
              </label>
            </li>

            <li className="form_input form_input_text">
              <input type="text" id="title" name="title" className="input input_text" placeholder=" " required />
              <label htmlFor="title" className="input_label">
                Title
              </label>
            </li>

            <li className="form_input form_input_textarea">
              <textarea id="text" name="text" className="input input_textarea" required></textarea>
              <label htmlFor="text" className="input_label">
                Treść
              </label>
            </li>
          </ul>

          <button type="submit" className="button button_medium button_primary">
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
