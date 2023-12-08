/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";

function DisplayCommentContainer({ commentData, blogId }) {
    // get the loggedInuser from root loader.
    const loggedInUser = useRouteLoaderData("root");
    const userData = JSON.parse(loggedInUser);

    // states
    const [newComment, setNewComment] = useState("");
    const [editingComments, setEditingComments] = useState({});

    // all commented user profile and names.
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState(commentData);

    function handleEditCommentClick(commentId) {
        setEditingComments((prevEditingComments) => ({
            ...prevEditingComments,
            [commentId]: true,
        }));
    }

    function handleSaveEditedComment(commentId) {
        saveEditedComment(commentId, newComment);
        setEditingComments((prevEditingComments) => ({
            ...prevEditingComments,
            [commentId]: false,
        }));
    }

    function handleCommentChange(event) {
        setNewComment(event.target.value);
    }

    async function saveEditedComment(commentId, newComment) {
        try {
            const response = await fetch(
                `http://localhost:8000/blogs/${blogId}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        comments: comments.map((comment) =>
                            comment.id === commentId
                                ? { ...comment, comment: newComment }
                                : comment
                        ),
                    }),
                }
            );

            if (!response.ok) {
                console.error("Failed to save edited comment.");
            } else {
                const updatedCommentsResponse = await fetch(
                    `http://localhost:8000/blogs/${blogId}`
                );
                const updatedComments = await updatedCommentsResponse.json();
                setComments(updatedComments.comments);
            }
        } catch (error) {
            console.error("Error saving edited comment:", error);
        }
    }

    async function handleDeleteComment(commentId) {
        try {
            const response = await fetch(
                `http://localhost:8000/blogs/${blogId}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        comments: comments.filter(
                            (comment) => comment.id !== commentId
                        ),
                    }),
                }
            );

            if (!response.ok) {
                console.error("Failed to delete comment.");
            } else {
                const updatedCommentsResponse = await fetch(
                    `http://localhost:8000/blogs/${blogId}`
                );
                const updatedComments = await updatedCommentsResponse.json();
                setComments(updatedComments.comments);
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    }

    useEffect(() => {
        async function getUser() {
            try {
                const response = await fetch("http://localhost:8000/users/");
                const data = await response.json();

                setUser(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setLoading(false);
            }
        }

        getUser();
    }, [setUser, comments]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!comments.length) {
        return <p className="text-gray-300">No comments...</p>;
    }

    return (
        <div className="w-full md:w-[70%] md:m-auto h-[40rem] py-2 flex flex-col gap-5 overflow-y-scroll scrollbar custom-scrollbar text-gray-300">
            {comments.map((comment) => {
                const commentUser = user.find(
                    (u) => u.id === Number(comment.comment_by)
                );

                const isEditing = editingComments[comment.id];

                return (
                    <div
                        className="flex items-center bg-stone-900 md:p-10 py-10 px-4 first-letter:w-full gap-10  md:flex-row justify-center"
                        key={comment.id}
                    >
                        <div className="flex gap-5 w-1/4 items-center">
                            <img
                                className="w-10 h-10 bg-white rounded-full"
                                src={commentUser.profile}
                                alt={`${commentUser.username}'s profile`}
                            />
                            <h3 className="md:text-xl text-gray-300 font-bold">
                                {commentUser.username}
                            </h3>
                        </div>

                        <div className="flex gap-4  md:flex-nowrap  w-2/3 items-center md:flex-row">
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={newComment}
                                    onChange={handleCommentChange}
                                    className="text-stone-500 w-2/3"
                                />
                            ) : (
                                <p className="w-2/4 md:w-2/3 break-words ">
                                    {comment.comment}
                                </p>
                            )}

                            {userData?.username === commentUser.username && (
                                <div className="flex gap-5 md:w-2/3 justify-end m-2">
                                    {isEditing ? (
                                        <button
                                            className="text-green-500"
                                            onClick={() =>
                                                handleSaveEditedComment(
                                                    comment.id
                                                )
                                            }
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <button
                                            className="text-blue-700"
                                            onClick={() =>
                                                handleEditCommentClick(
                                                    comment.id
                                                )
                                            }
                                        >
                                            Edit
                                        </button>
                                    )}
                                    <button
                                        onClick={() =>
                                            handleDeleteComment(comment.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default DisplayCommentContainer;
