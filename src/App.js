import {observer} from "mobx-react";
import {storeCard, storeCardSchedule} from "./init";
import Card from "./components/Card";
import Nav from "./components/Nav";

const CardList = observer(function CardList(props) {
    return <>{props.store.listCard.map(m => <Card card={m} key={m.id} store={props.store}/>)}</>;
});

function App() {
    return (
        <div className={"container-fluid"}>
            <Nav/>
            <div className={"row"}>

                <div className={"col-3"}>
                    <CardList store={storeCardSchedule}/>
                </div>

                <div className="col">
                    <div className={"row justify-content-center"}>
                        <CardList store={storeCard}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default observer(App);