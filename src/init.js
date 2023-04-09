import { injectStores } from '@mobx-devtools/tools';
import StoreCard from "./store/CardStore";
import Cards from "./store/Cards";

const cards = new Cards();
const storeCard = new StoreCard(14);
const storeCardSchedule = new StoreCard(10);

injectStores({
	cards,
	storeCard,
	storeCardSchedule
});

export { storeCard, cards, storeCardSchedule }