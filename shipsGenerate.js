var usedCells = []; // массив задействованных точек

function Ship(size, direct) {
    this.usedCells = [];
    var elements = document.getElementsByTagName('td');
    length = elements.length;
    this.place = function (sizeX, sizeY) {
        var xCoordinate;
        var yCoordinate;
        if (direct) {
            xCoordinate = Math.floor(Math.random() * (sizeX - size));
            yCoordinate = Math.floor(Math.random() * (sizeY));
            for (var i = 0; i < size; i++)
                if (usedCells.includes(yCoordinate * 10 + xCoordinate + i)) {
                    this.place(sizeX, sizeY);
                    return;
                }
        } else {
            xCoordinate = Math.floor(Math.random() * (sizeX));
            yCoordinate = Math.floor(Math.random() * (sizeY - size));
            for (var i = 0; i < size; i++)
                if (usedCells.includes((yCoordinate + i) * 10 + xCoordinate)) {
                    this.place(sizeX, sizeY);
                    return;
                }
        }
        for (var i = 0; i < size; i++) {
            if (direct) {
                //горизонтальный случай     
                var cellByHorizontal = yCoordinate * 10 + xCoordinate + i; // 1 клетка корабля

                if ((cellByHorizontal) % 10 != 0 && i == 0 ) {
                    if (cellByHorizontal - 1 >= 0 && cellByHorizontal + 9 <= 99) {
                        usedCells.push(cellByHorizontal + 9);
                    }
                    if (cellByHorizontal - 1 <= 99 && cellByHorizontal - 11 >= 0) {
                        usedCells.push(cellByHorizontal - 11);
                    }
                    usedCells.push(cellByHorizontal - 1);
                }
                if ( (cellByHorizontal + 1) % 10 != 0 && i == size - 1) {
                    if (cellByHorizontal + 1 >= 0 && cellByHorizontal + 11 <= 99) {
                        usedCells.push(cellByHorizontal + 11);
                    }
                    if (cellByHorizontal + 1 <= 99 && cellByHorizontal - 9 >= 0) {
                        usedCells.push(cellByHorizontal - 9);
                    }
                    usedCells.push(cellByHorizontal + 1);
                }
                if ((cellByHorizontal - 10) >= 0) {
                    usedCells.push(cellByHorizontal - 10);
                }
                if ((cellByHorizontal + 10) <= 99) {
                    usedCells.push(cellByHorizontal + 10);
                }
                elements[cellByHorizontal].className = "ship";
                usedCells.push(cellByHorizontal);

            }
             else 
             {// вертикальный случай
                var cellByVertical = (yCoordinate + i) * 10 + xCoordinate;
                if (i == 0 && (cellByVertical - 10) >= 0) {
                    if ((cellByVertical - 10) % 10 != 9) {
                        usedCells.push(cellByVertical - 9);
                    }
                    if ((cellByVertical - 10) % 10 != 0 && cellByVertical - 11 >= 0) {
                        usedCells.push(cellByVertical - 11);
                    }
                    usedCells.push(cellByVertical - 10);
                }
                if (i == size - 1 && (cellByVertical + 10) <= 99) {
                    if ((cellByVertical + 10) % 10 != 0) {
                        usedCells.push(cellByVertical + 9);
                    }
                    if ((cellByVertical + 10) % 10 != 9 && cellByVertical + 11 <= 99) {
                        usedCells.push(cellByVertical + 11);
                    }
                    usedCells.push(cellByVertical + 10);
                }
                if (cellByVertical % 10 != 0) {
                    usedCells.push((yCoordinate + i) * 10 + xCoordinate - 1);
                }
                if ((cellByVertical + 1) % 10 != 0) {
                    usedCells.push(cellByVertical + 1);
                }
                elements[cellByVertical].className = "ship";
                usedCells.push(cellByVertical);
            }

        }

    }
}

function placingShips() {
    var k = [10];
    for (i = 0; i < 10; i++) {
        k[i] = Math.random() > 0.5; // генерация случайных направлений (горизонталь или вертикаль)
    }

    var fourPiecesShip = new Ship(4, k[0]);
    fourPiecesShip.place(10, 10);
    var threePiecesShip1 = new Ship(3, k[1]);
    threePiecesShip1.place(10, 10);
    var threePiecesShip2 = new Ship(3, k[2]);
    threePiecesShip2.place(10, 10);
    var twoPiecesShip1 = new Ship(2, k[3]);
    twoPiecesShip1.place(10, 10);
    var twoPiecesShip2 = new Ship(2, k[4]);
    twoPiecesShip2.place(10, 10);
    var twoPiecesShip3 = new Ship(2, k[5]);
    twoPiecesShip3.place(10, 10);
    var onePieceShip1 = new Ship(1, k[6]);
    onePieceShip1.place(10, 10);
    var onePieceShip2 = new Ship(1, k[7]);
    onePieceShip2.place(10, 10);
    var onePieceShip3 = new Ship(1, k[8]);
    onePieceShip3.place(10, 10);
    var onePieceShip4 = new Ship(1, k[9]);
    onePieceShip4.place(10, 10);
    //console.log(usedCells);
}

function cellNumeration() {
    var elements = document.getElementsByTagName('td');
    length = elements.length;
    for (i = 0; i < length; i++) {
        elements[i].id = i;
        elements[i].innerHTML = elements[i].id;
    }
    placingShips();
}