import { useState, useEffect } from "react"

import Db from '../db/data.json';

export const useJobs = () => {

    const [tags, setTags] = useState([]);
    const [data, setData] = useState(Db);


    useEffect(() => {

        if (tags.length === 0) {
            setData(Db);
        } else {

            let newDataRole = null;
            let newDataLevel = null;
            let newDatalanguages = null;
            let newDatatools = null;

            tags.forEach(tag => {
                newDataRole = Db.filter(el => el.role === tag);
                newDataLevel = Db.filter(el => el.level === tag) || {};
                newDatalanguages = Db.filter(el => el.languages.includes(tag)) || {};
                newDatatools = Db.filter(el => el.tools.includes(tag)) || {};
            })

            setData([
                ...newDataRole,
                ...newDataLevel,
                ...newDatalanguages,
                ...newDatatools
            ]);
        }

    }, [tags]);

    const addTags = (e) => {

        if (!tags.includes(e.target.innerHTML)) {
            setTags([
                ...tags,
                e.target.innerHTML
            ])
        }

    }

    const deleteTags = (searchTag) => {
        let newTags = tags.filter(el => el !== searchTag)
        setTags(newTags)
    }

    const resetTags = (e) => {
        setTags([]);
    }


    return {
        data,
        tags,
        addTags,
        deleteTags,
        resetTags
    }

}
