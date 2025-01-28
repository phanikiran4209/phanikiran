import Footer from "@/components/Footer";

export const metadata = {
	title: "Phani | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
