import ifTransformFound from "./ifTransformFound/index.js";

const showLogs = false;

const startFunc = ({ inSource, inRecipe }) => {
    let localSource = inSource;
    const localRecipe = inRecipe;

    // console.log("start : ", inSource, inRecipe);

    if (showLogs) {
        console.log("execution", localSource, localRecipe);
    }

    if (localRecipe && typeof localRecipe === "object" && "transform" in localRecipe) {
        const fromTransform = ifTransformFound({
            inSource: localSource,
            inTransform: localRecipe.transform,
            inExecute: startFunc
        });

        localSource = fromTransform;
    };

    return localSource;
};

export default startFunc;
