import { Linkedin, Mail } from "lucide-react";
import { GitHub } from "react-feather";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { GiClawSlashes } from "react-icons/gi";

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box ">
          <img src={"/images/avatar01.jpeg"} alt="Richard hanrick" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Mohit Singh
          </h1>

          <p className="title">Web Developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <GiClawSlashes />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail />
            </div>

            <div className="contact-info">
              <a href="mailto:mohitx1203@gmail.com" className="contact-link">
                <p className="contact-title">Email</p>
                mohitx1203@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GitHub />
            </div>

            <div className="contact-info">
              <a
                href="https://github.com/msxcodes"
                target="_blank"
                className="contact-link"
              >
                <p className="contact-title">GitHub</p>
                @msxcodes
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <BsTwitter />
            </div>

            <div className="contact-info">
              <a
                href="https://twitter.com/msxcodes"
                target="_blank"
                className="contact-link"
              >
                <p className="contact-title">Twitter</p>
                @msxcodes
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <BsInstagram />
            </div>

            <div className="contact-info">
              <a
                href="https://instagram.com/msxcodes"
                target="_blank"
                className="contact-link"
              >
                <p className="contact-title">Instagram</p>
                @msxcodes
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <Linkedin />
            </div>

            <div className="contact-info">
              <a
                href="https://in.linkedin.com/in/msxcodes"
                target="_blank"
                className="contact-link"
              >
                <p className="contact-title">Linkedin</p>
                @msxcodes
              </a>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
