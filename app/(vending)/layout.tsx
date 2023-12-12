import "../globals.css";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

export const metadata = {
  title: "Vending Machine",
  description: "Vending Machine demo",
};

export default function VendingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="h-full bg-slate-100">
          <Navbar />
          <main className="pt-40 pb-20 bg-slate-100">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
