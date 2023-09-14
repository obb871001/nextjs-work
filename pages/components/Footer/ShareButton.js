import {
    EmailShareButton,EmailIcon,
    FacebookShareButton,FacebookIcon,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,MailruIcon,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,TelegramIcon,LineIcon,
    TumblrShareButton,
    TwitterShareButton,TwitterIcon,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";

const ShareButton = () => {
    return (
        <div className="flex gap-[10px] my-4">
          {/* <FacebookShareButton
            className="hover:scale-110"
            url={'https://egslot.net/'}
            quote={'EAZY Gaming, leading the Global Gaming Market Trend!'}
            hashtag="EAZYGaming"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            className="hover:scale-110"
            url={'https://egslot.net/'}
            quote={'EAZY Gaming, leading the Global Gaming Market Trend!'}
            hashtag="EAZYGaming"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton> */}
          <TelegramShareButton
            className="hover:scale-110"
            url={'https://egslot.net/'}
            quote={'EAZY Gaming, leading the Global Gaming Market Trend!'}
            hashtag="EAZYGaming"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          {/* <LineShareButton
            className="hover:scale-110"
            url={'https://egslot.net/'}
            quote={'EAZY Gaming, leading the Global Gaming Market Trend!'}
            hashtag="EAZYGaming"
          >
            <LineIcon size={32} round />
          </LineShareButton> */}
          <EmailShareButton
            className="hover:scale-110"
            url={'https://egslot.net/'}
            quote={'EAZY Gaming, leading the Global Gaming Market Trend!'}
            hashtag="EAZYGaming"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      );
    };

export default ShareButton;