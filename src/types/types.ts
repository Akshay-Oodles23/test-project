export interface Post {
    id: string;
    title: string;
    content: string;
    comments: Comment[];
    hashtag?: string[];
    reactions?: {
        likes: string,
        comments: string,
        shares: string
    }
    [key: string]: unknown;
}


export interface Comment {
    id: string;
    content: string;
    replies: Comment[]
}
