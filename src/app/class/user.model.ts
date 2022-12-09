export class User {
    email : string;
    firstName : string;
    lastName : string;
    password : string;
    pays :string;
    ville :string;
    cp : string;
    adresse :string;
    telephone :string;

    id: number;
    private static index: number = 0;

    constructor(email: string = "", password: string = "", firstName: string = "", lastName: string = "", pays: string = "", ville: string = "", cp: string = "", adresse: string = "", telephone: string = "") {
        this.id = User.index++;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.pays = pays;
        this.ville = ville;
        this.cp = cp;
        this.adresse = adresse;
        this.telephone = telephone;
    }
}
