import './styles.css';

export default function SearchBar() {  
    return (
        <form className="ct-search-form">
            <input className="ct-input-search" type="text" placeholder="Digite sua busca"/>
            <button className="ct-button-search" type="submit">buscar</button>
        </form>
    );
}