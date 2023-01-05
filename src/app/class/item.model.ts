export class Item {
    nom: string;
    description: string;
    prix: number;
    photo: string;
    stock: number;


    id: number;
    private static index: number = 0;

    constructor(nom: string = "", description: string = "", photo: string = "", stock: number = 0, prix: number = 0) {
        this.id = Item.index++;
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.photo = photo;
        this.stock = stock;
    }

}
