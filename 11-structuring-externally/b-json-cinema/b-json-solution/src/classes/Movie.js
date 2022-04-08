export class Movie {

    _code;
    _name;
    _description;
    _availDate;
    _seatsAvail = 50;
    _duration;

    constructor(movieCode, movieName, movieDescription, movieDate, _seatsAvail, movieDuration) {

        this._code = movieCode;
        this._name = movieName;
        this._description = movieDescription;
        this._availDate = movieDate;
        this._seatsAvail = _seatsAvail;
        this._duration = movieDuration;
    }

}

