export class DebugState {
    public state = {};
    constructor() {
        this.state = {
               "GameCount": 1,
               "ShipPositions":[
                  {
                     "StartingSquare":{
                        "Row":"A",
                        "Column":1
                     },
                     "EndingSquare":{
                        "Row":"A",
                        "Column":5
                     }
                  },
                  {
                     "StartingSquare":{
                        "Row":"C",
                        "Column":1
                     },
                     "EndingSquare":{
                        "Row":"C",
                        "Column":4
                     }
                  },
                  {
                     "StartingSquare":{
                        "Row":"E",
                        "Column":1
                     },
                     "EndingSquare":{
                        "Row":"E",
                        "Column":3
                     }
                  },
                  {
                     "StartingSquare":{
                        "Row":"G",
                        "Column":1
                     },
                     "EndingSquare":{
                        "Row":"G",
                        "Column":3
                     }
                  },
                  {
                     "StartingSquare":{
                        "Row":"I",
                        "Column":1
                     },
                     "EndingSquare":{
                        "Row":"I",
                        "Column":2
                     }
                  }
               ],
               "MyShots":[
                  {
                     "Position":{
                        "Row":"C",
                        "Column":10
                     },
                     "WasHit":true
                  }
               ],
               "OpponentsShots":[
                  {
                     "Position":{
                        "Row":"A",
                        "Column":1
                     },
                     "WasHit":null
                  }
               ]
            }
    }
}