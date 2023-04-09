import React from 'react';
import Draggable from "react-draggable";
import {observer} from "mobx-react";
import "../css/card.css";

function Card(props) {
    const nodeRef = React.useRef(null);
    const close = () => props.store.removeCard(props.card);
    const size = props.store.sizeCard + "rem";

    return <Draggable nodeRef={nodeRef}>
        <div className="card" style={{width: size}} ref={nodeRef}>
            <img src={props.card.src} className="card-img-top nodrg" alt={props.card.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.card.header}</h5>
                <button className={"btn btn-outline m-0 btn-light card-close"}
                        title={"Удалить"} onClick={close}>X
                </button>
            </div>
        </div>
    </Draggable>;
}

export default observer(Card);