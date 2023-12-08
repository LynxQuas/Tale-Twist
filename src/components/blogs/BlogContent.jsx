/* eslint-disable react/prop-types */
function BlogContent({ blog_title, blog_content, blog_image }) {
    return (
        <div className="flex flex-col gap-5 md:w-[70%]  md:m-auto">
            <h1 className="text-3xl text-stone-300 md:text-center">
                {blog_title}
            </h1>
            <img
                src={blog_image}
                alt=""
                className="w-[30rem] m-auto md:w-1/2"
            />

            <p className="text-stone-300 font-mono text-xl md:w-full">
                {blog_content}
            </p>
        </div>
    );
}

export default BlogContent;
