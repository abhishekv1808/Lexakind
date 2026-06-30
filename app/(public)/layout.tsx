import { Toaster } from 'react-hot-toast';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { MobileCTABar } from '@/components/layout/MobileCTABar';
import { ExitIntentModal } from '@/components/shared/ExitIntentModal';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:bg-ora focus:text-white focus:px-4 focus:py-2 focus:rounded-[3px]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      {/* Clears the fixed mobile CTA bar so it never covers footer content */}
      <div className="h-14 md:hidden" aria-hidden="true" />
      <WhatsAppButton />
      <MobileCTABar />
      <ExitIntentModal />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: '3px',
            background: '#161618',
            color: '#ffffff',
            fontSize: '14px',
          },
        }}
      />
    </>
  );
}
