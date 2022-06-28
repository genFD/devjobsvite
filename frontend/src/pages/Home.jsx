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
} from '../components';

function Home() {
  return (
    <main className="dark:bg-midnight">
      {/* <Header /> */}
      {/* <h1>test main </h1> */}
      {/* <Search />
      <Jobs />
      <LoadMoreButton /> */}
      <Search />
      <Cards />
      <Modal />
      <CardDetail />
    </main>
  );
}

export default Home;
