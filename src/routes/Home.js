import React, { useEffect, useState } from "react";
import Movies from "./../components/Movies"
import axios from "axios";


const Home = () => {
    const [value, setValue] = useState("사랑");
    const ID_KEY = "O5AcqhRyfiHrsp5SKtop";
    const SEC = "fN8Hh6r7fH"

    //api start
    const [datav, setDatav] = useState([]);
    const [search, setSearch] = useState("사랑");
    const mv = async () => {
      try{
        const ress = await axios.get("/v1/search/movie.json",{
          params: {
            query: search,
            display: 20
          },
          headers: {
              "X-Naver-Client-Id": ID_KEY,
              "X-Naver-Client-Secret": SEC
          }
        });
        setDatav(ress.data.items);
        console.log("통과")
      } catch(e) {
        console.log(e)
      }
    }
    //api done

    useEffect(() => {
      mv();
      console.log(datav)
    },[search])
    const handleSubmit = (e) => {
        console.log(value +"을(를) 포함한 영화를 검색합니다.")
        setSearch(value);
    }
    const handleChange = (e) => {
        let currentValue = e.target.value;
        setValue(currentValue); 
        console.log(currentValue);
    }
    return (
        <div className="Home">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="검색할 영화" className="input" onChange={handleChange}/>
                <input type="submit" value="검색"/>
            </form>
            <div className="movies_container">
                {datav.map((mv) => {
                    let oldTitle = mv.title
                    let newTitle = oldTitle.replace(/(<([^>]+)>)/ig,"")
                    return(
                        <Movies title={newTitle} image={mv.image} rating={mv.userRating}/>
                    )
                })}
            </div>
        </div>

    );    
}

export default Home;