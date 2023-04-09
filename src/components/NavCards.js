import {observer} from "mobx-react";
import ListCard from "./ListCard";

const CardsControls = observer(function CardsControls(props) {
    const {defaultSize, sizeCard, clearList, changeSize} = props.store;

    return <>
        <div>
            <label htmlFor="customRange3" className="form-label mt-5">Размер
                карточки {Math.ceil((sizeCard / defaultSize) * 100) + "%"}</label>
            <input type="range" className="form-range" min="5" max="20" step="2" id="customRange3"
                   onChange={changeSize} value={sizeCard}/>
        </div>
        <button className={"btn btn-primary my-5"} onClick={clearList}>Очистить поле</button>
    </>;
});

const SearchCards = observer(function SearchCards(props) {
    const {searchText, setSearchText} = props.store;

    return <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Поиск" aria-label="Username"
               aria-describedby="basic-addon1" onChange={setSearchText} value={searchText} disabled={true}/>
    </div>;
});

const NavContainer = observer(function NavContainer(props) {
    return <div className="offcanvas offcanvas-end" tabIndex="-1" id={props.id}
                aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">{props.title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            {props.children}
        </div>
    </div>
});

function NavCards(props) {

    return <NavContainer id={props.id} title={props.title}>
        <SearchCards store={props.store}/>
        <ListCard store={props.store} id={props.id}/>
        <CardsControls store={props.store}/>
    </NavContainer>
}

export default observer(NavCards);