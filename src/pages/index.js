
import Nav from "@/layout/nav";
import Header from '@/layout/header';
import Main from '@/layout/main';
import Footer from "@/layout/footer";


export default function Home() {



  
  return (
    <div>

      <div className="sticky top-0 z-2 bg-white">
        <nav>
          <Nav/>
        </nav>
      </div>

      <header>
        <Header/>
      </header>

      <main>
        <Main/>
      </main>

      <footer>
        <Footer/>
      </footer>



    </div>

  );
}
