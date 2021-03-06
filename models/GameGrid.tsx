import Cell from './Cell';
import Color from './Color';

export default class GameGrid {
    cells: Cell[][];
    rows: number;
    columns: number;

    constructor(rows: number, columns: number) {
        this.cells = [];
        this.rows = rows;
        this.columns = columns;
    }

    setMap(mapName: string){
        let newCells: Cell[][] = [];

        for(let i: number = 0; i<this.rows; i++){
            let row = [];

            for(let j: number = 0; j<this.columns; j++){
                row.push(new Cell(new Color(255, 255, 255), i, j, false));
            }

            newCells.push(row);
        }

        switch(mapName)
        {
            case "fourCornersWithNoWhite":
                for(let i: number = 0; i<this.rows; i++){
                    for(let j: number = 0; j<this.columns; j++){
                        if(i>this.rows/2-1)
                        {
                            if(j>this.columns/2-1)
                            {
                                newCells[i][j].color = new Color(255, 0, 0);
                            }
                            else
                            {
                                newCells[i][j].color = new Color(0, 255, 0);
                            }
                        }
                        else
                        {
                            if(j>this.columns/2-1)
                            {
                                newCells[i][j].color = new Color(255, 255, 0);
                            }
                            else
                            {
                                newCells[i][j].color = new Color(0, 0, 255);
                            }
                        }
                    }
                }
                newCells[this.rows/2-1][this.columns/2-1].color = new Color(0, 0, 0);
                newCells[this.rows/2][this.columns/2-1].color = new Color(0, 0, 0);
                newCells[this.rows/2-1][this.columns/2].color = new Color(0, 0, 0);
                newCells[this.rows/2][this.columns/2].color = new Color(0, 0, 0);
                newCells[this.rows/2+1][this.columns/2-1].color = new Color(0, 0, 0);
                newCells[this.rows/2+1][this.columns/2].color = new Color(0, 0, 0);
                newCells[this.rows/2+1][this.columns/2+1].color = new Color(0, 0, 0);
                newCells[this.rows/2][this.columns/2+1].color = new Color(0, 0, 0);
                newCells[this.rows/2-1][this.columns/2+1].color = new Color(0, 0, 0);
                newCells[this.rows/2-2][this.columns/2+1].color = new Color(0, 0, 0);
                newCells[this.rows/2-2][this.columns/2].color = new Color(0, 0, 0);
                newCells[this.rows/2-2][this.columns/2-1].color = new Color(0, 0, 0);
                newCells[this.rows/2-2][this.columns/2-2].color = new Color(0, 0, 0);
                newCells[this.rows/2-1][this.columns/2-2].color = new Color(0, 0, 0);
                newCells[this.rows/2][this.columns/2-2].color = new Color(0, 0, 0);
                newCells[this.rows/2+1][this.columns/2-2].color = new Color(0, 0, 0);
                break;
            case "redAndBlue":
                for(let i: number = 0; i<this.rows; i++){
                    for(let j: number = 0; j<this.columns; j++){
                        if(j>this.columns/2-1)
                        {
                            newCells[i][j].color = new Color(0, 0, 255);
                        }
                        else
                        {
                            newCells[i][j].color = new Color(255, 0, 0);
                        }
                    }
                }
                break;
            case "fourCorners":
                newCells[0][0].color = new Color(255, 0, 0);
                newCells[0][this.columns-1].color = new Color(255, 255, 0);
                newCells[this.rows-1][0].color = new Color(0, 255, 0);
                newCells[this.rows-1][this.columns-1].color = new Color(0, 0, 255);
                newCells[this.rows/2-1][this.columns/2-1].color = new Color(0, 0, 0);
                break;
            case "white":
            default:
                break;
        }
        
        this.cells = newCells;
    }

    clone(): GameGrid{

        let clonedGameGrid: GameGrid = new GameGrid(this.rows, this.columns);

        this.cells.forEach(row => {
            let clonedRow: Cell[] = [];

            row.forEach((cell: Cell) => {
                clonedRow.push(cell.clone());
            });

            clonedGameGrid.cells.push(clonedRow);
        });

        return clonedGameGrid;
    }


}