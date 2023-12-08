import { json, redirect } from "react-router-dom";

// get all blogs.
export async function blogsLoader() {
    const response = await fetch("http://localhost:8000/blogs");
    if (!response.ok) {
        throw json({ message: "Could not fetch Blogs." }, { status: 500 });
    } else {
        return response;
    }
}

// get blog detail
export async function blogDetailLoader({ params }) {
    const id = params.blogId;

    const blogResponse = await fetch(`http://localhost:8000/blogs/${id}`);

    if (!blogResponse.ok) {
        throw json(
            { message: "Could not fetch details for selected blog." },
            { status: 500 }
        );
    } else {
        const blogData = await blogResponse.json();
        const response = await fetch(
            `http://localhost:8000/users/${blogData.created_by}`
        );

        if (!response.ok) {
            throw json(
                { message: "Could not found the profile" },
                { status: 500 }
            );
        } else {
            const profileData = await response.json();

            return { blogData, profileData };
        }
    }
}

function getAuthToken() {
    const token = localStorage.getItem("user");
    return token;
}
export function checkAuthUser() {
    return getAuthToken();
}

export function authProtectedLoader() {
    const token = getAuthToken();

    if (!token) return redirect("/login");

    return token;
}
