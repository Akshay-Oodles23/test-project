import React, { useState } from "react";

interface Props {
    onAddPost: (title: string, content: string) => void;
}

export default function PostForm({ onAddPost }: Props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddPost(title, content);
        setTitle("");
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded mb-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post Title"
                className="border rounded w-full p-2 mb-2"
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Post Content"
                className="border rounded w-full p-2 mb-2"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Add Post
            </button>
        </form>
    );
}
