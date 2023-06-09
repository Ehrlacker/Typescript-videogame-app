


export interface Welcome {
    count:          number;
    next:           string;
    previous:       null;
    results:        Result[];
    user_platforms: boolean;
}

export interface Result {
    slug:               string;
    name:               string;
    playtime:           number;
    platforms:          Platform[];
    stores:             Store[] | null;
    released:           Date;
    tba:                boolean;
    background_image:   string;
    rating:             number;
    rating_top:         number;
    ratings:            Rating[];
    ratings_count:      number;
    reviews_text_count: number;
    added:              number;
    added_by_status:    AddedByStatus | null;
    metacritic:         number | null;
    suggestions_count:  number;
    updated:            Date;
    id:                 number;
    score:              string;
    clip:               null;
    tags:               Tag[];
    esrb_rating:        EsrbRating | null;
    user_game:          null;
    reviews_count:      number;
    saturated_color:    Color;
    dominant_color:     Color;
    short_screenshots:  ShortScreenshot[];
    parent_platforms:   Platform[];
    genres:             Genre[];
    community_rating?:  number;
}

export interface AddedByStatus {
    yet?:     number;
    owned?:   number;
    beaten?:  number;
    toplay?:  number;
    dropped?: number;
    playing?: number;
}

export enum Color {
    The0F0F0F = "0f0f0f",
}

export interface EsrbRating {
    id:      number;
    name:    string;
    slug:    string;
    name_en: string;
    name_ru: string;
}

export interface Genre {
    id:   number;
    name: string;
    slug: string;
}

export interface Platform {
    platform: Genre;
}

export interface Rating {
    id:      number;
    title:   Title;
    count:   number;
    percent: number;
}

export enum Title {
    Exceptional = "exceptional",
    Meh = "meh",
    Recommended = "recommended",
    Skip = "skip",
}

export interface ShortScreenshot {
    id:    number;
    image: string;
}

export interface Store {
    store: Genre;
}

export interface Tag {
    id:               number;
    name:             string;
    slug:             string;
    language:         Language;
    games_count:      number;
    image_background: null | string;
}

export enum Language {
    Eng = "eng",
    Rus = "rus",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toWelcome(json: string): Welcome {
        return JSON.parse(json);
    }

    public static welcomeToJson(value: Welcome): string {
        return JSON.stringify(value);
    }
}

