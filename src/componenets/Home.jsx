import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/operator'>Operators</Link>
          </li>
          <li>
            <Link to='/tasks'>Tasks</Link>
          </li>
          <li>
            <Link to='/inventory'>Props</Link>
          </li>
        </ul>
      </nav >

    </>
  )
}

export default HomePage;
