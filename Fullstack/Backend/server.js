import express from "express"

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server is running')
})
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "1st joke",
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field."
        },
        {
            id: 2,
            title: "2nd joke",
            joke: "I'm reading a book on the history of glue. I just can't seem to put it down."
        },
        {
            id: 3,
            title: "3rd joke",
            joke: "Why don't scientists trust atoms? Because they make up everything."
        }
    ]
    res.send(jokes)
})
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})