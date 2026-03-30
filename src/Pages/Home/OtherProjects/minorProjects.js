import React from "react";
import styles from "./minorProjects.module.css";
// import Testimonial from "../../../Assets/Images/Testimonial.png";
import TicTac from "../../../Assets/Images/TicTac.png";
import Razorpay from "../../../Assets/Images/Razorpay.png";
import Gif from "../../../Assets/Images/Gif.png";
import Bharat from "../../../Assets/Images/BharatTour.png";
import Weather from "../../../Assets/Images/weather.png";
import PasswordGenerator from '../../../Assets/Images/PasswordGenerator.png';
import MinorProjectTem from "../../../Components/MinorProjectTem/MinorProjectTem";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from "antd";

function MinorProjects() {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);


  return (
    <>
      <div className={styles.main}>

        <Carousel className={styles.Carousal}>
          <MinorProjectTem
            img={PasswordGenerator}
            alt={"PasswordGenerator"}
            text={
              "This project is a simple password generator that allows users to create strong and secure passwords. It generate random passwords with customizable length and character types."
            }
            name={"Password Generator"}
            tag1={"HTML"}
            tag2={"CSS"}
            tag3={"JavaScript"}
            link={"https://password-generator-byastha.netlify.app/"}
          />
          <MinorProjectTem
            img={Weather}
            alt={"Weather Insight"}
            text={
              "Designed a weather website, which fetches the user location and shows the weather results for that location with 85% accuracy. Added an additional functionality to allow users to search for the weather conditions for over 200,000 cities in the world."
            }
            name={"Weather Insights"}
            tag1={"HTML"}
            tag2={"CSS"}
            tag3={"JavaScript"}
            link={"https://weather-insights-byastha.netlify.app/"}
          />

          <MinorProjectTem
            img={Razorpay}
            alt={"Razorpay UI Clone"}
            text={
              "The website design and content is based on the official Razorpay website, with some modification to fit the scope of this project. Implemented responsive design principles to optimize the website’s layout across various devices, guaranteeing a seamless user experience regardless of screen size or device type."}
            name={"E-Payment Replicant UI"}
            tag1={"HTML"}
            tag2={"Tailwind"}
            tag3={"CSS"}
            link={"https://e-payment-ui-replicate.netlify.app/"}
          />

          <MinorProjectTem
            img={Gif}
            alt={"Gif Generator"}
            text={
              "The Random Gif Generator is a web application that allows users to generate random GIFs or GIFs based on a specific tag or keyword. Whether you're looking for a quick laugh or need a GIF for a specific mood or situation, this page has got you covered."
            }
            name={"Random Gif Generator"}
            tag1={"React"}
            tag2={"React-Axios"}
            tag3={"Tailwind"}
            link={"https://gif-generator-byastha.netlify.app/"}
          />

          <MinorProjectTem
            img={TicTac}
            alt={"Tic Tac Toe"}
            text={
              "This classic Tic Tac Toe game offers an interactive web-based interface, allowing two players to compete on a 3x3 grid with real-time feedback, easy resets, and smooth gameplay for an engaging and seamless experience in the browser."
            }
            name={"Triad Challenge Game"}
            tag1={"JavaScript"}
            tag2={"CSS"}
            tag3={"HTML"}
            link={"https://tic-tac-toe-byastha.netlify.app/"}
          />

          <MinorProjectTem
            img={Bharat}
            alt={"Bharat Safar"}
            text={
              "Bharat Safar is a single-page web application that showcases various tour packages. Each package is presented as a card, displaying an image, a brief description, and a Read More button. "
            }
            name={"Bharat Safar"}
            tag1={"React"}
            tag2={"CSS"}
            tag3={"JavaScript"}
            link={"https://bharat-safar.netlify.app/"}
          />

          {/* <MinorProjectTem
            img={Testimonial}
            alt={"Testimonial"}
            text={
              "A web application called the Testimonial Page displays client endorsements in the form of a card-style slider. View captivating testimonials complete with customer reviews and images."
            }
            name={"Testimonial Page"}
            tag1={"React"}
            tag2={"Tailwind"}
            tag3={"JavaScript"}
            link={"https://testimonial-webpage.netlify.app/"}
          /> */}
        </Carousel>
      </div>

      <div class="line">
        <div
          data-aos="zoom-out"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
          class="line_break"
        >
          {" "}
        </div>
      </div>
    </>
  );
}

export default MinorProjects;