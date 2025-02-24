import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen">

      <nav className="w-64 bg-blue-900 text-white min-h-screen p-6 fixed">
        <h2 className="text-xl font-semibold mb-6">Business Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className="block px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="block px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="block px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="block px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Users
            </Link>
          </li>
        </ul>


        <button
          onClick={handleLogout}
          className="w-full mt-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
        >
          Logout
        </button>
      </nav>


      <main className="ml-64 p-8 w-full">
        <Outlet />
      </main>
    </div>
  );
}
