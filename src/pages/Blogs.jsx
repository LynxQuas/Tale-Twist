import { useLoaderData, Link, useRouteLoaderData } from "react-router-dom";
import SectionContainer from "../ui/containers/SectionContainer";
import BlogsData from "../components/blogs/BlogsData";

function Blogs() {
    const user = useRouteLoaderData("root");
    const data = useLoaderData();
    const blogs = data;

    return (
        <SectionContainer bgColor="bg-neutral-800">
            {user && (
                <Link to="new" className="text-stone-100 bg-blue-900 py-2 px-5">
                    Create New Blog
                </Link>
            )}
            <BlogsData blogs={blogs} />
        </SectionContainer>
    );
}

export default Blogs;
