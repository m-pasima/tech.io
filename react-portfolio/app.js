const { useState, useEffect } = React;

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/m-pasima/repos?per_page=5&sort=updated')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching repos:', error));
  }, []);

  return (
    <>
      <header>
        <h1>Nyanga P</h1>
        <p>DevOps and Cloud Engineer</p>
      </header>
      <main>
        <section>
          <h2>Recent GitHub Repositories</h2>
          <ul className="repo-list">
            {repos.map(repo => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
