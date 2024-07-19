import styles from './UserDescription.module.css';

function UserDescription() {
    return <>
    <div className="container d-flex flex-column justify-content-center align-items-center my-5">
        <div className="row">
            <div className="col-12">
                <h2 className={`${styles.typingAnimation} ${styles.typingAnimatedText1} major-mono-display-regular`}>I'm Erantha Welikala</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <h2 className={`${styles.typingAnimation} ${styles.typingAnimatedText2} major-mono-display-regular`}>Computer Engineer</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <h2 className={`${styles.typingAnimation} ${styles.typingAnimatedText3} major-mono-display-regular`}>Faculty of Engineering</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <h2 className={`${styles.typingAnimation} ${styles.typingAnimatedText4} major-mono-display-regular`}>University of Peradeniya</h2>
            </div>
        </div>
    </div>
    </>;
}

export default UserDescription;
