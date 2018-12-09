export class HistoricoSaldo {
    private _id: string;
    private _titulo: string;
    private _valor: string;
    private _data: string;

    constructor() {
        this._data =  (Math.floor(Math.random() * 31)+1) + " dez";
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
    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }
    public get valor(): string {
        return this._valor;
    }
    public set valor(value: string) {
        this._valor = value;
    }
    public get data(): string {
        return this._data;
    }
    public set data(value: string) {
        this._data = value;
    }
}