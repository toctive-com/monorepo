import Ticker from "react-ticker";


interface AlertBar {
    ClassName?: String
    content: String
}

const AlertBar = (props: AlertBar) => {
    return (
        <div className={`mmv rounded-md bg-red-500 px-4 py-3 shadow-xl shadow-red-300 `}>
            <Ticker direction="toRight" speed={10} mode="smooth">
                {() => (
                    
                        <h1>
                            {props.content}
                        </h1>
                    
                )}
            </Ticker>
        </div>
    )
}

export default AlertBar;