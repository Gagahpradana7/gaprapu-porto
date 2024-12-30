import Link from "next/link";
import {
  RiTwitterLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiGithubFill,
  RiTwitchFill,
  RiTwitchLine,
  RiGithubLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/Gagahpradana7"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://x.com/Gaprapu"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterLine />
      </Link>
      <Link
        href={"https://www.instagram.com/simply.gnh?igsh=MXRycWs4NWd0ejYwdQ=="}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/profile.php?id=61571178158268"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookBoxLine />
      </Link>
    </div>
  );
};

export default Socials;
