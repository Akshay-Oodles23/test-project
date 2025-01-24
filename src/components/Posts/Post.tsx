import { Post as PostType } from "../../types/types";
import CommentList from "./CommentList";


interface Props {
    post: PostType;
    onAddComment: (postId: string, content: string) => void;
    onReply: (postId: string, commentId: string, content: string) => void;
}

export default function Post({ post, onAddComment, onReply }: Props) {


    return (
        <div className="p-4 bg-white shadow rounded mb-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
            <CommentList comments={post.comments} onReply={(commentId, content) => onReply(post.id, commentId, content)} />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const content = (e.target as any).elements.commentContent.value;
                    onAddComment(post.id, content);
                    (e.target as any).reset();
                }}
                className="mt-4"
            >
                <input
                    type="text"
                    name="commentContent"
                    placeholder="Add a comment..."
                    className="border rounded w-full p-2"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
                    Add Comment
                </button>
            </form>
        </div>
    );
}
