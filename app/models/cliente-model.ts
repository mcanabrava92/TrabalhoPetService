import BaseModel from "./base-model"

export default class ClienteModel extends BaseModel {
    telefone(telefone: any) {
      throw new Error("Method not implemented.")
    }
    nome: string
    dataNascimento: string
    contato: string
    servicoId: string

    constructor(obj?: any) {
        super()
        if (obj) {
            this.nome = obj.nome
            this.dataNascimento = obj.dataNascimento
            this.status = obj.status
            this.contato = obj.contato
            this.servicoId = obj.servicoId
        }
    }
}