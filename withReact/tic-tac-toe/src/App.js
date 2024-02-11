import Board from "./components/Board";

function App() {
    return (
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>
            <div className="game-info">
                <div>
                    <a>GAME INFO</a>
                </div>
            </div>

        </div>
    );
}

export default App;
