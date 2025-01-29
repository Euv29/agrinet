import Image from "next/image";
import { IoHeartOutline, IoChatbubbleOutline, IoShareOutline, IoBarChartOutline, IoRepeatOutline, IoBookmarkOutline } from "react-icons/io5";

interface PostProps {
  userImage: string;
  userName: string;
  content: string;
  userArroba: string;
  likes: number;
  comments: number;
  shares: number;
  reach: number;
  reposts: number;
  postImage?: string;
}

const Post: React.FC<PostProps> = ({ userImage, userName, content, likes, comments, userArroba, reach, reposts, postImage }) => {
  return (
    <section className="flex gap-4 border-neutral-800 p-4 border-b">
      <section className="rounded-full min-w-1/3 user-img">
        <Image src={userImage} alt={userName} width={50} height={50} className="object-cover" />
      </section>
      <section className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <h3 className="font-semibold text-lg">{userName}</h3>
          <span className="text-neutral-600">{userArroba}</span>
        </div>
        <p className="min-h-8 text-neutral-200 text-sm">{content}</p>
        {postImage && (
          <a href="" className="bg-slate-400 rounded-3xl post-img-section">
            <Image src={postImage} alt="Post image" width={500} height={500} className="object-cover" />
          </a>
        )}
        <section className="flex justify-between mt-2 text-primary">
          <a href="#" className="flex items-center gap-1 icon-hover-comments">
            <IoChatbubbleOutline className="icon post-icon" />
            <span>{comments}</span>
          </a>
          <a href="#" className="flex items-center gap-1 icon-hover-reposts">
            <IoRepeatOutline className="icon post-icon" />
            <span>{reposts}</span>
          </a>
          <a href="#" className="flex items-center gap-1 icon-hover-likes">
            <IoHeartOutline className="icon post-icon" />
            <span>{likes}</span>
          </a>
          <a href="#" className="flex items-center gap-1 icon-hover-reach">
            <IoBarChartOutline className="icon post-icon" />
            <span>{reach}</span>
          </a>
          <div className="flex gap-2">
            <a href="#" className="flex items-center gap-1 icon-hover-bookmark">
              <IoBookmarkOutline className="icon post-icon" />
            </a>
            <a href="#" className="flex items-center gap-1 icon-hover-share post-icon">
              <IoShareOutline className="icon post-icon" />
            </a>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Post;