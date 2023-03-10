// import "./globals.css";

import styles from "./layout.module.css";
import utilStyles from "./utils.module.css";
import Image from "next/image";
import Link from "next/link";

const name = "M Umer Majeed";
// export const siteTitle = "Next.js Sample Website";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
            <Link href="/">
              <Image
                priority
                src="/images/prof1.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
            {children}
          </header>
        </div>
      </body>
    </html>
  );
}
