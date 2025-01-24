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
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-xl mb-4">
            <h1 className="my-3">Create a tweet</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a title here..."
                className="rounded-lg bg-slate-200 w-full p-2 mb-2 placeholder:text-xs"
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's in your mind..."
                className="rounded-lg bg-gray-200 w-full p-2 mb-2 placeholder:text-xs"
                required
            />
            <button type="submit" className="bg-[#111518] text-white px-4 py-1 rounded-full text-sm flex place-self-end">
                Tweet
            </button>
        </form>
    );
}
