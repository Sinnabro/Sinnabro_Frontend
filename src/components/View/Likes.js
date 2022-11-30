const LikeButton = () => {
    const [likes, setLikes] = useState("");
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      if (isClicked) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
      setIsClicked(!isClicked);
    };
  
    return (
      <>
        <button
          className={`like-button ${isClicked && "liked"}`}
          onClick={handleClick}
        >
          <Like></Like>
        </button>
      </>
    );
  };