import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import React, { Component } from 'react';
import LiquidFillGauge from 'react-liquid-gauge';
 
class WaterLevelGuage extends Component {
    state = {
        value: 0
    };
    startColor = '#6495ed'; // cornflowerblue
    endColor = '#dc143c'; // crimson

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.payload && nextProps.payload.message && Number(nextProps.payload.message) !== this.state.value){
            const level = Number(nextProps.payload.message);
            if(level > 40){
                this.setState({ value: 0 });
            }else {
                let val = (40 - level) * 3.3;
                this.setState({ value: val > 100 ? 100 : val });
            }
        }
        // console.log("...nextPropss", nextProps);
    }

    render() {
        const radius = 150;
        const interpolate = interpolateRgb(this.startColor, this.endColor);
        const fillColor = interpolate(this.state.value / 100);
        const gradientStops = [
            {
                key: '0%',
                stopColor: color(fillColor).darker(0.5).toString(),
                stopOpacity: 1,
                offset: '0%'
            },
            {
                key: '50%',
                stopColor: fillColor,
                stopOpacity: 0.75,
                offset: '50%'
            },
            {
                key: '100%',
                stopColor: color(fillColor).brighter(0.5).toString(),
                stopOpacity: 0.5,
                offset: '100%'
            }
        ];
 
        return (
            <div>
                <label>TANK(TNK10001) WATER LEVEL</label>
                <LiquidFillGauge
                    style={{ margin: '0 auto' }}
                    width={radius * 2}
                    height={radius * 2}
                    value={this.state.value}
                    percent="%"
                    textSize={1}
                    textOffsetX={0}
                    textOffsetY={0}
                    textRenderer={(props) => {
                        const value = Math.round(props.value);
                        const radius = Math.min(props.height / 2, props.width / 2);
                        const textPixels = (props.textSize * radius / 2);
                        const valueStyle = {
                            fontSize: textPixels
                        };
                        const percentStyle = {
                            fontSize: textPixels * 0.6
                        };
 
                        return (
                            <tspan>
                                <tspan className="value" style={valueStyle}>{value}</tspan>
                                <tspan style={percentStyle}>{props.percent}</tspan>
                            </tspan>
                        );
                    }}
                    riseAnimation
                    waveAnimation
                    waveFrequency={2}
                    waveAmplitude={1}
                    gradient
                    gradientStops={gradientStops}
                    circleStyle={{
                        fill: fillColor
                    }}
                    waveStyle={{
                        fill: fillColor
                    }}
                    textStyle={{
                        fill: color('#444').toString(),
                        fontFamily: 'Arial'
                    }}
                    waveTextStyle={{
                        fill: color('#fff').toString(),
                        fontFamily: 'Arial'
                    }}
                    // onClick={() => {
                    //     this.setState({ value: Math.random() * 100 });
                    // }}
                />
                <div
                    style={{
                        margin: '20px auto',
                        width: 120
                    }}
                >
                    {/* <button
                        type="button"
                        className="btn btn-default btn-block"
                        onClick={() => {
                            this.setState({ value: Math.random() * 100 });
                        }}
                    >
                        Refresh
                    </button> */}
                </div>
            </div>
        );
    }
}

export default WaterLevelGuage;