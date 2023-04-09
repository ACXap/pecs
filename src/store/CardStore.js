import {action, computed, makeObservable, observable} from "mobx";

export default class StoreCard {

    _listCard = [];
    _searchText = "";
    _sizeCard = 10;
    _defaultSize = 10;

    constructor(defSize = 10) {
        this._defaultSize = defSize;
        this._sizeCard = defSize;
        makeObservable(this, {
            _listCard: observable,
            _sizeCard: observable,
            _searchText: observable,
            listCard: computed,
            sizeCard: computed,
            defaultSize: computed,
            searchText: computed,
            addCard: action,
            clearList: action,
            removeCard: action,
            changeSize: action,
            setSearchText: action
        });
    }

    get searchText() {
        return this._searchText;
    }

    get defaultSize() {
        return this._defaultSize;
    }

    get sizeCard() {
        return this._sizeCard;
    }

    get listCard() {
        if (!this._searchText) return this._listCard;

        const text = this._searchText;
        return this._listCard.filter(c => {
            return c.header.includes(text)
                || c.title.includes(text)
                || c.src.includes(text)
                || c.group.includes(text)
        });
    }

    addCard = (card) => {
        this._listCard.push({...card, id: Date.now()});
    }

    clearList = () => {
        this._listCard = [];
    }

    removeCard = (card) => {
        this._listCard = this._listCard.filter(c => c.id !== card.id);
    }

    changeSize = (e) => {
        this._sizeCard = e.target.value;
    }

    setSearchText = (e) => {
        this._searchText = e.target.value;
    }
}