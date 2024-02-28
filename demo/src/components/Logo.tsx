import * as React from "react";


interface Props{
    src?: string;
    x?: number;
    y?: number;
    height?: string;
}

export const LogoComponent = (props : Props) => {
    const timeInterval = 100;
    const [input, setInput] = React.useState("");
    const [count, setcount] = React.useState(0);
    const x___ = -1;
    const y___ = -1;
    const [x__, setx__] = React.useState(0);
    const [y__, sety__] = React.useState(0);
    const [x_, setx_] = React.useState(0);
    const [y_, sety_] = React.useState(0);
    const [x, setx] = React.useState(props.x?props.x:0);
    const [y, sety] = React.useState(props.y?props.y:0);
  
    //const increase = () => {setcount(count + 1)};
    //const decrease = () => {setcount(count - 1)};
    //const manual = (event : React.KeyboardEvent<HTMLInputElement>) => {setcount(event.target.value)}

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
        setcount(count+1);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if ([9, 112].indexOf(event.keyCode) !== -1) {
        event.preventDefault();
        event.stopPropagation();
        }
        console.log(event.keyCode);
        switch (event.keyCode) {
        case 38:
            sety__(y__+1);
            break;
        case 40: 
            sety__(y__-1);
            break
        case 39:
            setx__(x__-1);
            break;
        case 37: 
            setx__(x__+1);
            break
        case 9:
            setInput(`${input}<TAB>`);
            break;
        case 112:
            setInput(`${input}<F1>`);
            break;
        default:
            break;
        }
    };
    async function updatePhysics(){
        setx__(x___*timeInterval/1000+x__);
        sety__(y___*timeInterval/1000+y__);
        setx_(x__*timeInterval/1000+x_);
        sety_(y__*timeInterval/1000+y_);
        setx(((1/2)*x__**2*timeInterval+x_*timeInterval)*0.001+x);
        sety(((1/2)*y__**2*timeInterval+y_*timeInterval)*0.001+y);
    }
    
    React.useEffect(()=>{
        const interval = setInterval(() => {
            updatePhysics();
        }, timeInterval);
        return () => clearInterval(interval);
    });

    
   

    return  <div>
                <input
                type="text"
                value={input}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                />
                <div>Value: "{input}"</div>
                <div>Value: "{count}"</div>
                <div>x__: "{x__}"; x_:"{x_}"; x:"{x}"; </div>
                <div>y__: "{y__}"; y_:"{y_}"; y:"{y}"; </div>
                <img src={props.src} className="App-logo" alt="logo" style={{right: x.toString()+"px", bottom: y.toString()+"px", height:props.height}}/>
            </div>
}

LogoComponent.defaultProps = {
    src:"https://media.polyfaces.org/images/Logo_1-Blanc_Casse_a3AMdEJ.png",
    height : "10vmin"
  }
