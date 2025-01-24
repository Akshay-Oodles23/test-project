export interface Post {
    [x: string]: any;
    id: string;
    title: string;
    content: string;
    comments: Comment[]
}

export interface Comment {
    id: string;
    content: string;
    replies: Comment[]
}
