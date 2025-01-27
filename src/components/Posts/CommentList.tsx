/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Comment } from "../../types/types";
import { getTImeAndData } from "../../utils/getTImeAndData";

interface Props {
  comments: Comment[];
  onReply: (commentId: string, content: string) => void;
}

export default function CommentList({ comments, onReply }: Props) {
  const [showInput, setShowInput] = useState<Record<string, boolean>>({});
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedDateTime = getTImeAndData(now);
    setCurrentDateTime(formattedDateTime);
  }, []);

  const toggleReplyInput = (commentId: string) => {
    setShowInput((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  return (
    <ul className="ml-4 w-full mt-2">
      {comments.map((comment) => (
        <li key={comment.id} className="mb-4">
          <div className="flex">
            <div className="w-8 h-8 sm:w-9 sm:h-9 mr-1 pt-1">
              <img
                src="https://randomuser.me/api/portraits/men/34.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="w-[85%] sm:w-[90%] flex flex-col px-2">
              <p className="font-semibold flex items-center gap-2">
                John Doe{" "}
                <span className="text-gray-400 text-xs flex items-center">
                  {currentDateTime}
                </span>
              </p>
              <p className="text-gray-600 font-medium text-sm">
                {comment.content}
              </p>

              <button
                onClick={() => toggleReplyInput(comment.id)}
                className="text-gray-500 font-medium text-xs mt-1 underline place-self-start cursor-pointer"
              >
                {showInput[comment.id] ? "Cancel" : "Reply"}
              </button>

              {showInput[comment.id] && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const content = (e.target as any).elements.replyContent
                      .value;
                    onReply(comment.id, content);
                    (e.target as any).reset();
                    toggleReplyInput(comment.id); // Close the input after replying
                  }}
                  className="mt-2"
                >
                  <input
                    type="text"
                    name="replyContent"
                    placeholder="Reply..."
                    className="rounded-lg bg-[#ededf080] w-full  px-4 py-0 sm:py-2 mb-2 placeholder:text-xs border border-gray-300 focus:outline-none focus:border-slate-500 font-normal"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#111518] text-white px-4 py-1 rounded-lg h-9 text-sm flex place-self-end items-center mt-1"
                  >
                    Reply
                  </button>
                  {/* <hr /> */}
                </form>
              )}

              {comment.replies.length > 0 && (
                <CommentList comments={comment.replies} onReply={onReply} />
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
