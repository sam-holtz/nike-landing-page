import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className="group flex flex-1 flex-col justify-center items-center w-full max-sm:w-full shadow-card hover:shadow-card-hover rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 bg-white">
            <div className="overflow-hidden rounded-xl">
                <img src={imgURL} alt={name} className="w-[280px] h-[280px] object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="mt-6 flex justify-start gap-2.5">
                <img src={star} alt="rating" width={24} height={24} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
            </div>
            <h3 className="mt-3 text-2xl leading-normal font-bold font-palanquin">{name}</h3>
            <p className="mt-3 font-semibold font-montserrat text-coral-red text-xl">{price}</p>
        </div>
    )
}

export default PopularProductCard;