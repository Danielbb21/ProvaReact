import axios from "axios";
import { useCallback, useState } from "react"
import { useAppSelector } from "../store/store-hooks";

interface User {
    id: string;
    name: string;
    email: string;
    password?: string;
    token?: string;
    token_created_at?: string;
    created_at: string;
    updated_at: string;
}
interface Game {
    id: string;
    type: string;
    description: string;
    range: number;
    price: number;
    "max-number": number;
    color: string;
    "min-cart-value": number;
    created_at: string;
    updated_at: string;
}
interface Data {
    id: number;
    gameNumbers: string;
    user_id: number;
    game_id: number;
    price: number;
    game_date: string;
    created_at: string;
    updated_at: string;
    user: User
    game: Game;
}

interface Bets {
    total: number;
    perPage: number;
    page: number;
    lastPage: number;
    data?: Data[]
}
export default function useApi() {
    const [bets, setBets] = useState<Bets>();
    const token = useAppSelector(state => state.user.token);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const fetchData = useCallback((page: number, type?:string) => {
        setIsLoading(true);
        console.log('loading');
        const response = axios.get(`http://127.0.0.1:3333/gamble?page=${page}&type=${type}`, { headers: { Authorization: `Bearer ${token}` } }).then(response => {
            console.log('DATA', response.data)
            setBets(response.data);
            setIsLoading(false);
            console.log('loaded');
        })
            .catch(err => {
                console.log(err.message);
                setIsLoading(false);
            })
    }, [ token])

    return {
        fetchData,
        bets,
        isLoading
    }



}