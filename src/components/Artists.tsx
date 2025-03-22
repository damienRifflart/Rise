interface ArtistProps {
    data: {
        [key: string]: {
            birth: number;
            death: number;
            movement: string;
            famousPainting: string;
        };
    };
}

const Artist: React.FC<ArtistProps> = (data) => {
    const objectKeys = Object.keys(data.data);
    const objectValues = Object.values(data.data);

    return (
        <div className="flex flex-row gap-20 justify-center w-full mt-[8%]">
            <div className="w-[500px] h-[594px] bg-[var(--dark-green)] flex flex-col rounded-3xl p-10">
                <h1 className="text-5xl font-extrabold">{objectKeys[0]}</h1>
                <h2 className="text-4xl ">{objectValues[0].birth}-{objectValues[0].death} / {objectValues[0].movement}</h2>

                <div className="flex w-full flex-col gap-5 mt-10">
                    <p className="text-4xl underline text-center">{objectValues[0].famousPainting}</p>
                </div>
            </div>

            <div className="w-[500px] h-[594px] bg-[var(--dark-green)] flex flex-col rounded-3xl p-10">
                <h1 className="text-5xl font-extrabold">{objectKeys[1]}</h1>
                <h2 className="text-4xl ">{objectValues[1].birth}-{objectValues[1].death} / {objectValues[1].movement}</h2>

                <div className="flex w-full flex-col gap-5 mt-10">
                    <p className="text-4xl underline text-center">{objectValues[1].famousPainting}</p>
                </div>
            </div>

            <div className="w-[500px] h-[594px] bg-[var(--dark-green)] flex flex-col rounded-3xl p-10">
                <h1 className="text-5xl font-extrabold">{objectKeys[2]}</h1>
                <h2 className="text-4xl ">{objectValues[2].birth}-{objectValues[2].death} / {objectValues[2].movement}</h2>

                <div className="flex w-full flex-col gap-5 mt-10">
                    <p className="text-4xl underline text-center">{objectValues[2].famousPainting}</p>
                </div>
            </div>

        </div>
    );
};

export default Artist;
