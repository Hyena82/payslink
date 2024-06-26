import type { Metadata } from "next";
import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StyledJsxRegistry from "@/lib/registry";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import GlobalStyles from "@/styles/GlobalStyles";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LenisProvider } from "@/Provider/LenisProvider";

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
            <LenisProvider>
              <AntdRegistry>{children}</AntdRegistry>
            </LenisProvider>
          </NextIntlClientProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
