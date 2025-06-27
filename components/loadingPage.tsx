import { BeatLoader } from "react-spinners";

const LoadingPage = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw'
        }}>
            <BeatLoader />

        </div>
    );
};

export default LoadingPage;
