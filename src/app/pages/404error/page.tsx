import Link from "next/link"

const NotFound = () => {

    return (
      <div>

        <h3>404</h3>
        <div>
        <p>Oops , not found</p>
        <span>Click to back</span>
        </div>
        <Link   style={{textDecoration: "none"}} href="/">
        Back Home page 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
           </svg>
          </Link>        
        </div>
    );

}

export default NotFound;