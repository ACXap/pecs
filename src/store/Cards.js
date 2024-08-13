import { computed, makeObservable, observable } from "mobx";
import want from "../image/want.jpeg";
import not_want from "../image/not_want.jpeg";
import apple from "../image/apple.jpg";
import give from "../image/give.jpeg";
import help from "../image/help.jpeg";
import no from "../image/no.jpeg";
import stop from "../image/stop.jpeg";
import wait from "../image/wait.jpeg";
import yes from "../image/yes.jpeg";

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

		c = { header: "Дай", title: "Действие - Дай", src: give, group: "action" };
		this._listCard.push(c);

		c = { header: "Помоги", title: "Действие - Помоги", src: help, group: "action" };
		this._listCard.push(c);

		c = { header: "Да", title: "Действие - ДА", src: yes, group: "action" };
		this._listCard.push(c);

		c = { header: "Нет", title: "Действие - Нет", src: no, group: "action" };
		this._listCard.push(c);

		c = { header: "Стоп", title: "Действие - Стоп", src: stop, group: "action" };
		this._listCard.push(c);

		c = { header: "Жди", title: "Действие - Жди", src: wait, group: "action" };
		this._listCard.push(c);

		c = { header: "Яблоко", title: "Предмет - Яблоко", src: apple, group: "item" };
		this._listCard.push(c);
	}

	get listCard() {
		return this._listCard;
	}
}