import hello from '../../assets/hello.png';
import Chart from '../charts/Chart';
import './Main.css';

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1>Olá William</h1>
                        <p>Bem vindo ao seu painel</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className="card">
                        <i className="fas fa-file-alt fa-2x text-lightblue" />
                        <div className="card_inner">
                            <p className="text-primary-p"> Número de pedidos</p>
                            <span className="font-bold text-title"> 658</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fas fa-money-check-alt fa-2x text-red" />
                        <div className="card_inner">
                            <p className="text-primary-p"> Pagamentos</p>
                            <span className="font-bold text-title"> R$3.658,00</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fas fa-archive fa-2x text-yellow" />
                        <div className="card_inner">
                            <p className="text-primary-p"> Número de produtos</p>
                            <span className="font-bold text-title"> 520 </span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fas fa-bars fa-2x text-green" />
                        <div className="card_inner">
                            <p className="text-primary-p"> Categorias </p>
                            <span className="font-bold text-title"> 30 </span>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>São Paulo, BR</p>
                            </div>
                            <i className="fas fa-dollar-sign" />
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>São Paulo, BR</p>
                            </div>
                            <i className="fas fa-chart-area" />
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Lucro</h1>
                                <p>R$2.548,00</p>
                            </div>

                            <div className="card2">
                                <h1>Pagamentos</h1>
                                <p>R548,00</p>
                            </div>

                            <div className="card3">
                                <h1>Custos de hospedagem</h1>
                                <p>R$150,00</p>
                            </div>

                            <div className="card4">
                                <h1>Banco de dados</h1>
                                <p>R$198,00</p>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;