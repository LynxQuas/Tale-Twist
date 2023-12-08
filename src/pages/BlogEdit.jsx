import { useRouteLoaderData } from "react-router-dom";
import BlogForm from "../components/blogs/BlogForm";
import SectionContainer from "../ui/containers/SectionContainer";

function BlogEdit() {
    const data = useRouteLoaderData("blog-detail");
    console.log(data);
    return (
        <SectionContainer bgColor="bg-black">
            <BlogForm blog_data={data} method="patch" />
        </SectionContainer>
    );
}

export default BlogEdit;
