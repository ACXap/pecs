import { injectStores } from '@mobx-devtools/tools';
import StoreCard from "./store/CardStore";
import Cards from "./store/Cards";

const cards = new Cards();
const storeCard = new StoreCard();
const storeCardSchedule = new StoreCard();

injectStores({
	cards,
	storeCard,
	storeCardSchedule
});

export { storeCard, cards, storeCardSchedule }