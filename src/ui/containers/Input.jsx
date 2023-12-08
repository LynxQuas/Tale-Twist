import PropTypes from "prop-types";

function Input({ label, id, error, ...props }) {
    return (
        <div>
            <div className="flex items-center justify-between gap-2">
                <label htmlFor={id} className="text-gray-500 font-bold w-1/3">
                    {label}
                </label>
                <input
                    id={id}
                    className="w-full py-1 px-2 outline-none text-black bg-gray-300 roundend"
                    {...props}
                />
            </div>
            {error && <p className="text-center mt-1 text-red-400">{error}</p>}
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    error: PropTypes.string,
};

export default Input;
