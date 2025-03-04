import ThemeToggleButton from "@/components/header/ThemeToggleButton";
import Link from "next/link";
import clsx from "clsx";
import NavMenu from "@/components/header/NavMenu";
import NavLinks from "@/components/header/NavLinks";

export const LogoDemo = () => {
  return (
    <svg fill='none' height='36' viewBox='0 0 32 32' width='36'>
      <path
        clipRule='evenodd'
        d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
};

const Header = () => {
  const ActionLink = ({ className }: { className?: string }) => (
    <Link
      className={clsx("py-2 px-4 rounded-md accent-soft-hover", className)}
      href='/contact'
    >
      Hire Me
    </Link>
  );
  return (
    <header className='bg-background-main dark:bg-background-main-dark nav-container fixed top-0 left-0 right-0 h-16 md:h-20 z-50 flex items-center'>
      <nav className='flex gap-4 lg:gap-10 items-center w-full transition-colors duration-300 font-semibold text-strong dark:text-strong-dark'>
        <Link
          className='flex gap-1 items-center '
          href='/'
          aria-label='Go to Home page'
        >
          <LogoDemo />
          Matthew Scarcella
        </Link>

        <div className='flex flex-grow inherit-gap items-center justify-end'>
          <ul className='hidden lg:flex inherit-gap  items-center'>
            <NavLinks />
          </ul>
          <ActionLink className='hidden lg:block' />
          <ThemeToggleButton />
          <NavMenu>
            <NavLinks />
            <ActionLink />
          </NavMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
