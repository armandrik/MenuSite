import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export const Contact = () => {
  return (
    <section>
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center mb-16">
          <p className="text-center text-indigo-500 dark:text-indigo-400 mb-4">
            ارتباط با ما
          </p>
          <h1 className="text-zinc-700 dark:text-white/90 text-center px-4 font-DanaDemiBold text-4xl mobile:text-2xl">
            با ما درتماس باشید
          </h1>
          <p className="mt-3 text-zinc-700/80 dark:text-white/70">
            تیم دوستانه ما همیشه برای صحبت کردن اینجا هستند.
          </p>
        </div>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};
