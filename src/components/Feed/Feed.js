import { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import InputOption from "./InputOption";
import "./Feed.scss";

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input type="text" placeholder="Start a post" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#7fc15e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#e7a33e" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#fc9295"
          />
        </div>
      </div>
      {posts.map((post) => (
        <Post />
      ))}
      <Post
        photoUrl="https://media-exp1.licdn.com/dms/image/C4D03AQGZ0UXshtyd5Q/profile-displayphoto-shrink_100_100/0/1615454969445?e=1631145600&v=beta&t=yBqlJnYKulQGvZO1gW6JESzEqaCdu17oLzt3M7oj8ao"
        name="Konstantin Taylor"
        description="How i feel right now 😃"
        message="Building this linkedin clone has been so much fun. I feel like I have learnt so much along the way!"
      />
    </div>
  );
}

export default Feed;
