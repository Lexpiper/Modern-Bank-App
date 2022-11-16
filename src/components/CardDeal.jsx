import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={`${layout.sectionInfo} ${styles.padding}`}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        In a world of so many digital possibilities, you can do a lot with our
        virtual cards globally.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} ${styles.padding}`}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
