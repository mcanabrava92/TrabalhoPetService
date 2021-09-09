import BaseModel from "./base-model"

export default class VeterinarioModel extends BaseModel {
    nome: string
    especialidade: string
    dataAtendimento: string
    contato: string
    petId: string

    constructor(obj?: any) {
        super()
        if (obj) {
            this.nome = obj.nome
            this.especialidade = obj.especialidade
            this.status = obj.status
            this.dataAtendimento = obj.dataAtendimento
            this.contato = obj.contato
            this.petId = obj.petId
        }
    }
}