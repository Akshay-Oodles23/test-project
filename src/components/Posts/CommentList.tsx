import { Comment } from "../../types/types";


interface Props {
    comments: Comment[];
    onReply: (commentId: string, content: string) => void;
}

export default function CommentList({ comments, onReply }: Props) {

    return (
        <ul className="ml-4">
            {comments.map((comment) => (
                <li key={comment.id} className="border p-2 mb-2">
                    <p>{comment.content}</p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const content = (e.target as any).elements.replyContent.value;
                            onReply(comment.id, content);
                            (e.target as any).reset();
                        }}
                        className="mt-2"
                    >
                        <input
                            type="text"
                            name="replyContent"
                            placeholder="Reply..."
                            className="border rounded w-full p-2"
                            required
                        />
                        <button type="submit" className="bg-gray-300 text-black p-1 rounded mt-1">
                            Reply
                        </button>
                    </form>
                    {comment.replies.length > 0 && <CommentList comments={comment.replies} onReply={onReply} />}
                </li>
            ))}
        </ul>
    );
}
