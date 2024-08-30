import { Button } from "material";
import Navbar from "./components/navbar";
import "./style.scss";
import MyButton from "./components/button";
import Cards from "./components/cards";
import { Input } from "@material-tailwind/react";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="showcase">
        <h1>Minimalistic, modular Webflow template.</h1>
        <p>
          Moon Coach is a beautiful, custom, and animated Webflow template
          focused on coaching, courses, and other service-based businesses.
        </p>
        <MyButton>Expore More</MyButton>
      </div>
      <div className="pricing"></div>
      <div className="facts">
        <div className="left"></div>
        <div className="info">
          <h1>Couple of quick facts</h1>
          <p>
            We want to make sure you understand the power you have in your hands
            when deciding to use our template.
          </p>
          <ul>
            <h2>OUR Template:</h2>
            <li>is fully responsive and ready to go live</li>
            <li>
              has 3 unique homepages, 3 about pages, blog pages, and 4 other
              useful pages. This adds up to 40+ custom sections!
            </li>
            <li>
              includes CMS (Content Management System) so you can easily edit
              dynamic content.
            </li>
            <li>
              is modular which means that you can combine different sections or
              parts of theUser Interface and the feel and look will stay the
              same
            </li>
            <li>
              was crafted with love and attention to detail by awarded designer
            </li>
          </ul>
          <MyButton>Buy template</MyButton>
        </div>
      </div>
      <Cards
        h1="Homepages"
        p="The homepage is the face of your business. Select one from three minimalistic and subtly animated homepages, to introduce your users to what you're doing."
      />
      <Cards
        h1="About pages"
        p="If you didn't get enough space on the homepage to really deep dive into who you are, your story, and yourvalues, you can do that on a separate about page."
      />
      <Cards
        h1="Blog pages (CMS)"
        p="Share your knowledge in the easiest way possible, thanks to Webflow CMS and our clean structure."
      />
      <Cards
        h1="Other useful pages"
        p="Complete your website with other pages."
      />

      <div className="questions">
        <div className="left"></div>
        <div className="fa">
          <h1>Have question about our template?</h1>
          <form>
            <Input
              variant="standard"
              label="Your Name"
              placeholder="Your Name"
            />
            <Input variant="standard" label="Email" placeholder="Email" />
            <Input
              variant="standard"
              label="Your message"
              placeholder="Your message"
            />

            <MyButton>Send form</MyButton>
          </form>
        </div>
      </div>
      <div className="cont">
      <div className="footer">
        <div className="top">
          <a href="#">
            <div className="logo">
              <img src="/Vector.png" alt="" />
              <h1>Moon Coach</h1>
            </div>
          </a>
          <ul>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
          </ul>
        </div>
        <div className="bottom">
          <p>Hey, I'm Maria Gonzalez and I offer life coaching of the future with personalized plan to achieve innner balance.</p>
          <div className="uls">
            <ul>
              <h3>Homepages</h3>
              <li><a href="#">Home V1</a></li>
              <li><a href="#">Home V2</a></li>
              <li><a href="#">Home V3</a></li>
            </ul>
            <ul>
              <h3>About</h3>
              <li><a href="#">About V1</a></li>
              <li><a href="#">About V2</a></li>
              <li><a href="#">About V3</a></li>
            </ul>
            <ul>
              <h3>Blog</h3>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Category</a></li>
              <li><a href="#">Detailed</a></li>
            </ul>
            <ul>
              <h3>Others</h3>
              <li><a href="#">Contact V1</a></li>
              <li><a href="#">Contact V2</a></li>
              <li><a href="#">Contact V3</a></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
