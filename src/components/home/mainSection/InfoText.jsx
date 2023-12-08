/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../../../ui/buttons/Button";
function InfoText({ data }) {
    return (
        <div className="text-stone-100 md:w-1/3">
            <p className="md:text-xl text-lg">
                Welcome to{" "}
                <i className="text-amber-200 text-2xl font-bold">TaleTwist</i>,
                where creativity finds its voice and stories come to life.
                Unleash your imagination, share your perspectives, and connect
                with a vibrant community of writers and readers.
            </p>

            {!data ? (
                <Link to="login">
                    <Button className="bg-green-500 p-2 rounded my-10">
                        Join Now &rarr;{" "}
                    </Button>
                </Link>
            ) : (
                <Link to="/profile">
                    <Button className="bg-green-500 p-2 rounded my-10">
                        Profile
                    </Button>
                </Link>
            )}
        </div>
    );
}

export default InfoText;
