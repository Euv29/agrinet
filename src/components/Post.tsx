import Image from "next/image";
import { IoHeartOutline, IoChatbubbleOutline, IoShareOutline } from "react-icons/io5";

interface PostProps {
  userImage: string;
  userName: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  reach: number;
}

const Post: React.FC<PostProps> = ({ userImage, userName, content, likes, comments, shares, reach }) => {
  return (
    <div className="flex gap-4 border-neutral-800 p-4 border-b">
      <div className="rounded-full w-[50px] h-[50px] overflow-hidden">
        <Image src={userImage} alt={userName} width={50} height={50} />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{userName}</h3>
        </div>
        <p className="text-neutral-200 text-sm">{content}</p>
        <div className="flex gap-4 mt-2 text-primary">
          <a href="#" className="flex items-center gap-1">
            <IoHeartOutline className="icon" />
            <span>{likes}</span>
          </a>
          <a href="#" className="flex items-center gap-1">
            <IoChatbubbleOutline className="icon" />
            <span>{comments}</span>
          </a>
          <a href="#" className="flex items-center gap-1">
            <IoShareOutline className="icon" />
            <span>{shares}</span>
          </a>
          <div className="flex items-center gap-1">
            <span>Reach:</span>
            <span>{reach}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;