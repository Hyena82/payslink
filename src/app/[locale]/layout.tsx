import type { Metadata } from "next";
import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StyledJsxRegistry from "@/lib/registry";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import GlobalStyles from "@/styles/GlobalStyles";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import LoadingPage from "@/app/[locale]/home/components/LoadingPage";
import LayoutProvider from "@/components/Layout/LayoutProvider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "PAYSLINK",
  description: "The top-notch DeFi solution for the skilled trades",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <StyledJsxRegistry>
          <GlobalStyles />
          <NextIntlClientProvider locale="en" messages={messages}>
            <AntdRegistry>{children}</AntdRegistry>
          </NextIntlClientProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
