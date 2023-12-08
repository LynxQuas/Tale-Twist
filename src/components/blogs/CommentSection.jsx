/* eslint-disable react/prop-types */
import { Form, useRouteLoaderData } from "react-router-dom";

function CommentSection({ comment, onChange, status }) {
    const user = useRouteLoaderData("root");
    const userData = JSON.parse(user);

    return (
        <Form
            method="patch"
            className="flex justify-start gap-10 items-start flex-wrap md:w-[70%] p-10"
        >
            <div className="flex items-center gap-5">
                <img
                    src={userData.profile}
                    className="w-10 h-10 rounded-full bg-white"
                />

                <h3 className="text-xl text-gray-300 font-bold">
                    {userData.username}
                </h3>
            </div>
            <div className="flex flex-col items-start gap-5">
                <input type="hidden" value={userData.id} name="comment_by" />
                <textarea
                    name="comment"
                    id="comment"
                    cols="40"
                    rows="5"
                    value={comment}
                    onChange={onChange}
                    placeholder="Write a comment"
                    className="outline-none bg-gray-300 p-3 text-xl"
                ></textarea>
                <button
                    className="text-stone-100 bg-cyan-600 p-3 rounded"
                    disabled={status.state === "submitting"}
                >
                    {status.state === "submitting"
                        ? "Commenting..."
                        : "Comment"}
                </button>
            </div>
        </Form>
    );
}

export default CommentSection;
