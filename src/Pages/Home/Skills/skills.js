import React from "react";
import Javascript from "../../../Assets/Images/js.png";
import ReactLogo from "../../../Assets/Images/reactJs.webp";
import Redux from "../../../Assets/Images/redux.webp";
import Tailwind from "../../../Assets/Images/tailwind.png";
import Html from "../../../Assets/Images/html.webp";
import Css from "../../../Assets/Images/css.png";

import Node from "../../../Assets/Images/node.png";
import Express from "../../../Assets/Images/express.png";

import Docker from "../../../Assets/Images/docker.png";
import Postman from "../../../Assets/Images/postman.webp";
import Mongo from "../../../Assets/Images/mongo.png";
import Golang from "../../../Assets/Images/golang.png";

import Cpp from "../../../Assets/Images/cpp.webp";
import Git from "../../../Assets/Images/git.png";
import NextJs from "../../../Assets/Images/nextjs.png";
import TypeScript from "../../../Assets/Images/typescript.svg";
import SocketIo from "../../../Assets/Images/socketio.png";
import RabbitMQ from "../../../Assets/Images/rabbitmq.png";
import Redis from "../../../Assets/Images/redis.png";

import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./skills.module.css";

export default function Skills({Skills_ref}) {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
      <div ref={Skills_ref} className={styles.main}>
        <div
          className="heading"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <p>Technologies</p>
          <p>My Skills</p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
          className={styles.logoSection}
        >
          <h4 className={styles.stacks}>Frontend Development :</h4>
          <div className={styles.logoImages}>
            <img src={Javascript} alt="frontend" title="JavaScript"/>
            <img src={ReactLogo} alt="frontend" title="React"/>
            <img src={Redux} alt="frontend" title="Redux"/>
            <img src={Tailwind} alt="frontend" title="Tailwind" />
            <img src={Html} alt="frontend"  title="HTML"/>
            <img src={Css} alt="frontend" title="CSS"/>
            <img src={NextJs} alt="frontend" title="Next.js"/>
            <img src={TypeScript} alt="frontend" title="TypeScript"/>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
          className={styles.logoSection}
        >
          <h4 className={styles.stacks}>Backend Development :</h4>
          <div className={styles.logoImages}>
            <img src={Node} alt="backend techs" title="Node" />
            <img src={Express} alt="backend techs" title="Express"/>
            <img src={Postman} alt="backend techs" title="Postman"/>
            <img src={Docker} alt="backend techs" title="Docker"/>
            <img src={SocketIo} alt="backend techs" title="Socket.io"/>
            <img src={RabbitMQ} alt="backend techs" title="RabbitMQ"/>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
          className={styles.logoSection}
        >
          <h4 className={styles.stacks}>Databases :</h4>
          <div className={styles.logoImages}>
            <img src={Mongo} alt="backend techs" title="Mongo Db"/>
            <img src={Redis} alt="backend techs" title="Redis"/>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
          className={styles.logoSection}
        >
          <h4 className={styles.stacks}>Other Skills :</h4>
          <div className={styles.logoImages}>
            <img src={Cpp} alt="Other skills techs" title="C++" />
            <img src={Javascript} alt="language" title="JavaScript"/>
            <img src={Golang} alt="Other skills techs" title="Go" />
            <img src={Git} alt="git logo" title="Git" />

          </div>
        </div>
      </div>
    </>
  );
}
