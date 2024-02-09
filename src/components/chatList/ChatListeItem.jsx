import Avatar from './Avatar';
import './chatList.css';

function ChatListItems({ name, animationDelay, isOnline, image, active }) {

  const selectChat = (e) => {
    for (let i = 0; i < e.currentTarget.parentNode.children.length; i++) {
      e.currentTarget.parentNode.children[i].classList.remove('active');
    }
    e.currentTarget.classList.add('active');
  };

  return (
    <div
      style={{ animationDelay: `0.${animationDelay}s` }}
      onClick={selectChat}
      className={`chatlist__item ${active ? 'active' : ''}`}
    >
      <Avatar
        image={image ? image : 'http://placehold.it/80x80'}
        isOnline={isOnline}
      />

      <div className="userMeta">
        <p>{name}</p>
        <span className="activeTime">32 mins ago</span>
      </div>
    </div>
  );
}


export default ChatListItems;
