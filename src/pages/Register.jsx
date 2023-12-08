import { Form } from "react-router-dom";
import FormContainer from "../ui/containers/FormContainer";
import SectionContainer from "../ui/containers/SectionContainer";
import FormFooter from "../ui/containers/FormFooter";

function Register() {
    return (
        <div>
            <SectionContainer bgColor="bg-gray-800 text-stone-100">
                <Form method="post" className="w-full">
                    <FormContainer>
                        <div className="flex  items-center justify-between">
                            <label htmlFor="username" className="w-1/3">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="w-2/3 p-1 bg-stone-400"
                            />
                        </div>

                        <div className="flex  items-center justify-between">
                            <label htmlFor="password" className="w-1/3">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="w-2/3 p-1 bg-stone-400"
                            />
                        </div>

                        <div className="flex  items-center justify-between">
                            <label htmlFor="confirmPassword" className="w-1/3">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirm_password"
                                id="confirmPassword"
                                className="w-2/3 p-1 bg-stone-400"
                            />
                        </div>

                        <div className="flex  items-center justify-between">
                            <label htmlFor="phone" className="w-1/3">
                                Phone Number
                            </label>
                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                className="w-2/3 p-1 bg-stone-400"
                            />
                        </div>

                        <div className="w-1/3 m-auto">
                            <button className="bg-green-700 py-2 px-4">
                                Register
                            </button>
                        </div>

                        <FormFooter
                            text="already have an account?"
                            link="login"
                            name="Login"
                        />
                    </FormContainer>
                </Form>
            </SectionContainer>
        </div>
    );
}

export default Register;
