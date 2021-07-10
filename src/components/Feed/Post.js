import "./Post.scss";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SendIcon from '@material-ui/icons/Send';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';


function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__button">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="like" />
        <InputOption Icon={ChatOutlinedIcon} title="comment" />
        <InputOption Icon={ShareOutlinedIcon} title="share" />
        <InputOption Icon={SendIcon} title="send" />
      </div>
    </div>
  );
}

export default Post;
