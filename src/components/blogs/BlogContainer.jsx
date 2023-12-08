// eslint-disable-next-line react/prop-types
function BlogContainer({ children }) {
    return (
        <div className="w-full flex flex-col gap-10 md:p-10">{children}</div>
    );
}

export default BlogContainer;
