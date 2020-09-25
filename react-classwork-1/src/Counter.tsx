import React, {Component} from  'react'

interface Props{
    initialCount: number;
}

interface State {
    count: number
}

export default class Counter extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            count: props.initialCount
        }
    }
    render() {
        return (
            <div>
                <button className="btn" onClick={() => this.changeCount(+1)}> + </button>
                <span> {this.state.count}</span>
                <button className="btn" onClick={() => this.changeCount(-1)}> - </button>
            </div>
        )
    }
    changeCount(value: number){
        this.setState((prevState) =>({ count: prevState.count + value}))
    }
}
