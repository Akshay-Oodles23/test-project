import Post from "./Post";
import { Post as PostType } from "../types/types";

interface Props {
    posts: PostType[];
    onAddComment: (postId: string, content: string) => void;
    onReply: (postId: string, commentId: string, content: string) => void;
}

export default function PostList({ posts, onAddComment, onReply }: Props) {
    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} post={post} onAddComment={onAddComment} onReply={onReply} />
            ))}
        </div>
    );
}
