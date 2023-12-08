import BlogForm from "../components/blogs/BlogForm";
import SectionContainer from "../ui/containers/SectionContainer";

function BlogNew() {
    return (
        <SectionContainer bgColor="bg-black">
            <BlogForm method={"post"} />
        </SectionContainer>
    );
}

export default BlogNew;
