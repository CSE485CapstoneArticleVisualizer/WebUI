export class Subject {
    area: string;
    category: string[];
}

export class Group {
    name: string;
    value: string[];
}

export class Article {
    title: string;
    abstract: string;
    authors: string[];
    citedBy: string[];
    cites: string[];
    published_date: string;
    area: string;
    category: string;
    journal: string;
    link: string;
}
