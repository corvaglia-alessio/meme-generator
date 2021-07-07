class Font {
    constructor(id, font){
        this.id = id;
        this.font = font;
    }

    static from(json) {
       return new Font(json.id, json.font);
    }
}

export default Font;