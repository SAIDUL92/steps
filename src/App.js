import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    return <div>
        <Steps />

    </div>
}


function Steps() {


    const [stepCount, setStepCount] = useState(1);
    const [isopen, setIsopen] = useState(true);

    function handlePrvious() {
        if (stepCount > 1) setStepCount(step => step - 1)
    }
    function handleNext() {
        if (stepCount < messages.length) setStepCount(step => step + 1)
    }

    return (
        <div>
            <button className="close" onClick={() => setIsopen((is) => !is)}>
                &times;
            </button>

            {


                isopen ?
                    (
                        <div className="steps">
                            <div className="numbers">
                                <div className={stepCount >= 1 ? 'active' : ''}>1</div>
                                <div className={stepCount >= 2 ? 'active' : ''}>2</div>
                                <div className={stepCount >= 3 ? 'active' : ''}>3</div>
                            </div>


                            <StepMessage stepCount={stepCount}>

                                <div className="buttons">
                                    <Button

                                        BgColor="#7950f2"
                                        textColor="#fff"
                                        onClickEvent={() => alert(`Learn how to ${messages[stepCount - 1]}`)}
                                    >


                                        Learn how
                                    </Button>

                                </div>
                            </StepMessage>
                            <div className="buttons">
                                <Button

                                    BgColor="#7950f2"
                                    textColor="#fff"
                                    onClickEvent={handlePrvious}

                                >
                                    Previous
                                </Button>
                                <Button
                                    BgColor="#7950f2"
                                    textColor="#fff"
                                    onClickEvent={handleNext}

                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    )
                    : <Button BgColor="#7950f2"
                        textColor="#fff"
                    >Click the cross button again to see the Steps</Button>

            }
        </div>
    );
}


function StepMessage({ stepCount, children }) {
    return <div className="message">
        <h3>Step {stepCount}</h3>
        {children}
    </div>
}


function Button({ BgColor, textColor, children, onClickEvent }) {
    return <button style={{ backgroundColor: BgColor, color: textColor }} onClick={onClickEvent}>
        {children}
    </button>
}


