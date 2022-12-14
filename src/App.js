import "./App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import img1 from "./assets/img1.png"
import line1 from "./assets/line1.png"
import line2 from "./assets/line2.png"
import line3 from "./assets/line3.png"
import logo from "./assets/logo.png"
import facebook from "./assets/facebook.png"
import instagram from "./assets/instagram.png"
import twitter from "./assets/twitter.png"


function App() {
  return (
    <>
      <nav>
        <div className="left-nav">
          <div className="left-nav-top">
            <div className="first-square"></div>
            <div className="first-circle"></div>
            <div className="first-circle"></div>
          </div>
          <div className="left-nav-bottom">logopisum</div>
        </div>
        <div className="right-nav">
          <div className="nav-items">
            <ul className="nav-items-ul">
              <a href="/">
                <li>HOME</li>
              </a>
              <a href="/">
                <li>ABOUT</li>
              </a>
              <a href="/">
                <li>CONTACT</li>
              </a>
            </ul>
          </div>
          <div className="nav-button">
            <button>GET IN TOUCH</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="main-left">
          <h1>
            Let’s create <br></br>something great <br></br>together
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nec
            ultrices <br></br>venenatis in. Sed elit aenean mattis vulputate
            aliquet vitae.
          </p>
          <button>Let's Talk</button>
        </div>
        <div className="main-right">
          <img
            alt="vivek"
            src="https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
          ></img>
        </div>
      </main>

      {/* <section className="page-1">
        <img src={require(`./Screenshot (35).png`)} alt="Screenshot" />
      </section> */}
     <section className="page-1-container">
      <div className="page-1">
        <div className="div1">
          <img src={line1} alt="" />
          <h1>Trusted companies</h1>
          <img src={line2} alt="" />
        </div>
        <div className="div2">
          <img src={img1} alt="" />
        </div>
        <div className="div3">
          <img src={line3} alt="" />
        </div>
        <div className="div4">
          <div className="subdiv1">
            <h1>Our service <br /> that we provide</h1>
          </div>
          <div className="subdiv2">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu. Laoreet orci nisl etiam risus ut nec. Facilisi ipsum viverra diam arcu massa amet non metus ornare.</p>
          </div>
        </div>
      </div>
      </section>

      <section className="page-2">
        <h1 className="h1">Our work</h1>
        <div className="page-2-container">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </section>

      <section className="footer-sec">
        <div className="page-3-container">
      <div className="page-3">
        <div className="fdiv1">
          <div className="fsdiv1">
              <h1>Let's work <br />together</h1>
              <div className="fsdiv2">
              <img src={logo} alt="logo" id="logo" />
               
               <div id="links-div">
               <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><div><img src={instagram} id="insta" /></div></a>
                <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><div><img src={twitter} id="twitter" /></div></a>
                <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><div><img src={facebook} id="facebook" /></div></a>
               </div>
                
              </div>
            
          </div>
          
        </div>

        <div className="fdiv2">
          <div id="fsdiv2-top">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu.</p>
            <button id="talk-btn">Let's Talk</button>
          </div>
          <div id="fsdiv2-bottom">
            <div className="address">
              <h1 className="heading">Address</h1>
              <p className="paragraph">0199 Taylor Park,<br /> North Dakota, USA</p>
            </div>
            <div className="call-us">
              <h1 className="heading">Call us on</h1>
              <p className="paragraph">+1 98723 42023 <br />
info@logoipsum.com</p>
            </div>
            <div className="policies">
              <h1 className="heading">Our Policies</h1>
              <p className="paragraph">Privacy Policy <br />
Terms of Use <br />
Refund Policy</p>
            </div>
          </div>
        </div>
      </div>
<div className="footer">
          <img src={line3} alt="" />
          <p >Copyright © Webalar. All Rights Reserved</p>
        </div>
      </div>

      
      </section>
    </>
  );
}

export default App;
