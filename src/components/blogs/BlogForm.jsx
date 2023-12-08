/* eslint-disable react/prop-types */
import { Form, useNavigate, useNavigation } from "react-router-dom";

function BlogForm({ method, blog_data }) {
    const navigate = useNavigate();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === "submitting";

    return (
        <Form className="md:w-2/3 w-full" method={method}>
            <div className="flex items-center mb-6 ">
                <label
                    htmlFor="title"
                    className="text-xl font-medium text-stone-100 w-1/5"
                >
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    defaultValue={
                        blog_data?.blogData ? blog_data.blogData.title : ""
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
            </div>

            <div className="flex items-center mb-6 ">
                <label
                    htmlFor="image"
                    className="text-xl font-medium text-stone-100 w-1/5"
                >
                    Image
                </label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    defaultValue={
                        blog_data?.blogData ? blog_data.blogData.image : ""
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>

            <div className="flex items-center mb-6 gap-2 md:gap-0">
                <label
                    htmlFor="description"
                    className="text-sm font-medium text-gray-900 dark:text-white w-1/5"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    rows="4"
                    name="body"
                    defaultValue={
                        blog_data?.blogData ? blog_data.blogData.body : ""
                    }
                    className="block p-2.5 w-full md:w-4/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                ></textarea>
            </div>

            <div className="flex text-stone-100 gap-10 justify-end mt-10">
                <button
                    className="text-stone-100"
                    onClick={() => navigate("..")}
                >
                    Cancel
                </button>
                <button
                    className="bg-stone-200 py-2 px-6 text-stone-900 font-semibold rounded-sm"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting" : "Save"}
                </button>
            </div>
        </Form>
    );
}

export default BlogForm;
