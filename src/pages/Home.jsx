import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div id="index">
            <Header />
            <main className="mainindex">
                <section>
                    <a href="/articulo">
                        <article>
                            <img src="/img/elixSr Black Knitted Sweater.png" alt="elixSr Black Knitted Sweater" />
                            <p>elixSr Black Knitted Sweater</p>
                        </article>
                    </a>
                    <article>
                        <img src="/img/elixSr Spider Belt.png" alt="elixSr Spider Belt" />
                        <p>elixSr Spider Belt</p>
                    </article>
                    <article>
                        <img src="/img/elixSr White Knitted Sweater.png" alt="elixSr White Knitted Sweater" />
                        <p>elixSr White Knitted Sweater</p>
                    </article>
                    <article>
                        <img src="/img/ELIX TRIBAL JORTS.png" alt="£LIX TRIBAL JORTS" />
                        <p>£LIX TRIBAL JORTS</p>
                    </article>
                    <article>
                        <img src="/img/elixSr Reversible Tribal Beanie.png" alt="elixSr Reversible Tribal Beanie" />
                        <p>elixSr Reversible Tribal Beanie</p>
                    </article>
                    <article>
                        <img src="/img/elixSr Hokey Jersey.png" alt="elixSr Hokey Jersey" />
                        <p>elixSr Hokey Jersey</p>
                    </article>
                </section>
            </main>
            <Footer />
        </div>
    );
}
