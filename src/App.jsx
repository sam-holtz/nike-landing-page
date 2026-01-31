import Nav from "./components/Nav";
import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer } from "./sections";

const App = () => {
  return (
    <main className="relative bg-slate-50">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding bg-white">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding bg-white">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full bg-white">
        <Subscribe />
      </section>
      <section className="bg-slate-900 padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App;