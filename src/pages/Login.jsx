import Button from "../ui/buttons/Button";
import SectionContainer from "../ui/containers/SectionContainer";
import FormContainer from "../ui/containers/FormContainer";
import FormHeader from "../ui/containers/FormHeader";
import Input from "../ui/containers/Input";
import FormFooter from "../ui/containers/FormFooter";
import InputContainer from "../ui/containers/InputContainer";

import { Form } from "react-router-dom";

function Login() {
    return (
        <SectionContainer bgColor="bg-gray-800 text-stone-100">
            <Form method="post">
                <FormContainer>
                    <FormHeader />
                    <InputContainer>
                        <Input
                            type="text"
                            label="Username"
                            placeholder="Username"
                            name="username"
                            id="username"
                        />
                        <Input
                            type="password"
                            label="Password"
                            placeholder="Password"
                            name="password"
                            id="password"
                            className="w-full py-1 px-2 outline-none text-gray-500 bg-gray-300 rounded"
                        />
                    </InputContainer>
                    <Button className="bg-blue-600 w-1/3 py-1 px-2 rounded font-semibold m-auto hover:bg-blue-500">
                        Submit
                    </Button>

                    <FormFooter
                        text="dont't have account?"
                        link="register"
                        name="Register"
                    />
                </FormContainer>
            </Form>
        </SectionContainer>
    );
}

export async function action() {}

export default Login;
