import {observer} from "mobx-react";
import ListCard from "./ListCard";

function NavCards(props) {

    const {defaultSize, sizeCard, searchText, setSearchText, clearList, changeSize} = props.store;

    return <div className="offcanvas offcanvas-end" tabIndex="-1" id={props.id}
                aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">{props.title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Поиск" aria-label="Username"
                       aria-describedby="basic-addon1" onChange={setSearchText} value={searchText} disabled={true}/>
            </div>
            <ListCard store={props.store} id={props.id}/>
            <div>
                <label htmlFor="customRange3" className="form-label mt-5">Размер
                    карточки {Math.ceil((sizeCard / defaultSize) * 100) + "%"}</label>
                <input type="range" className="form-range" min="5" max="20" step="2" id="customRange3"
                       onChange={changeSize} value={sizeCard}/>
            </div>
            <button className={"btn btn-primary my-5"} onClick={clearList}>Очистить поле</button>
        </div>
    </div>;
}

export default observer(NavCards);