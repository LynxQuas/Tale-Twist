import { json, redirect } from "react-router-dom";

import { hashPassword, comparePasswords } from "./hashpassword";
import defaultImage from "/no-image-placeholder.jpg";

// delete blog.
export async function deleteBlog({ params, request }) {
    const blogId = params.blogId;
    const blogUrl = `http://localhost:8000/blogs/${blogId}`;
    const blogResponse = await fetch(blogUrl);
    const blog = await blogResponse.json();

    if (request.method === "PATCH") {
        const comment = await request.formData();
        const commentData = {
            id: (Math.random() * 100).toString(),
            comment_by: comment.get("comment_by"),
            comment: comment.get("comment"),
        };

        blog.comments.push(commentData);

        const commentResponse = await fetch(blogUrl, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        });

        if (!commentResponse.ok) {
            throw json(
                { message: "Could not delete or update blog." },
                { status: 500 }
            );
        }

        return commentResponse;
    }

    if (!blogResponse.ok) {
        throw new Error("Could not comment.");
    }

    if (request.method === "DELETE") {
        const deleteResponse = await fetch(blogUrl, { method: "delete" });

        if (!deleteResponse.ok)
            throw json({ message: "Could not delete post." }, { status: 500 });

        return redirect("/blogs");
    }
    return null;
}

// create or update blog.
export async function manipulateBlogAction({ request, params }) {
    // store the request method.
    const method = request.method;
    const data = await request.formData();

    const created_by = JSON.parse(localStorage.getItem("user")).id;

    // blue print obj for sending request.
    const blogData = {
        title: data.get("title"),
        created_by,
        created_at: new Date(),
        image: data.get("image") || defaultImage,
        body: data.get("body"),
        comments: [],
    };

    // base url
    let url = "http://localhost:8000/blogs";

    // if request is PATCH change the base_url to specific post url.
    if (method === "PATCH") {
        const eventId = params.blogId;

        url = "http://localhost:8000/blogs/" + eventId;
    }

    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "Application/json",
        },
        body: JSON.stringify(blogData),
    });

    if (!response.ok) {
        throw json({ message: "Could not create new Blog." }, { status: 500 });
    }

    return redirect("/blogs");
}

// create account.
export async function createUserAction({ request }) {
    const getUserFromDataBase = await fetch("http://localhost:8000/users");

    const users = await getUserFromDataBase.json();
    const data = await request.formData();

    const username = data.get("username");
    const password = data.get("password");
    const confirmPassword = data.get("confirm_password");
    const phone = data.get("phone");
    const profile =
        "https://i.pinimg.com/236x/29/55/59/295559e87b67fde4bbd5d5049d67e678.jpg";

    users.forEach((user) => {
        if (user.username === username)
            throw json({ message: "username already exist" }, { status: 500 });
    });

    if (!username || !password || !phone)
        throw json({ message: "Input could not be empty." }, { status: 500 });

    if (password !== confirmPassword)
        throw json({ message: "Password do not match" }, { status: 500 });

    const hashedPassword = await hashPassword(password);

    const userData = {
        username,
        password: hashedPassword,
        phone,
        profile,
    };

    await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json",
        },
        body: JSON.stringify(userData),
    });

    return redirect("/login");
}

// Login user.
export async function loginUser({ request }) {
    const data = await request.formData();

    const userDataResponse = await fetch("http://localhost:8000/users");
    const userData = await userDataResponse.json();

    const username = data.get("username");
    const enteredPassword = data.get("password");

    const user = userData.find((user) => user.username === username);

    if (user) {
        const isMatch = await comparePasswords(enteredPassword, user.password);

        if (isMatch) {
            localStorage.setItem("user", JSON.stringify(user));
            return redirect("/blogs");
        } else {
            throw json({ message: "Passwrod incorrect" }, { status: 500 });
        }
    } else {
        throw json(
            {
                message:
                    "User not found, check username and password and try again",
            },
            { status: 500 }
        );
    }
}

export function logout() {
    localStorage.removeItem("user");
    return redirect("/");
}

export async function editProfile({ request }) {
    const editData = await request.formData();
    const user_id = editData.get("id");
    const updatedPassword = editData.get("password");

    const updatedData = {
        id: user_id,
        password: updatedPassword,
        username: editData.get("username"),
        profile: editData.get("profile"),
        phone: editData.get("phone"),
    };

    const response = await fetch(`http://localhost:8000/users/${user_id}`, {
        method: request.method,
        headers: {
            "Content-Type": "Application/json",
        },

        body: JSON.stringify(updatedData),
    });

    if (!response.ok)
        throw json(
            { message: "Could not update the data, try again later" },
            { status: 500 }
        );

    const data = await response.json();

    localStorage.setItem("user", JSON.stringify(data));

    return data;
}
