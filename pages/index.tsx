import Link from 'next/link'
import { Header , Footer, DisplayTodo} from '@/components';
import Todos from './todos';
const Home = ()=>{
  return (
    <>
    {/* <Header/>
    <h1>Home Page</h1> */}
    {/* Link help us to render the page not redirecting the page / reloading  */}
    {/* <Link href="/blog">Go to Blog</Link>
    <Footer/> */}
    <Todos/>

    </>
  )

}
export default Home;