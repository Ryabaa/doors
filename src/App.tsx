import React from "react";

import { useAppSelector } from "./hooks/reduxHooks";

import GlobalStyles from "./styles/global";
import Wrapper from "./styles/wrapper";

import Intro from "./components/Intro";
import Game from "./components/Game";
import Suggestion from "./components/Suggestion";
import End from "./components/End";
import Stats from "./components/Stats";

const App: React.FC = () => {
    const gameState = useAppSelector((state) => state.gameState);

    return (
        <>
            <GlobalStyles />
            <Wrapper>
                {gameState !== "intro" && <Stats />}
                {gameState === "intro" && <Intro />}
                {gameState === "game" && <Game />}
                {gameState === "suggestion" && <Suggestion />}
                {gameState === "end" && <End />}
            </Wrapper>
        </>
    );
};

export default App;
