import {
    json,
    useActionData,
    useNavigate,
    useNavigation,
    useRouteLoaderData,
} from "react-router-dom";
import SectionContainer from "../ui/containers/SectionContainer";
import { useEffect, useState } from "react";
import BlogsData from "../components/blogs/BlogsData";

import EditProfileForm from "../ui/containers/EditProfileForm";

function Profile() {
    const navigate = useNavigate();

    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    const data = useActionData();

    const user = useRouteLoaderData("root");

    const [blogs, setBlogs] = useState([]);
    const userData = JSON.parse(user);

    const [isEditingProfile, setIsEditingProfile] = useState(false);

    function editProfileHandler() {
        setIsEditingProfile(true);
    }

    useEffect(() => {
        if (data) {
            setIsEditingProfile(false);
        }
    }, [data]);

    useEffect(() => {
        async function getUserBlogPosts() {
            const response = await fetch("http://localhost:8000/blogs/");

            if (!response.ok)
                throw json(
                    { message: "Could not fetch user blogs." },
                    { status: 500 }
                );

            const userBlogs = await response.json();

            setBlogs(userBlogs);
        }

        getUserBlogPosts();
    }, []);

    const userBlogs = blogs.filter((blog) => blog.created_by === userData.id);

    return (
        <SectionContainer bgColor="bg-black">
            {!isEditingProfile && (
                <>
                    <img
                        className="w-48 h-58  rounded-full"
                        src={userData.profile}
                    />
                    <div className="flex gap-5 items-center font-mono">
                        <h1 className="text-2xl text-stone-300">
                            {userData.username}
                        </h1>
                        <button
                            className="bg-blue-900 py-3 px-4 text-stone-100"
                            onClick={editProfileHandler}
                        >
                            Edit Profile
                        </button>
                    </div>

                    <BlogsData blogs={userBlogs} />
                </>
            )}

            {isEditingProfile && (
                <EditProfileForm
                    isSubmitting={isSubmitting}
                    userData={userData}
                    navigate={navigate}
                />
            )}
        </SectionContainer>
    );
}

export default Profile;
