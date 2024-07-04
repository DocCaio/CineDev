import './vip.modules.css';

export interface AdInterface {   
    src: string;    
}

const Vip = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <img src='../../assets/PoltronaLivre.png' className="img-responsive foto-legenda" alt="Disponível"/>
                    <p>Disponível</p>
                </div>
                <div className="col-md-3">
                    <img  src='../../assets/PoltronaEscolhida.png' className="img-responsive foto-legenda" alt="Escolhida"/>
                    <p>Escolhida</p>
                </div>
                <div className="col-md-3">
                    <img  src='../../assets/PoltronaOcupada.png' className="img-responsive foto-legenda" alt="Ocupada"/>
                    <p>Ocupada</p>
                </div>
                <div className="col-md-3">
                    <img  src='../../assets/PoltronaEscolhida.png' className="img-responsive deficiente-legenda" alt="Preferencial"/>
                    <p>Preferencial</p>
                </div>
            </div>
        </>
    );
}

export default Vip;
