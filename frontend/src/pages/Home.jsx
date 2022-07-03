import {
  Navbar,
  Search,
  Jobs,
  LoadMoreButton,
  Header,
  Card,
  Cards,
  CardDetail,
  Footer,
} from '../components';
import Test from '../components/Test.jsx';

function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="dark:bg-midnight pb-16 main-content">
        <Search />
        <Cards />
        <Footer />
      </main>
    </>
  );
}

export default Home;
