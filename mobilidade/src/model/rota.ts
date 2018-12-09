export class Rota {
    private _id: string;
    private _localPartida: string;
    private _localDestino: string;
    private _horario: string;
    private _avaliacaoMedia: string;
    private _foto: string;
    private _nome: string;
    
    constructor() {
        this._nome = "Rubinho Barrichello";
        this._foto = "data:image/jpeg;base64,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";
        this._avaliacaoMedia = (Math.floor(Math.random() * 50)/10).toString(); 
        this._horario = "0" + (Math.floor(Math.random() * 10)) + ":" + (Math.floor(Math.random() * 6))+"0";
    }

    // static copia(dados: any): Comentario {
    //     let comment: Comentario = new Comentario();
    //     comment.id = dados['_id'];
    //     comment.idAutor = dados['idUser'];
    //     comment.autor = dados['userName'];
    //     comment.nota = dados['rating'];
    //     comment.comentario = dados['message'];
    //     comment.data = new Date(dados['Created_date']);
    //     return comment;
    // }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get localPartida(): string {
        return this._localPartida;
    }
    public set localPartida(value: string) {
        this._localPartida = value;
    }
    public get localDestino(): string {
        return this._localDestino;
    }
    public set localDestino(value: string) {
        this._localDestino = value;
    }
    public get horario(): string {
        return this._horario;
    }
    public set horario(value: string) {
        this._horario = value;
    }
    public get avaliacaoMedia(): string {
        return this._avaliacaoMedia;
    }
    public set avaliacaoMedia(value: string) {
        this._avaliacaoMedia = value;
    }
    public get foto(): string {
        return this._foto;
    }
    public set foto(value: string) {
        this._foto = value;
    }


    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
}