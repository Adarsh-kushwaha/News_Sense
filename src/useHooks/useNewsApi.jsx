import { useState, useEffect } from "react"
import axios from 'axios';


const baseUrl = "https://free-news.p.rapidapi.com/v1/search"

export const useNewsApi = () => {

    const [news, setNews] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [topic, setTopic] = useState("bollywood")

    useEffect(() => {

        const fetchData = async () => {

            try {
                setLoading(true)
                const response = await axios.get(baseUrl, {
                    params: { q: topic, lang: 'en', page_size: '9' },
                    headers: {
                        'x-rapidapi-host': 'free-news.p.rapidapi.com',
                        'x-rapidapi-key': '879988be63msh09975ea70934775p1af555jsnd02939a69f8b',
                    }
                })
                setLoading(false)
                setNews(response.data)
                console.log(response.data)
            } catch (err) {
                setError(err)
            }


        }

        fetchData()
    }, [])

    return {
        loading, error, news, topic, setTopic
    }

}