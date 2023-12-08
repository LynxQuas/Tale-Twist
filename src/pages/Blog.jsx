import {
    Link,
    useNavigation,
    useRouteLoaderData,
    useSubmit,
} from "react-router-dom";
import BlogContainer from "../components/blogs/BlogContainer";
import BlogContent from "../components/blogs/BlogContent";
import BlogHeader from "../components/blogs/BlogHeader";
import CommentSection from "../components/blogs/CommentSection";
import DisplayCommentContainer from "../components/blogs/DisplayCommentContainer";
import SectionContainer from "../ui/containers/SectionContainer";
import { useState } from "react";

function Blog() {
    const navigation = useNavigation();

    const user = useRouteLoaderData("root");
    const userData = JSON.parse(user);
    const submit = useSubmit();
    const { blogData, profileData: profile } =
        useRouteLoaderData("blog-detail");

    const [comment, setComment] = useState("");

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handleCommentSubmit() {
        submit(null, { method: "PATCH" });
    }

    function startDeleteHandler() {
        const proceed = window.confirm("Are you sure");
        if (proceed) {
            submit(null, { method: "delete" });
        }
    }

    return (
        <SectionContainer bgColor="bg-stone-800">
            <BlogContainer>
                <BlogHeader
                    name={profile.username}
                    profile_image={profile.profile}
                    created_at={blogData.created_at}
                />

                {profile.username === userData?.username && (
                    <div>
                        <Link to="edit">
                            <button className="bg-blue-600 text-white py-1 px-4 my-4 mr-4">
                                Edit
                            </button>
                        </Link>
                        <button
                            className="bg-red-600 text-white py-1 px-4"
                            onClick={startDeleteHandler}
                        >
                            Delete
                        </button>
                    </div>
                )}

                <BlogContent
                    blog_title={blogData.title}
                    blog_image={blogData.image}
                    blog_content={blogData.body}
                />
                <div className="flex flex-col justify-center items-center">
                    <DisplayCommentContainer
                        commentData={blogData.comments}
                        blogId={blogData.id}
                    />
                    {user && (
                        <CommentSection
                            comment={comment}
                            onChange={handleCommentChange}
                            onSubmit={handleCommentSubmit}
                            status={navigation}
                        />
                    )}
                </div>
            </BlogContainer>
        </SectionContainer>
    );
}

export default Blog;
