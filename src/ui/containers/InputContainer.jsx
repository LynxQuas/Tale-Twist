import PropTypes from "prop-types";
function InputContainer({ children }) {
    return (
        <div className="flex flex-col gap-5 md:w-[90%] md:m-auto">
            {children}
        </div>
    );
}

InputContainer.propTypes = {
    children: PropTypes.node,
};

export default InputContainer;
