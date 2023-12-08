/* eslint-disable react/prop-types */
import { Form, Navigate } from "react-router-dom";

function EditProfileForm({ isSubmitting, userData }) {
    console.log(userData);
    return (
        <Form className="md:w-2/3 w-full" method="put">
            <input type="hidden" value={userData.id} name="id" />
            <div className="flex items-center mb-6 ">
                <label
                    htmlFor="username"
                    className="text-xl font-medium text-stone-100 w-1/5"
                >
                    username
                </label>
                <input
                    type="text"
                    id="username"
                    defaultValue={userData.username}
                    name="username"
                    className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
            </div>

            <input
                type="hidden"
                id="password"
                defaultValue={userData.password}
                name="password"
                className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
            />

            <div className="flex items-center mb-6 ">
                <label
                    htmlFor="image"
                    className="text-xl font-medium text-stone-100 w-1/5"
                >
                    profile
                </label>
                <input
                    type="text"
                    id="image"
                    name="profile"
                    defaultValue={userData.profile}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>

            <div className="flex items-center mb-6 ">
                <label
                    htmlFor="image"
                    className="text-xl font-medium text-stone-100 w-1/5"
                >
                    profile
                </label>
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    defaultValue={userData.phone}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>

            <div className="flex text-stone-100 gap-10 justify-end mt-10">
                <button
                    className="text-stone-100"
                    onClick={() => Navigate("..")}
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

export default EditProfileForm;
