import Image from "next/image";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
export default function Home() {
  return (<>
  <Header></Header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      home page
    </main>
    <Footer/></>
    
  );
}
