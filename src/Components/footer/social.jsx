import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const SocialMedia = ()=>{
 return(
  <div className={"social"}>
   <div className="button-box">
    <div className="card-footer">
     <p>Site last updated:</p>
     <h4>22:12, 28.06.2020 (GMT+5)</h4>
    </div>
    <div className="card-footer">
    <p>Did you find an error on the site?</p>
     <p>Highlight the text and press <span>
     CTRL + ENTER
    </span></p>
    </div>
   </div>
   <div className="social-icons">
    <a className="social-icons-button" href="/">
     <TelegramIcon/>
    </a>
    <a className="social-icons-button" href="/">
     <InstagramIcon/>
    </a>
    <a className="social-icons-button" href="/">
     <FacebookIcon/>
    </a>
    <a className="social-icons-button" href="/">
     <YouTubeIcon/>
    </a>
   </div>
  </div>
 )
}