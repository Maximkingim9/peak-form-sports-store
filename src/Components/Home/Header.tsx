import { useState } from "react";
import { Link } from "react-router-dom";
import Countdown from "./Countdown";
import Container from "../../Layouts/Container";
import { useCart } from "../../Context/CartContext";
import { useAuth } from "../../Context/AuthContext";

const navigation = [
  { label: "Shop All", to: "/shop" },
  { label: "Running", to: "/shop?category=Running" },
  { label: "Fitness", to: "/shop?category=Fitness" },
  { label: "Team Sports", to: "/shop?category=Team%20Sports" },
  { label: "Outdoor", to: "/shop?category=Outdoor" },
];

const runningLinks = [
  { label: "Running shoes", to: "/shop?category=Running" },
  { label: "Running apparel", to: "/shop?category=Running" },
  { label: "Sports watches", to: "/shop?category=Running" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const { itemCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 bg-white text-[#20242c] shadow-sm">
      <Countdown />

      {/* Main header */}
      <Container className="flex min-h-[72px] items-center justify-between gap-4 border-b border-grayLight/60 py-3">

        {/* Logo */}
        <Link
          to="/"
          className="shrink-0 text-lg font-black uppercase tracking-[-0.06em] text-brandDark sm:text-xl"
        >
          Peak<span className="text-accent">Form</span>
        </Link>

        {/* Search */}
        <label className="hidden max-w-[390px] flex-1 items-center rounded-full border border-grayLight px-4 py-2 md:flex">
          <i
            className="bi bi-search mr-2 text-grayMuted"
            aria-hidden="true"
          />

          <input
            className="w-full bg-transparent text-sm outline-none placeholder:text-grayMuted"
            type="search"
            placeholder="Search sports gear"
          />
        </label>

        {/* Desktop account + cart */}
        <div className="hidden items-center gap-4 text-sm md:flex">
          {isAuthenticated ? (
            <>
              <Link
                to="/account"
                className="flex items-center gap-2 transition hover:text-brandDark"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff0e9] text-xs font-bold text-[#e8501a]">
                  {user?.name.charAt(0).toUpperCase()}
                </span>

                <span>
                  Hi, {user?.name.split(" ")[0]}
                </span>
              </Link>

              <span className="h-4 w-px bg-grayLight" />

              <button
                type="button"
                onClick={handleLogout}
                className="text-[#777e79] transition hover:text-[#e15c45]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                className="transition hover:text-brandDark"
                to="/login"
              >
                Sign in
              </Link>

              <span className="h-4 w-px bg-grayLight" />

              <Link
                className="transition hover:text-brandDark"
                to="/register"
              >
                Create account
              </Link>
            </>
          )}

          <span className="h-4 w-px bg-grayLight" />

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-lg"
            aria-label={`Shopping bag with ${ itemCount } items`}
          >
            <i className="bi bi-bag" />

            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red px-1 text-[9px] text-white">
              {itemCount}
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-grayLight text-lg md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <i
            className={`bi ${
  isMenuOpen ? "bi-x-lg" : "bi-list"
} `}
          />
        </button>
      </Container>

      {/* Desktop navigation */}
      <nav className="hidden border-b border-grayLight/60 md:block">
        <Container className="flex items-center justify-center gap-8 py-3 text-sm">
          <Link
            className="text-gray transition hover:text-brandDark"
            to="/shop"
          >
            Shop All
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsShopOpen(true)}
            onMouseLeave={() => setIsShopOpen(false)}
          >
            <Link
              to="/shop?category=Running"
              className="flex items-center gap-1 text-gray transition hover:text-brandDark"
            >
              Running

              <i
                className={`bi bi-chevron-down text-[10px] transition-transform ${
                  isShopOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            {isShopOpen && (
              <div className="absolute left-1/2 top-full z-20 w-44 -translate-x-1/2 pt-2">
                <div className="rounded-md border border-grayLight bg-white p-2 shadow-lg">
                  {runningLinks.map((link) => (
                    <Link
                      key={link.label}
                      className="block rounded px-3 py-2 text-sm hover:bg-grayOff"
                      to={link.to}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navigation.slice(2).map((item) => (
            <Link
              key={item.label}
              className="text-gray transition hover:text-brandDark"
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
        </Container>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="border-b border-grayLight/60 bg-white px-5 py-5 md:hidden">
          <label className="mb-5 flex items-center rounded-full border border-grayLight px-4 py-2">
            <i className="bi bi-search mr-2 text-grayMuted" />

            <input
              className="w-full bg-transparent text-sm outline-none"
              type="search"
              placeholder="Search sports gear"
            />
          </label>

          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className="rounded px-3 py-3 text-sm font-medium hover:bg-grayOff"
              >
                {item.label}
              </Link>
            ))}

            <div className="my-2 h-px bg-grayLight" />

            {isAuthenticated ? (
              <>
                <Link
                  to="/account"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 rounded px-3 py-3 text-sm font-medium hover:bg-grayOff"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff0e9] text-xs font-bold text-[#e8501a]">
                    {user?.name.charAt(0).toUpperCase()}
                  </span>

                  <span>
                    Hi, {user?.name.split(" ")[0]}
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded px-3 py-3 text-left text-sm font-medium text-[#e15c45] hover:bg-grayOff"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded px-3 py-3 text-sm font-medium hover:bg-grayOff"
                >
                  Sign in
                </Link>

                <Link
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded px-3 py-3 text-sm font-medium hover:bg-grayOff"
                >
                  Create account
                </Link>
              </>
            )}

            <Link
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between rounded px-3 py-3 text-sm font-medium hover:bg-grayOff"
            >
              <span>Shopping cart</span>

              <span className="rounded-full bg-[#ff5a1f] px-2 py-0.5 text-[9px] font-bold text-white">
                {itemCount}
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}