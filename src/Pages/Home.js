import Navbar from '../Layers/Nav/Navbar';
import Header from '../Layers/Header/Header';
import Main from '../Layers/Main/Main-home';
import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentToken } from "../Features/Auth/authSlice"
import { Link } from "react-router-dom";

function Home() {
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)
  const welcome = user ? `welcome ${user}!` : 'welcome'
  // const tokenAbbr = `${token.slice(0,9)}...`

  return <>
    <h1>{welcome}</h1>
    {/* <p>Token: {tokenAbbr}</p> */}
    <Header />
    <Main/>
  </>
}

export default Home;