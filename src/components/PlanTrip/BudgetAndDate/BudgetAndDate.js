import React, {useState} from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
import './BudgetAndDate.css';

const BudgetAndDate = () => {
    const [inputValue, setInputValue] = useState(0);
    const onChange = (value) => {
        setInputValue(value);
    }
    return (
        <div className="sliderContainer">
            <Row>
                <Col span={12}>
                    <Slider
                        min={100}
                        max={10000}
                        onChange={onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={100}
                        max={10000}
                        style={{margin: '0 16px'}}
                        value={inputValue}
                        onChange={onChange}
                    />
                </Col>
            </Row>
        </div>

    )
}

export default BudgetAndDate;