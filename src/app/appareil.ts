import { Categorie } from "./categorie";

export class Appareil {
	id: number | undefined;
	name: string | undefined;
	description: string | undefined;
	state: boolean | undefined;
	categories: Categorie | undefined;

}
