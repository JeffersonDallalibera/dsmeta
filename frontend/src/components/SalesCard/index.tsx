import NotificationButton from "../NotificationButton"
import './styles.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import pt from 'date-fns/locale/pt';



function SalesCard() {
    registerLocale('pt', pt);
    
    const [minDate, setMinDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());


    return (
        <div className="ds-meta-card">
            <h2 className="Title-sales">Vendas</h2>
            <div>
                <div className="form-control-container">
                    <DatePicker
                        selected={minDate}
                        locale="pt"
                        onChange={(date: Date) => setMinDate(date)}
                        className="form-control-dates"
                        dateFormat="dd/MM/yyyy"
                    />

                </div>
                <div className="form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="form-control-dates"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="table-sales">
                    <thead >
                        <tr>
                            <th className="show-date-992">ID</th>
                            <th className="show-date-576">Data</th>
                            <th>Vendedor</th>
                            <th className="show-date-992">Visitas</th>
                            <th className="show-date-992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>

                            <td className="show-date-992">600486</td>
                            <td className="show-date-576">24/10/2022</td>
                            <td>Anakin</td>
                            <td className="show-date-992">15</td>
                            <td className="show-date-992">11</td>
                            <td>R$35.000,00</td>
                            <td>
                                <div className="btn-red-notify-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>



                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default SalesCard;