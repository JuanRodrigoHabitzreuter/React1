
function Relogio(){

    function pegarHoraAtual(){
    //código pegar hora atual
    return new Date().toLocaleTimeString('pt-BR');
        
    }
    return(
        <div>
            <h1>Relógio</h1>
            <p>Horário atual: {pegarHoraAtual()}</p>
        </div>
    )
}
export default Relogio;