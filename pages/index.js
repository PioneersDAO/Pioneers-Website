import Head from "next/head";
import Header from "../components/Header";
import BlogCard from "../components/BlogCard";
import Nav from "../components/nav";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Nav>
          <h2>test</h2>
        </Nav>
      </main>
      <Header title="Recent Blog" />
      <div className="flex flex-wrap justify-center w-70">
        <BlogCard
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. labore labore et dolore magna aliqua et dolore magna aliqua labore et dolore magna aliqua"
          image="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80"
        />
        <BlogCard
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. labore labore et dolore magna aliqua et dolore magna aliqua labore et dolore magna aliqua"
          image="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80"
        />
        <BlogCard
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. labore labore et dolore magna aliqua et dolore magna aliqua labore et dolore magna aliqua"
          image="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80"
        />
      </div>

      <Footer />
    </div>
  );
}
