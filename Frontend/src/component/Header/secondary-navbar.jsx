import Link from "next/link";

const SecondaryNavbar = () => {
  return (
    <header className="w-100 flex flex-wrap justify-around p-5">
      <div>
        <ul className="flex">
          <li className="px-3 font-semibold">
            <Link href={"/learn"}>Learn</Link>
          </li>
          <li className="px-3 font-semibold">
            <Link href="/job-preparation">Preparation</Link>
          </li>
          <li className="px-3 font-semibold">
            <Link href="/communities">Communities</Link>
          </li>
          <li className="px-3 font-semibold">
            <Link href="/success-stories">Success Stories</Link>
          </li>
          <li className="px-3 font-semibold">
            <Link href="/master-class">Master Class</Link>
          </li>
          <li className="px-3 font-semibold">
            <Link href="/resources">Resources</Link>
          </li>
          <li className="px-3 font-semibold">
            <Link href="/road-map">Roadmaps</Link>
          </li>
        </ul>
      </div>
      <button className="bg-white px-5 py-1 border-2 border-black rounded-md ">
        Login
      </button>
    </header>
  );
};

export default SecondaryNavbar;
