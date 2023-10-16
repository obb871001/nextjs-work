import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  MailruIcon,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TelegramIcon,
  LineIcon,
  TumblrShareButton,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

const ShareButton = () => {
  return (
    <div className="flex md:gap-[30px] gap-[15px] my-4">
      {/* <FacebookShareButton
        className="hover:scale-110"
        url={"https://egslot.net/"}
        quote={"EAZY Gaming, leading the Global Gaming Market Trend!"}
        hashtag="EAZYGaming"
      >
        <FacebookIcon size={48} round />
      </FacebookShareButton>
      <TwitterShareButton
        className="hover:scale-110"
        url={"https://egslot.net/"}
        quote={"EAZY Gaming, leading the Global Gaming Market Trend!"}
        hashtag="EAZYGaming"
      >
        <TwitterIcon size={48} round />
      </TwitterShareButton> */}
      <TelegramShareButton
        className="hover:scale-110"
        url={"https://telegram.me/share/url?url=https%3A%2F%2Fegslot.net%2F"}
        quote={"EAZY Gaming, leading the Global Gaming Market Trend!"}
        hashtag="EAZYGaming"
      >
        <TelegramIcon size={48} round />
      </TelegramShareButton>
      {/* <LineShareButton
        className="hover:scale-110"
        url={"https://egslot.net/"}
        quote={"EAZY Gaming, leading the Global Gaming Market Trend!"}
        hashtag="EAZYGaming"
      >
        <LineIcon size={48} round />
      </LineShareButton> */}
      <EmailShareButton
        className="hover:scale-110"
        url={"eazygame456@gmail.com"}
        quote={"EAZY Gaming, leading the Global Gaming Market Trend!"}
        hashtag="EAZYGaming"
      >
        <EmailIcon size={48} round />
      </EmailShareButton>
    </div>
  );
};

export default ShareButton;
