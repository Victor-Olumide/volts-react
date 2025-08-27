import Link from "next/link";

export default function NavbarLink({ title, link }) {
  return (
    <li>
      <Link href={link}>{title}</Link>
    </li>
  );
}
