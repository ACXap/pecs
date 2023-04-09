import { computed, makeObservable, observable } from "mobx";
import want from "../image/want.jpg";
import not_want from "../image/not_want.jpg";

export default class Cards {

	_listCard = [];

	constructor() {
		makeObservable(this, {
			_listCard: observable,
			listCard: computed
		});

		let c = { header: "Хочу", title: "Действие - Хочу", src: want, group: "action" };
		this._listCard.push(c);

		c = { header: "Не хочу", title: "Действие - Не хочу", src: not_want, group: "action" };
		this._listCard.push(c);
	}

	get listCard() {
		return this._listCard;
	}
}