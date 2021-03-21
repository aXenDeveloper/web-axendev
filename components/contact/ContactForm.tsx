const ContactForm = () => {
  return (
    <div className="contact_content">
      <h2>Contact by form</h2>

      <div className="box padding">
        <form action="form">
          <ul className="form">
            <li className="form_input">
              <input type="text" id="name" className="input input_text" placeholder=" " />
              <label htmlFor="name" className="input_label">
                Wpisz tutaj swoją nazwę
              </label>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
