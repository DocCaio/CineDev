import Link from "next/link"

const NotFound = () => {

    return (
      <div>

        <h3>404</h3>
        <div>
        <p>Oops , not found</p>
        <span>Click to back</span>
        </div>
        <Link href="/">
           Back Home page
        </Link>
        </div>
    );

}

export default NotFound;