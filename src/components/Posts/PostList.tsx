import Post from "./Post";
import { Post as PostType } from "../../types/types";

interface Props {
    posts: PostType[];
    onAddComment: (postId: string, content: string) => void;
    onReply: (postId: string, commentId: string, content: string) => void;
}

export default function PostList({ posts, onAddComment, onReply }: Props) {
    console.log("[PostList] Posts:", posts);

    // Placeholder post to display when the list is empty
    const placeholderPost: PostType = {
        id: "placeholder",
        title: "No Posts Yet",
        content: "Be the first to create a post and engage with the community!",
        comments: [],
        hashtag: ["community", "welcome"],
        reactions: { likes: "0", comments: "0", shares: "0" },
    };

    return (
        <div>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <Post
                        key={post.id}
                        post={post}
                        onAddComment={onAddComment}
                        onReply={onReply}
                    />
                ))
            ) : (
                <Post
                    key={placeholderPost.id}
                    post={placeholderPost}
                    onAddComment={() => console.log("Placeholder comment")}
                    onReply={() => console.log("Placeholder reply")}
                />
            )}
        </div>
    );
}
