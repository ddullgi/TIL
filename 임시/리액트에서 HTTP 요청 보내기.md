# 리액트에서 HTTP 요청 보내기

<br><br>

### GET 보내기

<br>

#### fetch

- vue와 사용법은 같지만 데이터의 처리를 `useState`를 이용한다.

```react
function App() {
const [movies, setMovies] = useState([]);

function fetchMovieHandler() {
  fetch("https://swapi.dev/api/films/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    });
}

return (
  <React.Fragment>
    <section>
      <button onClick={fetchMovieHandler}>Fetch Movies</button>
    </section>
    <section>
      <MoviesList movies={movies} />
    </section>
  </React.Fragment>
);
}
```

<br>

#### async/ await

- vue와 같은 방식으로 작동한다.

```react
async function fetchMovieHandler() {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
}
```

<br><br>

### 상태 관리

<br>

#### 로딩 확인

```react
const [isLoading, setIsLoading] = useState(false);
```

- 로딩 상태를 관리할 새로운 `useState` 선언

```react
async function fetchMovieHandler() {
  setIsLoading(true); //여기

  const response = await fetch("https://swapi.dev/api/films/");

  const data = await response.json();

  const transformedMovies = data.results.map((movieData) => {
    return {
      id: movieData.episode_id,
      title: movieData.title,
      openingText: movieData.opening_crawl,
      releaseDate: movieData.release_date,
    };
  });
  setMovies(transformedMovies);
  setIsLoading(false); //여기
}
```

- 요청 시작과 끝에 로딩 상태를 바꿔준다.

```react
return (
  <React.Fragment>
    <section>
      <button onClick={fetchMovieHandler}>Fetch Movies</button>
    </section>
    <section>
      {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
	  {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
	  {isLoading && <p>Loading...</p>}
    </section>
  </React.Fragment>
);
```

- 로딩중이지 않고 받아온 정보도 있다면 영화 정보를 출력

  ![image](https://user-images.githubusercontent.com/97648143/175515012-6ede2813-0383-4e96-9ffa-a4534d27d434.png)

- 로딩중이지 않고 받아온 정보가 없다면 `Found no movies`

  ![image](https://user-images.githubusercontent.com/97648143/175514883-3d51d356-033f-47fb-b8b5-d1edfd54c674.png)

- 로딩중이라면 `Loading...`을 출력

  ![image](https://user-images.githubusercontent.com/97648143/175515049-01603379-eb30-4736-b226-06dea4cfc171.png)

<br>

#### 에러 확인

```react
const [error, setError] = useState(null);
```

- 에러 상태를 관리할 새로운 `useState` 선언

```react
async function fetchMovieHandler() {
  setIsLoading(true);
  setError(null); //이곳
  try {
    const response = await fetch("https://swapi.dev/api/films/");

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
  } catch (error) {
    setError(error.message); // 이곳
  }

  setIsLoading(false);
}
```

- `try` & `catch`를  사용하여 에러의 여부를 구별한다.

  - ```react
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    ```

    - `response.ok`가 false일 경우 에러메세지를 throw 해준다.

- 요청 시작과  `catch`에서 상태를 바꿔준다.

  -  `catch`에서 `try`에서 던져준 에러 매세지를 `setError`해준다.

```react
let content = <p>Found no movies.</p>;

if (movies.length > 0) {
  content = <MoviesList movies={movies} />;
}

if (error) {
  content = <p>{error}</p>;
}

if (isLoading) {
  content = <p>Loading...</p>;
}

return (
  <React.Fragment>
    <section>
      <button onClick={fetchMovieHandler}>Fetch Movies</button>
    </section>
    <section>{content}</section>
  </React.Fragment>
);
```

- `content`를 선언해준 뒤 if문을 통해 데이터의 존재 여부, 에러의 존재 여부, 로딩 상태의 따라 내용을 바꾼후 출력해준다.

<br><br>

### useEffect() 사용하기

- 앞서 사용했던 방법은 버튼을 클릭 했을 때 영화 정보를 로드 해줄 수는 있었지만, 처음 페이지가 로딩 될때는 작동하지 않는다.
- 이때 `useEffect()` 를 사용한다.

```react
useEffect(() => {
  fetchMovieHandler();
}, []);
```

- `useEffect()` 에 `fetchMovieHandler()`함수를 넣어주고 빈배열을 두번째 인자로 넣어주면 페이지가 로딩될때만 작동된다.
  - 이 방법에는 문제가 존재하긴 하나 이번에는 다루지 않는걸로 하겠다. 

























```react
{!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
```

