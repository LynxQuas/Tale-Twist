import { NavLink, useRouteLoaderData, Form } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function NavItems({ width }) {
    const hover = "hover:text-amber-500";
    const token = useRouteLoaderData("root");

    return (
        <ul
            className={`flex justify-evenly ${width} font-semibold text-stone-100 text-xl`}
        >
            <li className="hover:text-amber-500">
                <NavLink
                    to={`/`}
                    className={({ isActive }) =>
                        isActive ? "text-amber-500" : ""
                    }
                    end
                >
                    Home
                </NavLink>
            </li>
            <li className={hover}>
                <NavLink
                    to={`/blogs`}
                    className={({ isActive }) =>
                        isActive ? `text-amber-500` : ""
                    }
                    end
                >
                    Blogs
                </NavLink>
            </li>

            {token && (
                <li className={hover}>
                    <NavLink
                        to={`/profile`}
                        className={({ isActive }) =>
                            isActive ? "text-amber-500" : ""
                        }
                        end
                    >
                        Profile
                    </NavLink>
                </li>
            )}

            {!token ? (
                <li className={hover}>
                    <NavLink
                        to={`/login`}
                        className={({ isActive }) =>
                            isActive ? "text-amber-500" : ""
                        }
                        end
                    >
                        Login
                    </NavLink>
                </li>
            ) : (
                <li className={hover}>
                    <Form action="/logout" method="post">
                        <button>logout</button>
                    </Form>
                </li>
            )}
        </ul>
    );
}

export default NavItems;
