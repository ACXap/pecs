import {observer} from "mobx-react";
import {cards} from "../init";

function GroupCard(props) {
    const clickAddCard = (card) => props.store.addCard(card);
    const classN = "accordion-collapse collapse " + (props.show ? "show" : "");
    const classB = "accordion-button " + (props.show ? "" : "collapsed");

    return <div className="accordion-item">
        <h2 className="accordion-header" id={props.group}>
            <button className={classB} type="button" data-bs-toggle="collapse"
                    data-bs-target={"#" + props.group + props.id} aria-expanded="false" aria-controls={props.group}>
                {props.header}
            </button>
        </h2>
        <div id={props.group + props.id} className={classN} aria-labelledby={props.group}
             data-bs-parent="#accordionExample">

            {cards.listCard.filter(c => c.group === props.group).map(c => {
                return <div className={"row"} key={c.src}>
                    <div className={"col-8"}>
                        <img src={c.src} className="card-img-top" alt={""}
                             onClick={() => clickAddCard(c)} style={{width: "50%"}}/>
                    </div>
                    <div className={"col align-self-center f-strong"}>
                        {c.header}
                    </div>
                </div>
            })}

        </div>
    </div>;
}

function ListCard(props) {

    return <div className="accordion" id="accordionExample">
        {props.store.listGroup.map(g => {
            return <GroupCard id={props.id} store={props.store} group={g.title} header={g.header}
                              key={g.title}
                              show={g.title === "action"}/>
        })}
    </div>;
}

export default observer(ListCard);