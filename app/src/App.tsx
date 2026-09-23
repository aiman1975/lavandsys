import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Solutions } from '@/components/Solutions';
import { Portfolio } from '@/components/Portfolio';
import { Capabilities } from '@/components/Capabilities';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-slate-950">
          <Header />
          <main>
            <Hero />
            <Solutions />
            <Portfolio />
            <Capabilities />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
