const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const HomePage = async () => {
    await delay(5000);
    return <>Prostore</>;
};

export default HomePage;
