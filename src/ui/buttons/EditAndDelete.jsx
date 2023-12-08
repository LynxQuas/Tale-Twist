import { Link } from "react-router-dom";

function EditAndDelete() {
    return (
        <div>
            <Link to="edit">
                <button className="bg-blue-600 text-white py-1 px-4 my-4 mr-4">
                    Edit
                </button>
            </Link>
            <button className="bg-red-600 text-white py-1 px-4">Delete</button>
        </div>
    );
}

export default EditAndDelete;
