import React, { useState, useEffect } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import { Row, Col } from 'react-bootstrap'


const Review = ({ sentement, }) => {





    const { pos, neg, neu } = sentement

    const postiveVal = Math.round(pos)
    const negativeVal = Math.round(neg)
    const nuetralVal = Math.round(neu)

    return (
        <>
            <div className="container flex align-items-center justify-content-center" >
                <PieChart
                    label={({ dataEntry }) => {
                        if (dataEntry.value !== 0) return `${dataEntry.value}%`
                    }}
                    viewBoxSize={[140, 140]}
                    center={[65, 65]}
                    data={[
                        {
                            color: "#5ad3d1",
                            title: "Postive",
                            value: postiveVal,
                        },
                        {
                            color: "#f7464a",
                            title: "Negitive",
                            value: negativeVal,
                        },
                        {
                            color: "#616774",
                            title: "Nutral",
                            value: nuetralVal,
                        },
                    ]}
                />
                <Row>
                    <Col className='circle1' style={{ backgroundColor: '#5ad3d1', borderRadius: '10px', color: 'black' }}>Positive</Col>
                    <Col className='circle2' style={{ backgroundColor: '#616774', borderRadius: '10px', color: 'white' }}>Nutral</Col>
                    <Col className='circle3' style={{ backgroundColor: '#f7464a', borderRadius: '10px', color: 'black' }}>Negitive</Col>
                </Row>


            </div>

        </>
    )
}

export default Review