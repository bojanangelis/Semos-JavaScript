import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import { API_URL } from '../utls/API_URL'

const HomePage = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [err, setErr] = useState('')

    useEffect(() => {
        // const handleFetch = async () => {
        //     try {
        //         const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        //         setPosts(data)
        //     } catch (err) {
        //         setErr(err)
        //     }
        // }
        // handleFetch()
        fetch(`${API_URL}/posts`)
        .then(res => res.json())
        .then(data => setPosts(data)).catch(err => setErr(err))
    }, [])

    if(err.message) {
        navigate('/error')
    }

  return (
    <div>
        <h3>Homepage </h3>
        {posts?.map(post => {
            return <Card key={post.id} post={post} />
        }) }
    </div>
  )
}

export default HomePage