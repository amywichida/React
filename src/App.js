import React, {useState, useEffect} from 'react'
import SearchForm from './SearchForm'

const App = () => {
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('everything')

  
  useEffect(() => {
    const fetchArticles = async () => {
    try {
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=CNrBrWD2jjnHPHe5U6YGcdmBGDApvNl9`
          /* process.env.REACT_APP_ARTICLES_API_KEY not working */
          
        )
        const articles = await res.json()
        setArticles(articles.response.docs)
      } catch (error) {
        console.error(error); 
      }
    }

    fetchArticles()
  }, [term])

  return (
    <>
      <div className="showcase">
      <div className="search">
        <SearchForm searchText={(text) => setTerm(text)}/>
        </div>
      </div>
      <section >
        {articles.map((article) => {
          const {abstract, 
                headline: {main}, 
                byline:{original}, 
                lead_paragraph,
                news_desk, 
                section_name, 
                web_url, _id, 
                word_count,
              } = article

          return (
            <article key={_id}  className="bgcolor">
        
            
              <h2>{main}</h2>
              <h4>{abstract}</h4>
              <p>{lead_paragraph}</p>

              <ul>
                <li>{original}</li>
                <li>{news_desk}</li>
                <li>{section_name}</li>
               
              </ul>
              <a href={web_url} target="_blank">Detail page</a>
            </article>
          )
        })}

      </section>
    </>
  )
}

export default App;
