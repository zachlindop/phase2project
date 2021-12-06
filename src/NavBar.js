import { NavLink } from "react-router-dom"




function NavBar(){

    return(<>

        <h1> Foods! </h1>

            <NavLink to="/">
                <h3>Home</h3>
            </NavLink>


                <NavLink to="/American">
                    <h4> American Food</h4>
                </NavLink>

                <NavLink to="/Mexican">
                    <h4> Mexican Food</h4>
                </NavLink>

                <NavLink to="/Asian">
                    <h4> Chinese Food </h4>
                </NavLink>

                <NavLink to="/Italian">
                    <h4> Italian </h4>
                </NavLink>

                <NavLink to="/Indian">
                    <h4> Indian </h4>
                </NavLink>


                


        <h1></h1>


            <br></br>
            <br></br>
            <br></br>
            <br></br>


    </>)

}
export default NavBar