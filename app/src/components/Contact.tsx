import { useState, type FormEvent } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  X,
  Loader2,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState<Status>('idle');
  const [quickOpen, setQuickOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        message: form.message,
        lang,
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'info@lavandsys.com',
      href: 'mailto:info@lavandsys.com',
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '+963 996 677 976',
      href: 'tel:+963996677976',
    },
    {
      icon: MapPin,
      label: t('contact.info.address'),
      value: lang === 'ar' ? 'المزة، ڤيلات غربية' : 'Mazzeh, Western Villas, Damascus',
      href: 'https://maps.google.com/?q=Mazzeh+Western+Villas+Damascus',
    },
  ];

  return (
    <section id="contact" className="section-pad bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl container-px">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-700 dark:bg-teal-900/40 dark:text-teal-300">
            {t('contact.title')}
          </span>
          <h2 className="section-title mt-4">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="input-field"
                    placeholder={t('contact.form.name')}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="input-field"
                    placeholder={t('contact.form.phone')}
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="input-field"
                  placeholder={t('contact.form.email')}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  {t('contact.form.message')}
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="input-field resize-none"
                  placeholder={t('contact.form.message')}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  {t('contact.form.success')}
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  {t('contact.form.error')}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t('contact.form.sending')}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t('contact.form.submit')}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info column */}
          <div className="flex flex-col gap-6">
            <div className="card p-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {t('contact.info.title')}
              </h3>
              <div className="mt-6 space-y-5">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={idx}
                      href={info.href}
                      target={info.icon === MapPin ? '_blank' : undefined}
                      rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 group"
                    >
                      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-teal-500 shadow-lg transition-transform group-hover:scale-110">
                        <Icon className="h-5 w-5 text-white" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                          {info.label}
                        </p>
                        <p className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-brand-600 dark:text-slate-200 dark:group-hover:text-brand-400">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="card flex-1 overflow-hidden">
              <a
                href="https://maps.google.com/?q=Mazzeh+Western+Villas+Damascus"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-full min-h-[200px] items-center justify-center bg-gradient-to-br from-brand-100 to-teal-100 dark:from-brand-900/30 dark:to-teal-900/30"
              >
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="relative text-center">
                  <MapPin className="mx-auto h-12 w-12 text-brand-600 dark:text-brand-400" />
                  <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {lang === 'ar' ? 'المزة، ڤيلات غربية' : 'Mazzeh, Western Villas, Damascus'}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {lang === 'ar' ? 'اضغط لفتح الخريطة' : 'Click to open map'}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact FAB */}
      <button
        onClick={() => setQuickOpen(true)}
        className="fixed bottom-6 end-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-teal-500 text-white shadow-xl shadow-brand-600/30 transition-all hover:scale-110 hover:shadow-2xl"
        aria-label={t('contact.quickContact')}
      >
        <MessageSquare className="h-6 w-6" />
        <span className="absolute inset-0 animate-ping rounded-full bg-brand-500/30" />
      </button>

      {/* Quick Contact modal */}
      {quickOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center animate-fade-in"
          onClick={() => setQuickOpen(false)}
        >
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl animate-scale-in dark:border-slate-800 dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setQuickOpen(false)}
              className="absolute end-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {t('contact.quickContact')}
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {t('contact.subtitle')}
            </p>
            <div className="mt-5 space-y-3">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.href}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 transition-colors hover:border-brand-400 hover:bg-brand-50 dark:border-slate-700 dark:hover:border-brand-600 dark:hover:bg-slate-800"
                  >
                    <Icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                    <div>
                      <p className="text-xs text-slate-400">{info.label}</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
            <a
              href="#contact"
              onClick={() => setQuickOpen(false)}
              className="btn-primary mt-5 w-full"
            >
              {t('contact.form.submit')}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
