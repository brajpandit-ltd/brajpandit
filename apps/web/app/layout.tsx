import type { Metadata } from "next";
import "@ant-design/v5-patch-for-react-19"; // Import Ant Design CSS - compatibility package for React 19
import "antd/dist/reset.css"; // Import Ant Design CSS
import { ConfigProvider } from "antd";

export const metadata: Metadata = {
  title:
    "Brajpandit - A platform to book your events and take advance bookings with free advice from experts",
  description:
    "A platform to book your events and take advance bookings with free advice from experts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <ConfigProvider theme={{ token: { colorPrimary: "#1890ff" } }}>
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
