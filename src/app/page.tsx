
import TopNav from "./components/topnav";
import Header from "./components/header";
import Banner from "./components/banner";
import Editor from "./components/editor";
import Shop from "./components/shop";
import ClassicProduct from "./components/classicproduct";
import Neural from "./components/neural";
import Featured from "./components/featured";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
     <TopNav/>
     <Header/>
     <Banner/>
     <Editor/>
     <Shop/>
     <ClassicProduct/>
     <Neural/>
     <Featured/>
     <Footer/>
    
    </div>
  );
}
