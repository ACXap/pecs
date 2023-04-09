import {observer} from "mobx-react";
import {cards} from "../init";

function ListCard(props) {

    const clickAddCard = (card) => props.store.addCard(card);

    return <div className="accordion" id="accordionExample">

        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target={"#collapseOne" + props.id} aria-expanded="true" aria-controls="collapseOne">
                    Действие
                </button>
            </h2>
            <div id={"collapseOne" + props.id} className="accordion-collapse collapse show"
                 aria-labelledby="headingOne" data-bs-parent="#accordionExample">

                {cards.listCard.filter(c => c.group === "action").map(c => {
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
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target={"#collapseTwo" + props.id} aria-expanded="false" aria-controls="collapseTwo">
                    Предмет
                </button>
            </h2>
            <div id={"collapseTwo" + props.id} className="accordion-collapse collapse" aria-labelledby="headingTwo"
                 data-bs-parent="#accordionExample">
                <div className="accordion-body">

                </div>
            </div>
        </div>
    </div>;
}

export default observer(ListCard);