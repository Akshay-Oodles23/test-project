import { Comment, Post } from "../types/types";


export const addPost = (posts: Post[], title: string, content: string): Post[] => {
    const newPost: Post = {
        id: Date.now().toString(),
        title,
        content,
        comments: [],
    };
    return [newPost, ...posts ];
};

export const addComment = (
    posts: Post[],
    postId: string,
    commentContent: string
): Post[] => {
    return posts.map((post) =>
        post.id === postId
            ? {
                ...post,
                comments: [...post.comments, { id: Date.now().toString(), content: commentContent, replies: [] }],
            }
            : post
    );
};

export const addReply = (
    posts: Post[],
    postId: string,
    commentId: string,
    replyContent: string
): Post[] => {
    const addNestedReply = (comments: Comment[], commentId: string): Comment[] => {
        return comments.map((comment) =>
            comment.id === commentId
                ? {
                    ...comment,
                    replies: [
                        ...comment.replies,
                        { id: Date.now().toString(), content: replyContent, replies: [] },
                    ],
                }
                : { ...comment, replies: addNestedReply(comment.replies, commentId) }
        );
    };

    return posts.map((post) =>
        post.id === postId
            ? { ...post, comments: addNestedReply(post.comments, commentId) }
            : post
    );
};
