import {
  Navbar,
  Search,
  Jobs,
  LoadMoreButton,
  Header,
  Card,
  Cards,
  Modal,
  CardDetail,
  Footer,
} from '../components';
import Test from '../components/Test.jsx';

function Home() {
  return (
    <main className="dark:bg-midnight pb-16 main-content">
      {/* <Header /> */}
      {/* <h1>test main </h1> */}
      {/* <Search />
      <Jobs />
      <LoadMoreButton /> */}
      <Search />
      <Cards />
      {/* <Modal /> */}
      {/* <CardDetail /> */}
      {/* <Test /> */}
      <Footer />
    </main>
  );
}

export default Home;
