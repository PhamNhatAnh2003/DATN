import { useState } from "react";
import { Link } from "react-router-dom";
// import Container from "./Container";
// import MobileSidebar from "./MobileSidebar";
// import NavbarSearch from "./NavbarSearch";
// import NavItem from "../../layouts/Header/Components/NavItem/NavItem";

// import Logo from "./Logo";
// import NavbarActions from "./NavbarActions";
import Button from "../../components/Button/Button";
import "./Navbar.scss";

const Navbar = ({ user, handleLogout }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // const router = useRouter();

    return (
        <div className="navbar">
            {/* <Container> */}
                <div className="navbar__content">
                    {/* <MobileSidebar> */}
                        {/* <NavbarSearch /> */}
                        {/* <NavItem /> */}
                    {/* </MobileSidebar> */}

                    <div className="navbar__logo">
                        {/* <Logo /> */}
                        {/* <Link
                            href="/admin-sign-in"
                            className="navbar__admin-link"
                        >
                            .
                        </Link> */}
                        {/* <NavItem /> */}
                    </div>

                    {/* <div className="navbar__search">
                        <NavbarSearch />
                    </div> */}

                    <div className="navbar__actions">
                        {/* <NavbarActions /> */}
                        {user ? (
                            <div className="navbar__user">
                                <div
                                    className="navbar__avatar"
                                    onClick={() =>
                                        setDropdownOpen(!dropdownOpen)
                                    }
                                >
                                    <img
                                        src="/default-avatar.png"
                                        alt={user.name || "User Avatar"}
                                    />
                                </div>

                                {dropdownOpen && (
                                    <div className="navbar__dropdown">
                                        <button
                                            onClick={() =>
                                                router.push("/user-orders")
                                            }
                                        >
                                            My Orders
                                        </button>
                                        <button onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="navbar__auth">
                                <Button asChild>
                                    <Link href="/customer-sign-up">
                                        Sign up
                                    </Link>
                                </Button>
                                <Button asChild>
                                    <Link href="/customer-sign-in">
                                        Sign In
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            {/* </Container> */}
        </div>
    );
};

export default Navbar;
