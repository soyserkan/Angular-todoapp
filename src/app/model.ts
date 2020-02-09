export class Model {
    user;
    items;

    constructor() {
        this.user = 'Serkan';
        this.items = [
            new TodoItem('Spor', true),
            new TodoItem('Kahvaltı', false),
            new TodoItem('Kitap Okumak', false),
            new TodoItem('Yüzmek', false),
        ];
    }
}


export class TodoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}