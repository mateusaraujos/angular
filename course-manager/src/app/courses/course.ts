// Classe que representa o curso.
export class Course {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    code: string;
    duration: number;
    rating: number;
    releaseDate: string;

    constructor(id: number, name: string, description: string, imageUrl: string, price: number, code: string, duration: number, rating: number, releaseDate: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.code = code;
        this.duration = duration;
        this.rating = rating;
        this.releaseDate = releaseDate;
    }
}