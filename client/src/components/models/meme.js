class Meme {
    constructor(id, title, imageid, pub, userid, name, copy, color, font, size, upleft, upcenter, upright, centerleft, centercenter, centerright, downleft, downcenter, downright){
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
        this.upleft=upleft;
        this.upcenter=upcenter;
        this.upright=upright;
        this.centerleft=centerleft;
        this.centercenter=centercenter;
        this.centerright=centerright;
        this.downleft=downleft;
        this.downcenter=downcenter;
        this.downright=downright;
    }

    static from(json) {
       return new Meme(json.id, json.title, json.imageid, json.pub, json.userid, json.name, json.copy, json.color, json.font, json.size, json.upleft, json.upcenter, json.upright, json.centerleft, json.centercenter, json.centerright, json.downleft, json.downcenter, json.downright);
    }
}

export default Meme;