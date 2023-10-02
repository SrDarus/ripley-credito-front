export class ConsultaCreditoResponse {
    public status: number
    public valorCuota: number
    constructor( status: number, valorCuota: number)
    {
        this.status = status
        this.valorCuota = valorCuota
    }
}
