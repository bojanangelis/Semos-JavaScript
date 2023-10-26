import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../components/Card'

const ProductsPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const {id} = params;
    const [posts, setPosts] = useState({})
    const [err, setErr] = useState('')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPosts(data)).catch(err => setErr(err)
        )
    }, [])

    if(err.message) {
        navigate('/error')
    }

  return (
    <div>
        <Card post={posts} />
    </div>
  )
}

export default ProductsPage