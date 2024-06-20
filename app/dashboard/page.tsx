import Container from "@/components/Container";
import { CirclePlus } from 'lucide-react';
import NavBar from "@/components/NavBar";

const PageDashboard = () => {
    return ( 
        <div>
            <NavBar/>
            <Container>
                <section className="max-w-[1000px] mx-auto flex justify-center px-3">
                    <button className="btn btn-success mt-5 px-10"><CirclePlus className="w-8 h-8 text-white"/></button>
                </section>
            </Container>
        </div>
     );
}
 
export default PageDashboard;