import Table from "../../components/table";
import Appbar from "../../components/appbar";
import Sidebar from "../../components/sidebar";



export default function Dashboard() {
    return (
        <section className="flex  bg-gray-100 h-screen">
            <Sidebar />
            <div className="flexbox justify-center ml-8 mr-6 w-5/6">
                <Appbar />
                <Table />
            </div>
        </section>
    );
}