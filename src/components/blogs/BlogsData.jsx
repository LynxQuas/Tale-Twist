/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { formatDate } from "../../utlis/formatDate";

function BlogsData({ blogs }) {
    return (
        <div className="flex flex-wrap gap-10 w-full justify-center">
            {blogs.map((blog) => (
                <Link
                    to={`/blogs/${blog.id}`}
                    key={blog.id}
                    className="bg-stone-900 w-full md:max-w-[25rem] p-5 hover:bg-stone-700"
                >
                    <div className="max-h-[20rem] w-full">
                        <img
                            src={blog.image}
                            className="max-h-[20rem] w-full"
                        />
                    </div>

                    <div className="w-full text-stone-100 p-5 mt-5">
                        <h1>{blog.title}</h1>
                        <small className=" text-gray-400">
                            {formatDate(blog.created_at)}
                        </small>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default BlogsData;
