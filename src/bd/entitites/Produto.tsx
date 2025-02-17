export default class Produto {

    codigo: number;
    nome: String;
    descricao : String;
    quantidade_estoque: number;
    ativo: boolean;
    valor: number;
    data_cadastro: Date;
    categoria: number;
    categoria_nome: String;

    constructor(codigo: number, nome: String, descricao: String, quantidade_estoque: number,
        ativo: boolean, valor: number, data_cadastro: Date, categoria: number, categoria_nome: String
    ) {
        this.codigo = codigo;
        this.nome = nome;
        this.descricao = descricao;
        this.quantidade_estoque = quantidade_estoque;
        this.ativo = ativo;
        this.valor = valor;
        this.data_cadastro = data_cadastro;
        this.categoria = categoria;
        this.categoria_nome = categoria_nome
    }
}

