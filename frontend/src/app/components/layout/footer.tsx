import { AiFillGithub } from "react-icons/Ai";
import { AiFillLinkedin } from "react-icons/Ai";
import Link from "next/link";

function Footer() {
  return (
    <nav className=" bg-gradient-to-t from-blue-500/20 to-blue-300/5 backdrop-blur-sm pt-2">
      <div className=" flex justify-between text-sm p-3">
        <div className="flex justify-between text-xs">
          <Link
            href="/"
            className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg"
          >
            Terms of Service
          </Link>
          <p className="text-slate-900/80  hover:backdrop-lg px-3">|</p>
          <Link
            href="/"
            className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg"
          >
            Privacy
          </Link>
          <p className="text-slate-900/80  hover:backdrop-lg px-3">|</p>
          <Link
            href="/"
            className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg"
          >
            Content Policy
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <Link
            href="https://github.com/sandessth/Blog-Post-NextJS"
            className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
          >
            <AiFillGithub />
            <div className="hidden text-xs text-white group-hover:block absolute bottom-8 right-0 bg-gray-500/80">
              See codes source in Github
            </div>
          </Link>
          <p className="text-slate-900/80  hover:backdrop-lg px-3">|</p>
          <Link
            href="/signin"
            className="text-slate-900/80 text-xl hover:text-blue-500 hover:backdrop-lg group relative"
          >
            <AiFillLinkedin />
            <div className="hidden text-sm  text-white group-hover:block absolute bottom-8 right-0 bg-gray-500/80">
              LinkedIn
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
