import "@/scss/globals.css";
import "@/scss/index.scss";
import type { AppProps } from "next/app";
// import { Fira_Code, Raleway } from "next/font/google";

// const raleway = Raleway({ subsets: ["latin"] });
// const firaCode = Fira_Code({
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');
        :root {
          --raleway: 'Raleway';
          --fira-code: 'Fira Code';
        }
      `}</style>
      <Component {...pageProps} />;
    </>
  );
}
// :root {
//   --raleway: ${raleway.style.fontFamily};
//   --fira-code: ${firaCode.style.fontFamily};
// }