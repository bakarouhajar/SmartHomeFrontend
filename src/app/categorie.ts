import { Appareil } from "./appareil";

export class Categorie {
  id : number | undefined;
  label : string | undefined;
  description : string | undefined;
  appareils : Appareil | undefined;
}
