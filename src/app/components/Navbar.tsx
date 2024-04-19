import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <div className="hover:text-yellow-300">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <div className="hover:text-yellow-300">Login</div>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <div className="hover:text-yellow-300">Signup</div>
          </Link>
        </li>
        <li>
            <Link href="/firestore">
                <div className="hover:text-yellow-300">firestore</div>
            </Link>
        </li>
      </ul>
    </nav>
  );
}