import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 26
        };


        // 1 способ использования функции как обработчик события
        // this.nextYear = this.nextYear.bind(this);
        //bind привязывает метод nextYear к каждому конкретному объекту


        // 2 способ
        this.nextYear = () => {
            this.setState(state => ({
                years: ++state.years
            }));
            //команда setState перезаписывает объект с нашими состояниями
        };
    }

    // 3 способ экспериментальный
    // nextYear = () => {
    //     this.setState(state => ({
    //         years: ++state.years
    //     }))
    // }

    // nextYear() {
    //     this.setState(state => ({
    //         years: ++state.years
    //     }));
    //     //команда setState перезаписывает объект с нашими состояниями
    // }

    render() {
        const {name, surname, link} = this.props;
        const {years} = this.state;
        return (
            <>
                <button onClick={this.nextYear}>++</button>
                <h1>My name is {name}, surname - {surname}, years = {years}</h1>
                <a href={link}>My profile</a>
            </>
        )
    }
}

// function WhoAmI({name, surname, link}) {
//     return (
//         <>
//             <h1>My name is {name}, surname - {surname}</h1>
//             <a href={link}>My profile</a>
//         </>
//     )
// }

const All = () => {
    return (
        <>
            <WhoAmI name="John" surname="Smith" link="vk.com"/>
            <WhoAmI name="Aleksey" surname="Fedotov" link="instargam.com"/>
            <WhoAmI name="David" surname="Parker" link="facebook.com"/>
        </>
    )
}


ReactDOM.render(<All/>, document.getElementById('root'));


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );