import styles from './buttonsCine.module.css';

export interface AdInterface {   
    src: string;    
}

const Chairs = () => {

    const CalcularValorTotal = () => {
        // Implement the logic here
        console.log("CalcularValorTotal function called");
    };

    return (
        <section className={styles.links}>
            <div className="row buttons">
                <div className="col-xs-12">
                    <div className="col-md-4">
                        <button id="Liberar" className="btn btn-info">
                            Liberar Poltronas
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button type="submit" id="Calcular" onClick={CalcularValorTotal} className="btn btn-success">
                            Finalizar Reserva
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button type="submit" id="Sair" className="btn btn-danger">
                            Sair
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Chairs;
