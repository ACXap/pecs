import {observer} from "mobx-react";
import {storeCard, storeCardSchedule} from "../init";
import NavCards from "./NavCards";

const ToggleButtonNav = observer(function ToggleButtonNav(props) {
    return <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                   data-bs-target={"#" + props.id} aria-controls={props.id}>
        {props.title}
    </button>;
});

function Nav() {
    return <nav className="navbar bg-light">
        <div className="container-fluid">
            <h1 className={"text-center"}>Общаемся вместе</h1>

            <ToggleButtonNav title={"Расписание"} id={"offcanvasNavbarSchedule"}/>

            <ToggleButtonNav title={"Карточки"} id={"offcanvasNavbar"}/>

            <NavCards store={storeCard} id={"offcanvasNavbar"} title={"Карточки"}/>

            <NavCards store={storeCardSchedule} id={"offcanvasNavbarSchedule"} title={"Расписание"}/>
        </div>
    </nav>;
}

export default observer(Nav);