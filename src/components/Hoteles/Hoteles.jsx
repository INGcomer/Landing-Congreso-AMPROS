import { motion } from "framer-motion"
// CSS
import "./Hoteles.css"

export default function Hoteles() {
    return (
        <section id="Hoteles">
            <h1> Hoteles </h1>
            <div class="table-wrapper">
                <table class="fl-table">
                    <thead>
                        <tr>
                            <th className="title" colspan="4">HOTEL ARGENTINO</th>
                        </tr>
                        <tr>
                            <th>RM</th>
                            <th>HABITACIONES</th>
                            <th>RACK</th>
                            <th>AMPROS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>STANDARD</td>
                            <td>SGL</td>
                            <td>$31.472,00</td>
                            <td>$28.325,00</td>
                        </tr>
                        <tr>
                            <td>STANDARD</td>
                            <td>DBL</td>
                            <td>$37.975,00</td>
                            <td>$34.178,00</td>
                        </tr>
                        <tr>
                            <td>STANDARD</td>
                            <td>TPL</td>
                            <td>$46.625,00</td>
                            <td>$41.962,00</td>
                        </tr>
                        <tr>
                            <td>EJECUTIVA</td>
                            <td>SGL</td>
                            <td>$35.817,00</td>
                            <td>$32.235,00</td>
                        </tr>
                        <tr>
                            <td>EJECUTIVA</td>
                            <td>DBL</td>
                            <td>$42.299,00</td>
                            <td>$38.069,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="table-wrapper">
                <table class="fl-table">
                    <thead>
                        <tr>
                            <th className="title" colspan="4">HOTEL CRILLON</th>
                        </tr>
                        <tr>
                            <th>RM</th>
                            <th>HABITACIONES</th>
                            <th>RACK</th>
                            <th>AMPROS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>STANDARD</td>
                            <td>SGL</td>
                            <td>$27.000,00</td>
                            <td>$24.000,00</td>
                        </tr>
                        <tr>
                            <td>STANDARD</td>
                            <td>DBL</td>
                            <td>$32.000,00</td>
                            <td>$28.000,00</td>
                        </tr>
                        <tr>
                            <td>STANDARD</td>
                            <td>TPL</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>EJECUTIVA</td>
                            <td>SGL - DBL</td>
                            <td>$37.000,00</td>
                            <td>$33.300,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="table-wrapper">
                <table class="fl-table">
                    <thead>
                        <tr>
                            <th className="title" colspan="4">AMPROS</th>
                        </tr>
                        <tr>
                            <th>HABITACIONES</th>
                            <th>ROYAL PRINCESS</th>
                            <th>PRINCESS</th>
                            <th>CAROLLO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SINGLE</td>
                            <td>$30.600,00</td>
                            <td>$19.300,00</td>
                            <td>$16.900,00</td>
                        </tr>
                        <tr>
                            <td>DOBLE</td>
                            <td>$36.500,00</td>
                            <td>$22.700,00	</td>
                            <td>$21.000,00</td>
                        </tr>
                        <tr>
                            <td>TRIPLE</td>
                            <td>$44.300,00</td>
                            <td>$29.000,00</td>
                            <td>$24.700,00	</td>
                        </tr>
                        <tr>
                            <td>CUADRUPLE</td>
                            <td>-</td>
                            <td>$34.300,00</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>SUITE</td>
                            <td>$50.100,00</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}