export interface Stop {
    "stop_id": string;
    "map_id": string;
    "direction_id": string;
    "stop_name": string;
    "station_name": string;
    "station_descriptive_name": string;
    "station_lines": string[];
}

export interface Eta {
    "arrT": string;
    "destNm": string;
    "destSt": string;
    "heading": string;
    "isApp": string;
    "isDly": string;
    "isFlt": string;
    "isSch": string;
    "lat": string;
    "lon": string;
    "prdt": string;
    "rn": string;
    "rt": string;
    "staId": string;
    "staNm": string;
    "stpDe": string;
    "stpId": string;
    "trDr": string;
    "msUntilArrival": number;
    "minsUntilArrival": number;
}