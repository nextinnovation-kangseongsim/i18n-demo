import React, { ReactNode } from "react";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

interface RootLayoutProps {
  children: ReactNode;
}

interface GenerateStaticParamsResult {
  lng: string;
}

export async function generateStaticParams(): Promise<
  GenerateStaticParamsResult[]
> {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout(
  { children }: RootLayoutProps,
  params?: GenerateStaticParamsResult
) {
  const lng = params?.lng || "fallbackLanguage"; 

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=0, viewport-fit=cover"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
