export class User {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    // pays :string;
    // ville :string;
    // cp : string;
    // adresse :string;
    telephone: string;

    adresseComplete: any = {
        adresse: "",
        cp: "",
        ville: "",
        pays: "",
    }


    id: number;
    private static index: number = 0;

    constructor(email: string = "", password: string = "", firstName: string = "", lastName: string = "",adresse :string ="" , cp : string ="", ville :string ="", pays :string ="", telephone: string = "") {
        this.id = User.index++;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.adresseComplete = {adresse, cp, ville, pays};
        this.telephone = telephone;
    }
}
