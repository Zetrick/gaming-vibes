import Image from "next/image";
import Link from "next/link";

export default function Navbar()
{
  return (
    <div>
      <ul className="flex justify-end p-8">
        <li className="mr-8">
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/guides'>Guides</Link>
        </li>
      </ul>
      <div className="flex justify-center mb-12">
        <Image src="https://picsum.photos/1200/300" width={1200} height={300} alt="" />
      </div>
    </div>
  );
}