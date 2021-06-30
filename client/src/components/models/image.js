class Image {
    constructor(id, path, image, upleft, upcenter, upright, centerleft, centercenter, centerright, downleft, downcenter, downright){
        this.id=id;
        this.path=path;
        this.image=image;
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
       return new Image(json.id, json.path, json.image, json.upleft, json.upcenter, json.upright, json.centerleft, json.centercenter, json.centerright, json.downleft, json.downcenter, json.downright);
    }
}

export default Image;