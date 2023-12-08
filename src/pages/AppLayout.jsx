import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/navBar/Navbar";
import Loader from "../ui/loadings/Loader";

function AppLayout() {
    const navigation = useNavigation();

    const isLoading = navigation.state === "loading";

    return (
        <>
            <header>
                <Navbar />
            </header>

            <main className="min-h-screen">
                {isLoading ? <Loader /> : <Outlet />}
            </main>
        </>
    );
}

export default AppLayout;
