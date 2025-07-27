// // src\components\ContactForm\ContactForm.jsx
// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useLanguage } from '../../contexts/LanguageContext';
// import emailjs from 'emailjs-com';


// const ContactForm = () => {
//   const { t } = useLanguage();
//   const [load, setLoad] = useState(false);

//   const notify = () => toast.success(`${t('contact.form.successSend')}`);
//   const notifyError = () => toast.error(`${t('contact.form.errorSend')}`);

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setLoad(true)

//     await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
//         .then(
//             (result) => {
//                 console.log('SUCCESS!' + result.text);
//                 notify()
//                 console.log(load)
//             },
//             (error) => {
//                 console.log(load)
//                 console.log('FAILED...', error.text);
//                 notifyError()
//             },
//         );

//     e.target.reset()
//     setLoad(false)
//   };

//   return (
//     <>
//       <form className="contact-form" onSubmit={sendEmail}>
//         <div className="form-group">
//           <input type="text" name="user_name" placeholder={t('contact.form.name')} required />
//         </div>
//         <div className="form-group">
//           <input type="email" name="user_email" placeholder={t('contact.form.email')} required />
//         </div>
//         <div className="form-group">
//           <input dir="ltr" style={{direction: 'ltr', unicodeBidi: 'isolate'}} type="tel" name="user_phone" placeholder={t('contact.form.phoneNO')} />
//         </div>
//         <div className="form-group">
//           <textarea name="message" placeholder={t('contact.form.message')} rows="5" required></textarea>
//         </div>
//         <button type="submit" className="submit-btn !text-amber-50" disabled={load}>
//           {load ? t('contact.form.sending') || 'Sending...' : t('contact.form.send')}
//         </button>
//       </form>
//     </>
//   );

// };

// export default ContactForm;






// src\components\ContactForm\ContactForm.jsx
// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useLanguage } from '../../contexts/LanguageContext';

// const ContactForm = () => {
//   const { t } = useLanguage();
//   const [formData, setFormData] = useState({
//     user_name: '',
//     user_email: '',
//     user_phone: '',
//     message: ''
//   });
//   const [isRedirecting, setIsRedirecting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // التحقق من صحة البريد الإلكتروني
//     if (!formData.user_email || !/\S+@\S+\.\S+/.test(formData.user_email)) {
//       toast.error(t('contact.form.invalidEmail') || 'يرجى إدخال بريد إلكتروني صحيح.');
//       return;
//     }

//     setIsRedirecting(true);

//     const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL || 'info@m4ct.com';
//   const subject = t('contact.form.emailSubject') + ` ${formData.user_name}` || `رسالة جديدة من ${formData.user_name}`;
//   const body = `${t('contact.form.emailBodyIntro') + ' :\n\n' || 'الموضوع:\n\n'}${t('contact.form.name')}: ${formData.user_name}\n${t('contact.form.email')}: ${formData.user_email}\n${t('contact.form.phoneNO')}: ${formData.user_phone || t('contact.form.notProvided')}\n\n${t('contact.form.message')}:\n${formData.message}`;

//   // رابط Gmail المباشر
//   const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//   // فتح Gmail مباشرة
//   window.open(gmailLink, '_blank', 'noopener,noreferrer');
  
//   // إعادة تعيين النموذج
//   setFormData({
//     user_name: '',
//     user_email: '',
//     user_phone: '',
//     message: ''
//   });
  
//   toast.info(t('contact.form.openingGmail') || 'جاري فتح Gmail...');
//   };

//   return (
//     <>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             type="text"
//             name="user_name"
//             placeholder={t('contact.form.name')}
//             value={formData.user_name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             name="user_email"
//             placeholder={t('contact.form.email')}
//             value={formData.user_email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             dir="ltr"
//             style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
//             type="tel"
//             name="user_phone"
//             placeholder={t('contact.form.phoneNO')}
//             value={formData.user_phone}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <textarea
//             name="message"
//             placeholder={t('contact.form.message')}
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button 
//           type="submit" 
//           className="submit-btn !text-amber-50"
//           disabled={isRedirecting}
//         >
//           {isRedirecting ? (t('contact.form.redirecting') || 'جاري التحويل...') : t('contact.form.send')}
//         </button>
//       </form>
//       <ToastContainer />
//     </>
//   );
// };

// export default ContactForm;


// src\components\ContactForm\ContactForm.jsx
import  { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من صحة البريد الإلكتروني
    if (!formData.user_email || !/\S+@\S+\.\S+/.test(formData.user_email)) {
      toast.error(t('contact.form.invalidEmail') || 'يرجى إدخال بريد إلكتروني صحيح.');
      return;
    }

    setIsRedirecting(true);

    const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL || 'info@m4ct.com';
    const subject = t('contact.form.emailSubject') + ` ${formData.user_name}` || `رسالة جديدة من ${formData.user_name}`;
    const body = `${t('contact.form.emailBodyIntro') + ' :\n\n' || 'الموضوع:\n\n'}${t('contact.form.name')}: ${formData.user_name}\n${t('contact.form.email')}: ${formData.user_email}\n${t('contact.form.phoneNO')}: ${formData.user_phone || t('contact.form.notProvided')}\n\n${t('contact.form.message')}:\n${formData.message}`;

    // رابط Gmail المباشر
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // فتح Gmail مباشرة
    try {
      window.open(gmailLink, '_blank', 'noopener,noreferrer');
      
      // إعادة تعيين النموذج
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        message: ''
      });
      
      toast.info(t('contact.form.openingGmail') || 'جاري فتح Gmail...');
    } catch (error) {
      console.error("Error opening Gmail:", error);
      toast.error(t('contact.form.gmailError') || 'تعذر فتح Gmail. يرجى التأكد من أنك مسجّل الدخول إلى Gmail.');
    } finally {
      // إعادة تعيين حالة التحويل بعد فترة قصيرة
      setTimeout(() => setIsRedirecting(false), 2000);
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="user_name"
            placeholder={t('contact.form.name')}
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="user_email"
            placeholder={t('contact.form.email')}
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            dir="ltr"
            style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
            type="tel"
            name="user_phone"
            placeholder={t('contact.form.phoneNO')}
            value={formData.user_phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder={t('contact.form.message')}
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="submit-btn !text-amber-50"
          disabled={isRedirecting}
        >
          {isRedirecting ? (t('contact.form.redirecting') || 'جاري التحويل...') : t('contact.form.send')}
        </button>
      </form>
      {/* <ToastContainer /> */}
    </>
  );
};

export default ContactForm;