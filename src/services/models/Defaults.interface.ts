export interface IContext {
    addToFavorite: (city: string) => void
    searchCity: (city: string) => void
    searchData: ISearch[]
    favorite: IFavorite[]
}

export interface ISearch {
    id: number
    name: string
    region: string
    country: string
}

export interface IFavorite {
    location: ILocation
    current: ICurrent
    astro: IAstro
}

export interface ILocation {
    name: string
    country: string
    localtime: string
}
export interface ICurrent {
    last_updated: string;
    temp_c: number;
    temp_f: number;
    feelslike_c: number;
    feelslike_f: number;
    wind_kph: number;
    wind_mph: number;
    wind_degree: number;
    pressure_mb: number;
    pressure_in: number;
    humidity: number;
    cloud: number;
    uv: number;
    condition: {
        icon: string
        text: string
    }
}
export interface IAstro {
    sunrise: string
    sunset: string
}