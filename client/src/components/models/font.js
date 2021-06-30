class Font {
    constructor(id, font, size){
        this.id = id;
        this.font = font;
        this.size = size;
    }

    static from(json) {
       return new Font(json.id, json.font, json.size);
    }
}

export default Font;