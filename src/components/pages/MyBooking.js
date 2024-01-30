import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";

export default function MyBooking(){
    const {user}=useContext(UserContext)

    return (
        <div>
            <div>
{    (user.role!="Client") &&  <Link className="bg-blue-500 text-white py-2 px-6 rounded-full" to={'/addcenterform'}>Add new service center</Link>
}            </div>

        </div>
    )
}       