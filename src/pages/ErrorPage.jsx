import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../ui/buttons/Button";
import Navbar from "../components/navBar/Navbar";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    // default errors
    let title = "Sorry, an unexpected error has occurred.";
    let message = "error";
    console.log(error);
    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = "Not Found!";
        message = "Could not find resources or page";
    }
    return (
        <>
            <Navbar />
            <div className="flex flex-col  md:w-[30rem] items-center justify-center m-5 mt-56 md:mt-56 md:m-auto gap-5 bg-gray-400 p-8 rounded font-bold text-lg">
                <p>{title}</p>
                <p>
                    <i>{message}</i>
                </p>

                <Button
                    className="bg-red-500 text-white p-3 rounded font-bold"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </Button>
            </div>
        </>
    );
}
