import "./style.scss";
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className="nav">
      <a href="#">
        <div className="logo">
          <img src="/Vector.png" alt="" />
          <h1>Moon Coach</h1>
        </div>
      </a>
      <ul>
        <li>
          <a href="#">
            Homepages <i class="fa-solid fa-angle-down"></i>
          </a>
        </li>
        <li>
          <a href="#">
            About Pages <i class="fa-solid fa-angle-down"></i>
          </a>
        </li>
        <li>
          <a href="#">
            Others <i class="fa-solid fa-angle-down"></i>
          </a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <React.Fragment>
        <Button onClick={openDrawer} variant="outlined" className="button-menu">
          Menu
        </Button>
        <Drawer open={open} onClose={closeDrawer} className="p-4">
          <ul className="small">
            <li>
              <a href="#">
                Homepages <i class="fa-solid fa-angle-down"></i>
              </a>
            </li>
            <li>
              <a href="#">
                About Pages <i class="fa-solid fa-angle-down"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Others <i class="fa-solid fa-angle-down"></i>
              </a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <div className="button smallbtn">
            <button>Get on Webflow </button>
            <div className="line"></div>
          </div>
        </Drawer>
      </React.Fragment>
      <div className="button">
        <button>Get on Webflow </button>
        <div className="line"></div>
      </div>
    </div>
  );
}
