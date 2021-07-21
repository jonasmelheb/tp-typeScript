class Sejour {
    constructor(public nom:string, public prix:number){
    }
}

class SejourService {
    sejours: Sejour[]
    constructor(){
        this.sejours = [new Sejour("france", 300), new Sejour("Prague", 400)];
    }

    findByName(nom: string) : Sejour |  void {
        this.sejours.forEach(sejour => {
            if (sejour.nom == nom) {
                console.log(sejour);
            }
        })
    }
}

const sejourService = new SejourService();
sejourService.findByName("france");

