import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col shadow-card hover:shadow-card-hover bg-white p-10 rounded-2xl gap-2 transition-all duration-300 hover:-translate-y-1 border border-slate-100">
            <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px] border-4 border-coral-red/30 ring-4 ring-coral-red/10" />
            <p className="mt-6 max-w-sm text-center font-montserrat text-slate-gray leading-relaxed">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img src={star} width={24} height={24} alt="star rating" className="object-contain m-0" />
                <p className="text-xl font-montserrat text-slate-gray font-semibold">{rating}</p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold text-coral-red">{customerName}</h3>
        </div>
    )
}

export default ReviewCard;