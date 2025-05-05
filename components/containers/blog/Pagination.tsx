import Link from "next/link";

const Pagination = () => {
  return (
    <ul>
      <li>
        <Link className="page-numbers" href="/">
          01
        </Link>
      </li>
      <li>
        <Link className="page-numbers" href="/">
          02
        </Link>
      </li>
      <li>
        <Link className="page-numbers" href="/">
          03
        </Link>
      </li>
      <li>
        <Link className="page-numbers" href="/">
          04
        </Link>
      </li>
      <li>
        <Link className="page-numbers" href="/">
          05
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
