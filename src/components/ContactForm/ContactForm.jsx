// src\components\ContactForm\ContactForm.jsx
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage } from '../../contexts/LanguageContext';
import emailjs from 'emailjs-com';


const ContactForm = () => {
  const { t } = useLanguage();
  const [load, setLoad] = useState(false);

  const notify = () => toast.success(`${t('contact.form.successSend')}`);
  const notifyError = () => toast.error(`${t('contact.form.errorSend')}`);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoad(true)

    await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
        .then(
            (result) => {
                console.log('SUCCESS!' + result.text);
                notify()
                console.log(load)
            },
            (error) => {
                console.log(load)
                console.log('FAILED...', error.text);
                notifyError()
            },
        );

    e.target.reset()
    setLoad(false)
  };


  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
  //     .then((result) => {
  //       alert('تم إرسال رسالتك بنجاح!');
  //       e.target.reset();
  //     }, (error) => {
  //       alert('حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.');
  //     });
  // };

  return (
    <>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <input type="text" name="user_name" placeholder={t('contact.form.name')} required />
        </div>
        <div className="form-group">
          <input type="email" name="user_email" placeholder={t('contact.form.email')} required />
        </div>
        <div className="form-group">
          <input dir="ltr" style={{direction: 'ltr', unicodeBidi: 'isolate'}} type="tel" name="user_phone" placeholder="+963900000000" />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder={t('contact.form.message')} rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-btn !text-amber-50" disabled={load}>
          {load ? t('contact.form.sending') || 'Sending...' : t('contact.form.send')}
        </button>
      </form>
    </>
  );

};

export default ContactForm;
