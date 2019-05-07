import React, { Component, Fragment } from 'react'
import './clients.scss'

import { Card } from '../../components/card/card'
import { LineGraphic } from '../../components/line-graphic/lineGraphic'
import { PieChart } from '../../components/pie-chart/pieChart'
import { Table } from '../../components/table/table'

export class Clients extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row custom-mt-30'>
                    <div className='col-12 col-md-8 px-0 pr-md-3'>
                        <Card header='Volume de transações' className="first-row">   
                            <LineGraphic />
                        </Card>
                    </div>
                    <div className='col-12 col-md-4 px-0 pl-md-3 custom-mt-30 mt-md-0'>
                        <Card header='Base de clientes' className="first-row">   
                            <PieChart />
                        </Card>
                    </div>
                </div>
                <Card className='row custom-mt-30 overflow-auto' header='Detalhes dos clientes' noPadding>
                    <Table />
                </Card>
            </div>
        )
    }
}