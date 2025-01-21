import Header from "@/components/header";
import Main1 from "@/components/main-1";
import Services from "@/components/services";
import GetProposal from "@/components/get-proposal";
import CaseStudies from "@/components/case-studies";
import WorkingProcess from "@/components/working-process";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Main1/>
      <Services/>
      <GetProposal/>
      <CaseStudies/>
      <WorkingProcess/>
      <Team/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
