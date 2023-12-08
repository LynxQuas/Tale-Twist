import PropTypes from "prop-types";
function FormContainer({ children }) {
    return (
        <div className="flex flex-col gap-10 bg-black p-10 rounded md:w-[50rem] text-sm font-extralight m-auto md:text-xl">
            {children}
        </div>
    );
}

FormContainer.propTypes = {
    children: PropTypes.node,
};
export default FormContainer;
