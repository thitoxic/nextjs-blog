import Blogs from "@/components/Blogs";
import Content from "@/components/Content";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="home h-screen">
      <Header/>
    <div className="content block w-full">
      <div className="inline-block w-1/6">
      <Content/>
      </div>
      <div className="inline-block w-5/6">
      <Blogs/>
      </div>
    </div>
    </div>
  );
}
