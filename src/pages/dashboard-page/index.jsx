import Table from "../../components/table";
import Appbar from "../../components/appbar";
import Sidebar from "../../components/sidebar";
import Button from "@mui/material/Button"
import { Link } from "react-router-dom";


export default function Dashboard() {
    return (
        <section className="flex  bg-gray-100 h-screen">
            <Sidebar />
            <div className="flexbox justify-center ml-8 mr-6 w-5/6">
                <Appbar />
                <Table />
                <Link to="/userrequest">
                    <Button sx={{ bgcolor: "#1d4ed8" }} variant="contained">Make a request</Button>
                </Link>
                <Link to="/login">
                    <Button style={{ marginLeft: "10px" }} sx={{ bgcolor: "#1d4ed8" }} variant="contained">Sign in here</Button>
                </Link>
            </div>
        </section>
    );
}