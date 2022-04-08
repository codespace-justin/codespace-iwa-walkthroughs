export class Movie {

    _code;
    _name;
    _availDate;
    _seatsAvail;
    _duration;

    constructor(code, name, description, availDate, seatsAvail, duration) {

        this._code = code;
        this._name = name;
        this._description = description
        this._availDate = availDate;
        this._seatsAvail = seatsAvail;
        this._duration = duration;
    }

}