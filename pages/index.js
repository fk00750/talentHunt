import WhatsAppWidget from "@/components/common/whatsapp-widget";
import AboutTalentX from "@/components/home/about-talent";
import FAQs from "@/components/home/faq";
import Features from "@/components/home/features";
import ItemList from "@/components/home/features";
import HeroSection from "@/components/home/hero-section";
import Merits from "@/components/home/merits";
import ExamPattern from "@/components/home/pattern";
import Register from "@/components/home/register";
import SamplePaper from "@/components/home/sample-paper";
import Schedule from "@/components/home/schedule";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Talent Hunt by MKC</title>
        <meta name="description" />
      </Head>
      <main className="overflow-x-hidden">
        <HeroSection />
        <Merits />
        {/* <AboutTalentX /> */}
        <Features />
        <Register />
        <ExamPattern />
        <SamplePaper />
        {/* <Schedule /> */}
        <FAQs />
        <WhatsAppWidget />
      </main>
    </>
  );
}
