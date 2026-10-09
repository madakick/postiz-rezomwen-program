import localFont from 'next/font/local';

// Rezomwen program : Plus Jakarta Sans servie par l'application elle-meme
// (fichiers de RezoMwen, sous-ensemble latin), sans appel a Google Fonts.
export const jakartaSans = localFont({
  src: [
    { path: './plusjakarta-500.woff2', weight: '500', style: 'normal' },
    { path: './plusjakarta-600.woff2', weight: '600', style: 'normal' },
    { path: './plusjakarta-700.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
});
