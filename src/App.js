import "./App.css";
import logo from "./images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome component
import {
  faCamera,
  faBoltLightning,
  faBolt,
  faCog,
  faBuilding,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import intel from "./images/intel.webp";
import hp from "./images/hp.webp";
import honeywell from "./images/honeywell.webp";
import quickheal from "./images/quickheal.webp";
import wd from "./images/wd.webp";
import asus from "./images/ASUS-01.webp";
import dahua from "./images/dahua.webp";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

const services = [
  "Network Products / Solutions",
  "Biometric Machines",
  "Computer / Laptop",
  "Server / Ncomputing",
  "CCTV Camera",
  "Antivirus / Printer",
  "Power & Data Backups Solutions",
];
const brandimages = [intel, hp, honeywell, quickheal, wd, asus, dahua];
const brandimagegap = {
  border: "1px solid",
  width: "100%",
  height: 160,
};

function App() {
  return (
    <main className="App">
      <header>
        <div className="inner">
          <img src={logo} alt="Dixaan Infotech Logo" className="logo" />
        </div>
      </header>

      <section className="section_1">
        <div className="section_1_content">
          <h1>Providing Impeccable IT and Networking Solutions</h1>
          <p>
            Get the best deal from an experienced engineer as per your need..
          </p>
          <div className="section_1_button">
            <button>Discover</button>
          </div>
        </div>
      </section>

      <section className="section_2">
        <div className="grid-container">
          <div className="grid-item grid_1">
            <div className="major">
              <h2>Gaming PC Solution</h2>
            </div>
            <ul>
              <li>Liquid Cooler CPU</li>
              <li>Zotac / MSI / ASUS Graphics Card</li>
              <li>Heatsink RAM</li>
              <li>Cosmic Byte Gaming Keyboard</li>
              <li>Cosmic Byte Gaming Mouse up to 10,000 DPI</li>
              <li>Gaming Monitor</li>
              <li>Gaming Mouse Pad</li>
              <li>Hypergiant Mousepad</li>
              <li>RGB Gaming Keyboard with Software</li>
            </ul>
          </div>

          <div className="grid-item grid_2">
            <video width="100%" height="470" controls>
              <source
                src="https://dixaaninfotech.com/assets/introvideo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section id="two" className="section_3">
        <div className="grid-container">
          <div className="grid-item">
            <div className="icons_main">
              {/* Icon Container */}
              <div className="icons_border">
                <div className="icons">
                  <FontAwesomeIcon icon={faBuilding} /> {/* Building icon */}
                </div>
              </div>

              <div className="icons_border">
                <div className="icons">
                  <FontAwesomeIcon icon={faDownload} /> {/* Download icon */}
                </div>
              </div>

              <div className="icons_border">
                <div className="icons">
                  <FontAwesomeIcon icon={faBoltLightning} /> {/* Bolt icon */}
                </div>
              </div>

              <div className="icons_border">
                <div className="icons">
                  <FontAwesomeIcon icon={faBolt} />{" "}
                  {/* Bolt icon (duplicate) */}
                </div>
              </div>

              <div className="icons_border">
                <div className="icons">
                  <FontAwesomeIcon icon={faCamera} /> {/* Camera icon */}
                </div>
              </div>

              <div className="icons_border">
                <div className="icons">
                  <FontAwesomeIcon icon={faCog} /> {/* Cog icon */}
                </div>
              </div>
            </div>
          </div>

          <div className="grid_2">
            {services.map((item, index) => (
              <div key={index} className="major">
                <p>{item}</p>
                <hr className="hline" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section></section>

      <section id="three" className="brandimages">
        <div className="container" style={brandimagegap}>
          {brandimages.map((logo, index) => (
            <span key={index}>
              <img
                src={logo}
                alt=""
                height={index === 5 ? "160px" : "150px"}
                width={index === 5 ? "160px" : "150px"}
              />
            </span>
          ))}
        </div>
      </section>

      <section id="four" className="style2 special">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6328337444675!2d72.79121805059913!3d21.206739885833056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c303ea51b31%3A0xb251b1544710f949!2sDixaan%20Infotech!5e0!3m2!1sen!2sin!4v1650610387668!5m2!1sen!2sin"
          width="100%"
          height="470"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section id="footer">
        <p>
          Phone : 02613517492
          <br />
          Address : 16, Shantinath Complex, Anand Mahal Road, Adajan
          <br />
          Opening Hours : Mon-Sat: 10 AM-8 PM
        </p>

        <ul className="icons">
          {/* Uncomment if needed */}
          {/* 
          <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li> 
          */}
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/pages/category/Computer-Store/Dixaan-Infotech-213911962346428/"
              className="icon brands alt fa-facebook-f"
            >
              <span className="label">Facebook</span>
            </a>
          </li>

          {/* Uncomment if needed */}
          {/* 
          <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li> 
          */}

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/917383115583?text=Hi+I+Am+Interested+For+Computer+Services"
              className="icon brands alt fa-whatsapp"
            >
              <span className="label">Whatsapp</span>
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:dixaancomputers@gmail.com"
              className="icon solid alt fa-envelope"
            >
              <span className="label">Email</span>
            </a>
          </li>
        </ul>

        <ul className="copyright">
          <li>&copy; 2024</li>
          <li>
            Manage with Love by :
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nxsinfotech.com/"
            >
              NXS Infotech Private Limited
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
