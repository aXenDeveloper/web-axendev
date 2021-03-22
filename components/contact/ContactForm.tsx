import useTranslation from 'next-translate/useTranslation';
import { ChangeEvent, FormEvent, useState } from 'react';

const ContactForm = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputText, setInputText] = useState('');

  const handleInputName = (e: ChangeEvent<HTMLInputElement>) => setInputName(e.target.value);
  const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => setInputEmail(e.target.value);
  const handleInputTitle = (e: ChangeEvent<HTMLInputElement>) => setInputTitle(e.target.value);
  const handleInputText = (e: ChangeEvent<HTMLTextAreaElement>) => setInputText(e.target.value);

  const { t } = useTranslation('global');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleClearButton = () => {
    setInputName('');
    setInputEmail('');
    setInputTitle('');
    setInputText('');
  };

  return (
    <div className="contact_content">
      <h2>{t('contact_form')}</h2>

      <div className="box padding">
        <form action="https://files.axendev.net/mail.php" method="POST" onSubmit={handleSubmit}>
          <ul className="form">
            <li className="form_input form_input_text">
              <input
                type="text"
                id="name"
                name="name"
                className="input input_text"
                placeholder=" "
                onChange={handleInputName}
                value={inputName}
                required
              />
              <label htmlFor="name" className="input_label">
                {t('contact_form_name')}
              </label>
            </li>

            <li className="form_input form_input_text">
              <input
                type="email"
                id="email"
                name="email"
                className="input input_text"
                placeholder=" "
                onChange={handleInputEmail}
                value={inputEmail}
                required
              />
              <label htmlFor="email" className="input_label">
                {t('contact_form_email')}
              </label>
            </li>

            <li className="form_input form_input_text">
              <input
                type="text"
                id="title"
                name="title"
                className="input input_text"
                placeholder=" "
                onChange={handleInputTitle}
                value={inputTitle}
                required
              />
              <label htmlFor="title" className="input_label">
                {t('contact_form_title')}
              </label>
            </li>

            <li className="form_input form_input_textarea">
              <textarea
                id="text"
                name="text"
                className="input input_textarea"
                onChange={handleInputText}
                value={inputText}
                required
              ></textarea>
              <label htmlFor="text" className="input_label">
                {t('contact_form_text')}
              </label>
            </li>
          </ul>

          <ul className="form_bottom">
            <li>
              <button type="submit" className="button button_medium button_primary">
                <span>{t('contact_form_send')}</span>
              </button>
            </li>

            <li>
              <button type="button" className="button button_medium button_light" onClick={handleClearButton}>
                <span>{t('contact_form_clear')}</span>
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
