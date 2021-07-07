class Meme {
    constructor(id, title, imageid, pub, userid, name, copy, color, font, size, text1, text2, text3){
        this.id=id;
        this.title=title;
        this.imageid=imageid;
        this.pub=pub;
        this.userid=userid;
        this.name=name;
        this.copy=copy;
        this.color=color;
        this.font=font;
        this.size=size;
        this.text1=text1;
        this.text2=text2;
        this.text3=text3;
    }

    static from(json) {
       return new Meme(json.id, json.title, json.imageid, json.pub, json.userid, json.name, json.copy, json.color, json.font, json.size, json.text1, json.text2, json.text3);
    }
}

export default Meme;