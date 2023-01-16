import styles from "./style";
import AOS from 'aos';
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

const App = () => {
  AOS.init({ easing: 'ease', duration: 1000,mirror: false, animatedClassName: 'aos-animate',throttleDelay: 99,anchorPlacement: 'top-bottom',});
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>  

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
