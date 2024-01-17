import Head from 'next/head';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'NestJS Seminar' }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gray-800 text-white p-4">
        <nav>
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-500">
            About
          </Link>
          {/* 추가 네비게이션 링크 */}
        </nav>
      </header>
      <main className="p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4">{/* 푸터 내용 */}</footer>
    </div>
  );
};

export default Layout;
