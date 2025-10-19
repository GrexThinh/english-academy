import "@/i18n/config";
import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import { Nunito } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";
import ScrollToTop from "@/components/Common/ScrollToTop";
import Header from "@/components2/Header";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Footer from "@/components2/Footer";
import { Metadata } from "next";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

const siteUrl = "https://anhnguvictoria.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trung tâm ngoại ngữ học viện giáo dục Victoria",
    template: "%s | Trung tâm ngoại ngữ học viện giáo dục Victoria",
  },
  description:
    "Victoria Academy cam kết cung cấp giáo dục tiếng Anh xuất sắc với phương pháp giảng dạy sáng tạo. Đội ngũ giảng viên giàu kinh nghiệm tạo ra môi trường học tập hấp dẫn giúp học viên đạt được mục tiêu ngôn ngữ.",
  keywords: [
    "Victoria Academy",
    "Trung tâm ngoại ngữ học viện giáo dục",
    "Trung tâm ngoại ngữ học viện giáo dục Victoria",
  ],
  alternates: {
    canonical: siteUrl,
    languages: {
      vi: `${siteUrl}/vi`,
      en: `${siteUrl}/en`,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Trung tâm ngoại ngữ học viện giáo dục Victoria",
    description: "Trung tâm ngoại ngữ học viện giáo dục Victoria",
    siteName: "Trung tâm ngoại ngữ học viện giáo dục Victoria",
    images: [
      {
        url: `/logos/logo1.png`,
        width: 1200,
        height: 630,
        alt: "Ảnh chia sẻ",
      },
    ],
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trung tâm ngoại ngữ học viện giáo dục Victoria",
    description: "Mô tả ngắn cho Twitter Card.",
    images: [`/logos/logo1.png`],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "dfpVUIDzAPZPUIFfIMFoHjK6nAaHrdtiPuffUVdhHPU",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning={true}>
      <body className={`${nunito.variable}`}>
        <>
          <ThemeProvider>
            <ReduxProvider>
              <Header />
              {children}
            </ReduxProvider>
          </ThemeProvider>
          <ScrollToTop />
          <Footer />
        </>
      </body>
    </html>
  );
}
