import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_z0r5r8r',
        'template_m3qdda5',
        {
          from_name: form.name,
          to_name: 'Pradyumna',
          from_email: form.email,
          to_email: 'your@email.com',
          message: form.message,
        },
        '8WKsrgOkv67PhrPC3',
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({ name: '', email: '', message: '' });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        }
      );
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen py-20 bg-gradient-to-b from-black via-zinc-900 to-black" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="absolute inset-0 w-full h-full bg-noise opacity-5"></div>

      <div className="relative z-10 w-full max-w-2xl p-8 rounded-2xl bg-zinc-900/80 shadow-2xl backdrop-blur-md mx-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
          Let's Talk
        </h2>
        <p className="text-lg text-zinc-400 text-center mb-10 leading-relaxed">
          Whether you’re looking to build a new website, improve your existing platform, or bring a unique idea to life — I’m excited to collaborate.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-base text-zinc-300">Full Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="ex., John Doe"
              className="w-full rounded-lg px-5 py-3 bg-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-base text-zinc-300">Email Address</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="ex., johndoe@gmail.com"
              className="w-full rounded-lg px-5 py-3 bg-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-base text-zinc-300">Your Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Share your thoughts or inquiries..."
              className="w-full rounded-lg px-5 py-3 bg-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all text-white font-semibold text-lg px-6 py-3 rounded-lg mt-4"
          >
            {loading ? 'Sending...' : 'Send Message'}
            <img src="/assets/arrow-up.png" alt="arrow-up" className="w-4 h-4 object-contain invert" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
