import React from "react";
import styles from "./Landing.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { ArrowUpOutlined } from "@ant-design/icons";
import Astha from '../../../Assets/Images/me.jpeg';
import Github from '../../../Assets/Images/github.svg';
import HackerRank from '../../../Assets/Images/hackerRank.svg';
import LinkedIn from '../../../Assets/Images/linkedin.svg';
import Medium from '../../../Assets/Images/medium.svg';
import Leetcode from '../../../Assets/Images/leetcode.svg';
import Twitter from '../../../Assets/Images/twitter.svg';


import { Button } from "antd";

function Landing({Landing_ref}) {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <div ref={Landing_ref} className={styles.hero}>
      <div className={styles.main}>
        
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          className={styles.mainLeft}
        >
          <p>
            Hello, <br/>I'm Astha Sahani
          </p>
          <p>
          A <b>Full Stack Engineer</b> with limitless ambition who is committed to transforming cool ideas into effective solutions that brings out real change.&nbsp;&nbsp;
            
          </p>
          
          <span className={styles.resumeBtn}>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://drive.google.com/file/d/1VSE9eVmZ5PU5fo2BSaWjBBMstM2qdn21/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              <Button className={styles.Btn} style={{ background: "inherit", color: "white", font:"inherit" }}>

                RESUME <ArrowUpOutlined className={styles.arrow} />
              </Button>
            </a>

            <a
              style={{ textDecoration: "none", color: "white" }}
              href="mailto:asthasahani08@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button  className={styles.Btn} style={{ background: "#FFE5AD", color: "black", font:"inherit", marginLeft:"16px" }}>
              HIRE ME <ArrowUpOutlined className={styles.arrow} />
              </Button>

            </a>

          </span>

        </div>
        <div className={styles.mainRight}> 
          <div className={styles.profileSection}>
              <div className={styles.leftProfile}>
                  <div className={styles.profile}>
                      <a
                        href="https://github.com/Astha86"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                          <img src={Github} alt="github"/>
                      </a>
                    </div>
                    <div className={styles.profile}>
                      <a
                        href="https://www.linkedin.com/in/astha-sahani/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                          <img src={LinkedIn} alt="linkedin"/>
                      </a>
                    </div>
                      
                    <div className={styles.profile}>
                        <a
                          href="https://twitter.com/thatsoastha"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={Twitter} alt="twitter"/>
                      </a>
                    </div>
              </div>
              <div className={styles.authorPic}>
                  <img src={Astha} alt="asthaImg"/>
              </div>
              <div className={styles.rightProfile}>
              
                  <div className={styles.profile}>
                    <a
                      className="w-11% h-50%"
                      href="https://leetcode.com/Astha86/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Leetcode} alt="leetcode"/>
                    </a>
                  </div>
                  
                  <div className={styles.profile}>
                    <a
                      href="https://medium.com/@thatsoastha"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <img src={Medium} alt="medium"/>
                    </a>
                  </div>
                  <div className={styles.profile}>
                    <a
                        href="https://www.hackerrank.com/profile/astha_864"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={HackerRank} alt="hackerRank"/>
                    </a>
                  </div>
            
              </div>
            </div>
        </div>
      </div>

    </div>
  );
}

export default Landing;




